import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Modal } from "react-native-paper";

type AnswerModalComponentProps = {
  answer: string;
  visible: boolean;
  hideAnswer: () => void;
};

const AnswerModalComponent: React.FC<AnswerModalComponentProps> = ({
  answer,
  visible,
  hideAnswer
}): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Modal
      visible={visible}
      onDismiss={hideAnswer}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.textAnswer}>{answer}</Text>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignSelf: "center",
    width: "90%",
    height: "50%",
    padding: "5%",
    backgroundColor: "white",
    borderRadius: 10,
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
  textAnswer: {
    textAlign: "center",
    fontSize: 24
  }
})

export default AnswerModalComponent;
