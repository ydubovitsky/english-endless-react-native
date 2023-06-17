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
          <Text style={styles.aboutText}>Вы так же можете воспользоваться веб версией:</Text>
          <Text
            style={{ color: "blue", fontSize: 24 }}
            //TODO Change the link!
            onPress={() => Linking.openURL("http://stolovaya51.ru")}
          >
            stolovaya51.ru
          </Text>
        </View>
        <View style={styles.thxContainer}>
          <Text style={styles.thxText}>
            Хочу выразить большую благодарность моей сестре <Text style={{color: "red"}}>Кате!</Text> Ты всегда
            вдохновляешь меня двигаться вперед!
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
    padding: "10%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  aboutText: {
    textAlign: "center",
    fontSize: 17,
  },
  thxContainer: {
    padding: 10
  },
  thxText: {
    fontSize: 16,
    textAlign: "center"
  }
});

export default InfoScreen;
