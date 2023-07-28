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
    gap: 5,
    padding: 5,
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
  progressElementsContainer: {
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    minHeight: 40,
    alignContent: "center",
    justifyContent: "flex-start",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
    borderColor: "silver",
  },
});

export default UserProgressComponent;
