import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";

import Svg, { Ellipse } from "react-native-svg";

type ButtonRoundComponentProps = {
  title: string;
  backgroundColor?: string;
  color?: string;
  child?: JSX.Element;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const ButtonRoundComponent: React.FC<ButtonRoundComponentProps> = ({
  title,
  backgroundColor,
  color,
  child,
  onPress,
}): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Svg viewBox="0 0 64.78 64.78" style={styles.ellipse}>
        <Ellipse
          stroke="white"
          strokeWidth={0}
          fill="white"
          cx={32}
          cy={32}
          rx={32}
          ry={32}
        ></Ellipse>
      </Svg>
      <View style={styles.text}>{child}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
  },
  ellipse: {
    width: 60,
    height: 60,
  },
  text: {
    position: "absolute",
    top: 12,
    left: 15,
    width: 60,
    height: 60,
    zIndex: 9999,
  },
});

export default ButtonRoundComponent;
