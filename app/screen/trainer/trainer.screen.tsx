import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonRoundComponent from "../../common/components/button-round/button-round.component";
import { SentenceInterface, TenseInterface } from "../../types";
import { default as rndRangeNum } from "../../utils/randomNumberInRange";
import AnswerUnitsComponent from "./components/answer-units/answer-units.component";
import ProgressBlockComponent from "./components/progress-block/progress-block.component";
import UserProgressComponent from "./components/user-progress/user-progress.component";
import AnswerModalComponent from "./components/answer-modal/answer-modal.component";
import { Portal } from "react-native-paper";

const TrainerComponent = (props: any): JSX.Element => {
  //! Все параметры передаются в route.params!
  const { tense } = props.route.params!;

  // States
  const [sentence, setSentence] = useState<SentenceInterface>({
    en: "",
    ru: "",
  });
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [progressElementList, setProgressElementList] = useState<JSX.Element[]>(
    []
  );
  const [isAnswerVisible, setIsAnswerVisible] = useState<boolean>(false);

  // useEffect
  useEffect(() => {
    tense !== undefined ? getNextSentence(tense) : (() => undefined)(); //!TODO fixme
  }, []);

  // Methods
  const getOnlyKey = (object: object) => Object.keys(object)[0]; //! Util method

  const getOnlyValue = (object: object) => Object.values(object)[0]; //! Util method

  const buildSentence = (...words: Array<string>): string => {
    return words.reduce((prev, cur) => prev + " " + cur, " ");
  };

  const navigateToMainPage = () => {
    props.navigation.navigate("Времена");
  };

  const clearUserAnswer = (): void => {
    setUserAnswer("");
  };

  const showAnswer = (): void => {
    setIsAnswerVisible(true);
    setTimeout(() => {
      setIsAnswerVisible(false);
    }, 5000);
  };

  const hideAnswer = () : void => {
    setIsAnswerVisible(false);
  }

  const checkUserAnswer = (
    userAnswer: string,
    sentence: SentenceInterface
  ): void => {
    userAnswer.replace(/\s/g,'') === sentence.ru.replace(/\s/g,'')
      ? setProgressElementList([
          ...progressElementList,
          <ProgressBlockComponent
            key={progressElementList.length}
            backgroundColor="green"
          />,
        ])
      : setProgressElementList([
          ...progressElementList,
          <ProgressBlockComponent
            key={progressElementList.length}
            backgroundColor="red"
          />,
        ]);
    //!TODO Улучшить эту логику
    if (progressElementList.length > 50) {
      setProgressElementList([]);
    }
  };

  // Show next sentence
  const getNextSentence = (tense: TenseInterface): void => {
    const { strategies, pronounts, auxiliaries, verbs } = tense;

    const strategy = strategies[rndRangeNum(0, strategies.length)];

    const pronountsList = pronounts[strategy[0]];
    const pronoun = pronountsList[rndRangeNum(0, pronountsList.length)];

    const auxiliariesList = auxiliaries[strategy[1]];
    const auxiliary = auxiliariesList[rndRangeNum(0, auxiliariesList.length)];

    const verbsList = verbs[strategy[2]];
    const verb = verbsList[rndRangeNum(0, verbsList.length)];

    // Очищаем пользовательский ввод
    clearUserAnswer();

    setSentence({
      en: buildSentence(
        getOnlyKey(pronoun),
        getOnlyKey(auxiliary),
        getOnlyKey(verb)
      ),
      ru: buildSentence(
        getOnlyValue(pronoun),
        getOnlyValue(auxiliary),
        getOnlyValue(verb)
      ),
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "whitesmoke" }}>
      <Portal>
        <AnswerModalComponent answer={sentence.ru} visible={isAnswerVisible} hideAnswer={hideAnswer}/>
      </Portal>
      <View style={styles.container}>
        {/* //! TODO Добавить кнопку - модалку для подсказки */}
        <View style={styles.scrollViewContainer}>
          <ScrollView>
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>{sentence.en}</Text>
              <View style={styles.showAnswerButton}>
                <Text onPress={showAnswer}>Показать ответ</Text>
              </View>
            </View>
            <AnswerUnitsComponent
              sentence={sentence}
              tense={tense}
              setUserAnswer={setUserAnswer}
            />
          </ScrollView>
        </View>
        <View style={styles.userAnswer}>
          <Text style={styles.userAnswerText}>{userAnswer}</Text>
        </View>
        <UserProgressComponent progressElementList={progressElementList} />
        <View style={styles.buttonsContainer}>
          <ButtonRoundComponent
            title="Проверить"
            onPress={() => checkUserAnswer(userAnswer, sentence)}
            backgroundColor="#3b5998"
            child={<Ionicons name="checkmark-outline" size={32} />}
          />
          <ButtonRoundComponent
            title="Следующая задача"
            onPress={() => getNextSentence(tense!)}
            backgroundColor="#3b5998"
            child={<Ionicons name="caret-forward-outline" size={32} />}
          />
          <ButtonRoundComponent
            title="Очистить ответ"
            backgroundColor="#3b5998"
            child={<Ionicons name="trash-outline" size={32} />}
            onPress={clearUserAnswer}
          />
          <ButtonRoundComponent
            title="Очистить ответ"
            backgroundColor="#3b5998"
            child={<Ionicons name="home" size={32} />}
            onPress={navigateToMainPage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
  },
  scrollViewContainer: {
    display: "flex",
    flex: 6,
  },
  taskContainer: {
    height: 200,
    position: "relative",
    borderWidth: 1,
    borderColor: "silver",
    margin: 10,
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  taskText: {
    fontSize: 26,
    textAlign: "center",
  },
  showAnswerButton: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "white",
    padding: 5,
    borderRadius: 10,
    alignSelf: "center",
    bottom: "5%",
  },
  userAnswer: {
    height: 80,
    borderWidth: 1,
    borderColor: "silver",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  userAnswerText: {
    fontSize: 16,
  },
  buttonsContainer: {
    flex: 1,
    maxHeight: 60,
    gap: 2,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TrainerComponent;
