/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import MainApp from "./screens/mainScreen";

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320
  }
});

const slides = [
  {
    key: "somethun",
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("./assets/1.jpg"),
    imageStyle: styles.image,
    backgroundColor: "#59b2ab"
  },
  {
    key: "somethun-dos",
    title: "Title 2",
    text: "Other cool stuff",
    image: require("./assets/2.jpg"),
    imageStyle: styles.image,
    backgroundColor: "#febe29"
  },
  {
    key: "somethun1",
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("./assets/3.jpg"),
    imageStyle: styles.image,
    backgroundColor: "#22bcb5"
  }
];

export default class App extends React.Component {
  state = {
    // Set True for MainApp, False for Introduction
    showRealApp: true
  };

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };

  render() {
    if (this.state.showRealApp) {
      return <MainApp />;
    } else {
      return (
        <AppIntroSlider slides={slides} onDone={this._onDone} showSkipButton />
      );
    }
  }
}
