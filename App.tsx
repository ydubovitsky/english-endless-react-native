import { useFonts } from "expo-font";
import * as React from "react";
import "react-native-gesture-handler";
import MainStackNavigator from "./app/navigation/main-stack.navigator";

const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    // 'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  });

  return <MainStackNavigator />;
};

export default App;
