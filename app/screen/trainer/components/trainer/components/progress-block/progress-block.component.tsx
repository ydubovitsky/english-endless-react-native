import { View, StyleSheet } from "react-native";

type ProgressBlockComponentProps = {
  backgroundColor?: string;
};

const ProgressBlockComponent: React.FC<ProgressBlockComponentProps> = ({
  backgroundColor,
}): JSX.Element => {
  return <View style={[styles.container, {backgroundColor: backgroundColor}]}></View>;
};

const styles = StyleSheet.create({
  container: {
    width: 10,
    height: 10,
  },
});

export default ProgressBlockComponent;
