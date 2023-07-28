import { View, Text, Linking, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AboutSvg from "../../common/components/svg/about-svg";
import ButtonComponent from "../../common/components/button/button.component";

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
            В первую очередь, спасибо, что устагновили это приложение, я
            искренне надеюсь, что оно поможет вам в освоении такого прекрасного
            языка, как английский!
          </Text>
          <Text style={styles.text}>
            Данное приложение - это бесконечный поток упражнений, позволяющий
            оттачить ваши навыки до автоматизма. Вы изучите все основные
            временные конструкции и сможете применять их в реальной жизни.
          </Text>
          <Text style={styles.text}>
            Вы так же можете воспользоваться полноценной веб версией данной
            программы:
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComponent
            title="Веб сайт"
            backgroundColor="#0071F2"
            onPress={() => Linking.openURL("http://english-endless.ru")}
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
  svgContainer: {
    flex: 3,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 4,
    backgroundColor: "white",
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    padding: 20,
    flexDirection: "column",
    gap: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: "20%",
  },
});

export default InfoScreen;
