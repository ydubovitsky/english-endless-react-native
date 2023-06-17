import { View, Text, StyleSheet } from "react-native";

type UserProgressComponentProps = {
  progressElementList: JSX.Element[];
};

const UserProgressComponent: React.FC<UserProgressComponentProps> = ({
  progressElementList,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Ваш прогресс</Text>
      <View style={styles.progressElementsContainer}>
        {progressElementList}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 10,
  },
  progressElementsContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    minHeight: 30,
    alignContent: "center",
    justifyContent: "flex-start",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
    gap: 5,
  },
});

export default UserProgressComponent;
