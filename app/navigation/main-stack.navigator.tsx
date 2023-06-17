import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import InfoScreen from "../screen/info/info.screen";
import StartScreen from "../screen/start/start.screen";
import TenseScreen from "../screen/tense/tense.screen";
import TrainerComponent from "../screen/trainer/trainer.screen";
import Ionicons from "@expo/vector-icons/Ionicons";

export type BottomTabNavigatorParamList = {
  Старт: undefined;
  Времена: undefined;
  "О приложении": undefined;
  Тренажер: undefined;
};

const MainTabScreenOptions = {
  headerShown: false,
  tabBarActiveTintColor: "#0071F2",
  tabBarInactiveTintColor: "gray",
};

const Tab = createBottomTabNavigator<any>();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={MainTabScreenOptions}
    initialRouteName="Времена"
  >
    <Tab.Screen
      name="Времена"
      component={TenseScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons size={20} name="book" color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="О приложении"
      component={InfoScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons size={20} name="information" color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const Stack = createNativeStackNavigator<any>();

const MainStackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Старт"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Старт" component={StartScreen} />
      <Stack.Screen name="Времена" component={BottomTabNavigator} />
      <Stack.Screen name="Тренажер" component={TrainerComponent} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
