import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { SentenceInterface, TenseInterface } from "../../../../types";
import { default as rndRangeNum } from "../../../../utils/randomNumberInRange";

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
  const getPossibleAnswerUnitsArray = (
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
      {getPossibleAnswerUnitsArray(sentence, tense).map((element, idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.answerUnit}
          onPress={() =>
            setUserAnswer((prev) => {
              return prev + " " + element;
            })
          }
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
    backgroundColor: "white",
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
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#F2F2F2",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default AnswerUnitsComponent;
