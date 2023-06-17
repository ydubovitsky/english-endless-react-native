import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import React from "react";
import {
  FUTURE_CONTINUOUS,
  FUTURE_PERFECT,
  FUTURE_SIMPLE,
  PAST_CONTINUOUS,
  PAST_PERFECT,
  PAST_SIMPLE,
  PRESENT_CONTINUOUS,
  PRESENT_PERFECT,
  PRESENT_SIMPLE,
} from "../../../assets/data";

const PRESENT_CONTINUOUS_IMG_SRC = require("./images/present-continuous.png");
const PAST_CONTINUOUS_IMG_SRC = require("./images/past-continuous.png");
const FUTURE_CONTINUOUS_IMG_SRC = require("./images/future-continuous.png");
const PRESENT_SIMPLE_IMG_SRC = require("./images/present-simple.png");
const PAST_SIMPLE_IMG_SRC = require("./images/past-simple.png");
const FUTURE_SIMPLE_IMG_SRC = require("./images/future-simple.png");
const PRESENT_PERFECT_IMG_SRC = require("./images/present-perfect.png");
const PAST_PERFECT_IMG_SRC = require("./images/past-perfect.png");
const FUTURE_PERFECT_IMG_SRC = require("./images/future-perfect.png");

const TENSES_LIST = [
  { entity: PRESENT_CONTINUOUS, imgSrc: PRESENT_CONTINUOUS_IMG_SRC },
  { entity: PAST_CONTINUOUS, imgSrc: PAST_CONTINUOUS_IMG_SRC },
  { entity: FUTURE_CONTINUOUS, imgSrc: FUTURE_CONTINUOUS_IMG_SRC },
  { entity: PRESENT_SIMPLE, imgSrc: PRESENT_SIMPLE_IMG_SRC },
  { entity: PAST_SIMPLE, imgSrc: PAST_SIMPLE_IMG_SRC },
  { entity: FUTURE_SIMPLE, imgSrc: FUTURE_SIMPLE_IMG_SRC },
  { entity: PRESENT_PERFECT, imgSrc: PRESENT_PERFECT_IMG_SRC },
  { entity: PAST_PERFECT, imgSrc: PAST_PERFECT_IMG_SRC },
  { entity: FUTURE_PERFECT, imgSrc: FUTURE_PERFECT_IMG_SRC },
];

const TenseScreen = (props: any): JSX.Element => {
  const showAllTenses = (): JSX.Element[] => {
    return TENSES_LIST.map((tense, idx) => (
      <ImageBackground
        source={tense.imgSrc}
        resizeMode="cover"
        style={styles.image}
        key={idx}
      >
        <TouchableOpacity
          style={styles.tenseContainer}
          onPress={() =>
            props.navigation.navigate("Тренажер", { tense: tense.entity })
          }
        >
        </TouchableOpacity>
      </ImageBackground>
    ));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ScrollView showsHorizontalScrollIndicator={false} >
            {showAllTenses()}
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  tenseContainer: {
    flex: 1,
    display: "flex",
    height: 250,
  },
  image: {
    flex: 1,
    marginVertical: 5,
    borderRadius: 10,
    overflow: "hidden"
  },
});

export default TenseScreen;
