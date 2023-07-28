import * as React from "react";
import "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import MainStackNavigator from "./app/navigation/main-stack.navigator";

const App = (): JSX.Element => {
  return (
    <PaperProvider>
      <MainStackNavigator />
    </PaperProvider>
  );
};

export default App;
