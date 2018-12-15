import React, { Component } from "react";
import { View, Text, Thumbnail, Content, Button } from "native-base";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Animated
} from "react-native";
import ContainerOverflow from "react-native-view-overflow";
import Icon from "react-native-vector-icons/FontAwesome";
import HeaderScreen from "./headerScreen";
import SoundPlayer from "react-native-sound-player";
import axios from "axios";

export default class MainApp extends Component {
  constructor() {
    super();
    this.springValue = new Animated.Value(1);
  }

  mainImage = require("../assets/shark.png");
  backImage = require("../assets/ocean.jpg");

  // rule = [
  //   "1",
  //   "2",
  //   "3",
  //   "4",
  //   "4",
  //   "4",
  //   "4",
  //   "1",
  //   "2",
  //   "3",
  //   "4",
  //   "4",
  //   "4",
  //   "4",
  //   "1",
  //   "2",
  //   "3",
  //   "4",
  //   "4",
  //   "4",
  //   "4",
  //   "1",
  //   "2",
  //   "3"
  // ];

  rule = ["1", "2", "3", "4"];

  state = {
    combos: 0,
    highestCombo: 0,
    length_click: 0,
    user: 1
    // btn1_length: 0,
    // btn1_length2: 1,
    // btn2_length: 0,
    // btn2_length2: 1
  };

  async componentDidMount() {
    const apiUrl =
      "http://127.0.0.1:3333/api/v1/leaderboard/" + this.state.user;

    const res = await axios.post(apiUrl);
    this.setState({});
  }

  combo_function() {
    if (this.state.length_click + 1 == this.rule.length) {
      this.setState({ combos: this.state.combos + 1 });
      this.setState({ length_click: 0 });
    }

    if (this.state.combos >= this.state.highestCombo) {
      this.setState({ highestCombo: this.state.combos });
    }
  }

  combo_stop() {
    alert("Salah, ulangi dari awal");
    this.setState({ length_click: 0 });
    this.setState({ combos: 0 });
  }

  btn1() {
    if (this.rule[this.state.length_click] == 1) {
      this.setState({ length_click: this.state.length_click + 1 });

      this.combo_function();

      try {
        SoundPlayer.playSoundFile("met", "mp3");
      } catch (e) {
        alert("canot play", e);
      }

      this.spring();
    } else {
      this.combo_stop();
    }
  }

  btn2() {
    if (this.rule[this.state.length_click] == 2) {
      this.setState({ length_click: this.state.length_click + 1 });

      this.combo_function();
      try {
        SoundPlayer.playSoundFile("al", "mp3");
      } catch (e) {
        alert("canot play", e);
      }
      this.spring();
    } else {
      this.combo_stop();
    }
  }

  btn3() {
    if (this.rule[this.state.length_click] == 3) {
      this.setState({ length_click: this.state.length_click + 1 });

      this.combo_function();
      try {
        SoundPlayer.playSoundFile("shark", "mp3");
      } catch (e) {
        alert("canot play", e);
      }
      this.spring();
    } else {
      this.combo_stop();
    }
  }

  btn4() {
    if (this.rule[this.state.length_click] == 4) {
      this.setState({ length_click: this.state.length_click + 1 });

      this.combo_function();
      try {
        SoundPlayer.playSoundFile("du", "mp3");
      } catch (e) {
        alert("canot play", e);
      }
      this.spring();
    } else {
      this.combo_stop();
    }
  }

  spring() {
    this.springValue.setValue(0.3);
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1
    }).start();
  }

  render() {
    return (
      // Use Icon.getImageSource function or using custom icons in the Icon.ToolbarAndroid component.

      <View style={{ flex: 1 }}>
        <ImageBackground
          source={this.backImage}
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        >
          {/* Header section */}
          <HeaderScreen />

          {/* Main App section */}
          <View
            style={{
              flex: 10,
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 40
            }}
          >
            <TouchableOpacity onPress={this.spring.bind(this)}>
              <Animated.Image
                source={this.mainImage}
                style={{
                  width: 400,
                  height: 380,
                  transform: [{ scale: this.springValue }]
                }}
              />
            </TouchableOpacity>
          </View>

          {/* Combo Section */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 30
            }}
          >
            <Text style={{ fontSize: 24, color: "white" }}>
              {this.state.combos}
            </Text>
            <Text style={{ fontSize: 24, color: "red" }}> COMBO!</Text>

            <Text note style={{ color: "white" }}>
              {this.state.highestCombo}
            </Text>
            <Text note style={{ color: "white" }}>
              {" "}
              HIGHEST COMBO!
            </Text>
          </View>

          {/* Button section */}
          <View style={{ flex: 2, flexDirection: "row" }}>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.btn2()}
              >
                <Text style={{ color: "white" }}>TAL</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.btn4()}
              >
                <Text style={{ color: "white" }}>DU</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 2, flexDirection: "row", paddingBottom: 40 }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.btn1()}
              >
                <Text style={{ color: "white" }}>ME</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.btn3()}
              >
                <Text style={{ color: "white" }}>SHARK</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#3867d6",
    padding: 10,
    borderRadius: 100,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  }
});
