import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { SentenceInterface, TenseInterface } from "../../../../../../types";
import { default as rndRangeNum } from "../../../../../../utils/randomNumberInRange";

interface AnswerUnitsComponentProps {
  tense: TenseInterface | undefined;
  sentence: SentenceInterface;
  setUserAnswer: React.Dispatch<React.SetStateAction<string>>;
}

const AnswerUnitsComponent: React.FC<AnswerUnitsComponentProps> = ({
  tense,
  sentence,
  setUserAnswer,
}): JSX.Element => {
  //This function return array of possible piece of answer
  const getPosibleAnswerUnitsArray = (
    sentence: SentenceInterface,
    tense: TenseInterface | undefined
  ): Array<string> => {
    let result = [""];

    if (tense != undefined) {
      result = [
        ...new Set(
          sentence.ru
            .split(" ")
            .concat(
              Object.values(
                tense.pronounts[1][rndRangeNum(0, tense.pronounts[1].length)]
              )
            )
            .concat(
              Object.values(
                tense.auxiliaries[0][
                  rndRangeNum(0, tense.auxiliaries[0].length)
                ]
              )
            )
            .concat(
              Object.values(
                tense.verbs[0][rndRangeNum(0, tense.verbs[0].length)]
              )
            )
            .filter((el) => el !== "")
            .sort()
        ),
      ];
    }

    return result;
  };

  return (
    <View style={styles.container}>
      {getPosibleAnswerUnitsArray(sentence, tense).map((element, idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.answerUnit}
          onPress={() => setUserAnswer((prev) => prev + " " + element)}
        >
          <Text style={styles.text}>{element}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: "silver",
    margin: 10,
    borderRadius: 10,
  },
  answerUnit: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
    marginVertical: 5,
  },
  text: {
    fontSize: 18
  }
});

export default AnswerUnitsComponent;
