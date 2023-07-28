import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComponent from "../../common/components/button/button.component";
import HelloSvg from "../../common/components/svg/hello-svg";

const StartScreen = ({navigation} : any): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.svgContainer}>
          <HelloSvg/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Добро пожаловать!</Text>
          <Text style={styles.description}>Английские времена - это просто. Давайте быстрее приступим к учебе.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComponent backgroundColor="#0071F2" title="Начать" onPress={() => navigation.navigate('Список времен', {name: 'Jane'})}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    flex: 1,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: "20%"
  }
});

export default StartScreen;
