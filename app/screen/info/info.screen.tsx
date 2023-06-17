import { View, Text, Linking, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AboutSvg from "../../common/components/svg/about-svg";

const InfoScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.svgContainer}>
          <AboutSvg />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>О Приложении</Text>
          <Text style={styles.text}>
            Данное приложение - это бесконечные упражнения, позволяющие оттачить
            ваши навыки до автоматизма.
          </Text>
          <Text style={styles.text}>
            Я очень надеюсь, что оно поможет вам в освоении такого
            прекрасного языка - как английский.
          </Text>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.text}>Вы так же можете воспользоваться веб версией:</Text>
          <Text
            style={{ color: "blue", fontSize: 24, textAlign: "center" }}
            //TODO Change the link!
            onPress={() => Linking.openURL("http://english-endless.ru")}
          >
            english-endless.ru
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  },
  svgContainer: {
    flex: 3,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 2,
    gap: 10,
    padding: 10,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "justify"
  },
  aboutContainer: {
    flex: 1,
    gap: 10,
    padding: 10,
  },
  aboutText: {
    textAlign: "justify",
    fontSize: 16,
  }
});

export default InfoScreen;
