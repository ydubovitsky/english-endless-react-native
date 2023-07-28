import { View, Text, Linking, StyleSheet, ScrollView } from "react-native";
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
          <ScrollView contentContainerStyle={{ rowGap: 10 }}>
            <Text style={styles.title}>О Приложении</Text>
            <Text style={styles.text}>
              В первую очередь, спасибо, что установили это приложение, я
              искренне надеюсь, что оно поможет вам в освоении такого
              прекрасного языка, как английский!
            </Text>
            <Text style={styles.text}>
              Данное приложение - это бесконечный поток упражнений, позволяющий
              оттачить ваши навыки до автоматизма. Вы изучите все основные
              временные конструкции и сможете применять их в реальной жизни.
            </Text>
            <View>
              <Text style={styles.text}>
                Я также выражаю большую благодарность, коллективу
              </Text>
              <Text
                style={{ ...styles.text, color: "blue"}}
                //TODO Change the link!
                onPress={() => Linking.openURL("https://storyset.com/people")}
              >
                storyset.com
              </Text>
              <Text style={styles.text}>за предоставление SVG изображений.</Text>
            </View>
            <Text style={styles.text}>
              Вы можете воспользуйтесь веб версией данной программы, перейдя по ссылке ниже:
            </Text>
          </ScrollView>
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
  },
  title: {
    fontSize: 32,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
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
