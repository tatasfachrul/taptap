import React, { Component } from "react";
import { View, Text, Thumbnail, Content, Button } from "native-base";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Animated
} from "react-native";
import HeaderScreen from "./headerScreen";
import SoundPlayer from "react-native-sound-player";
import axios from "axios";

export default class MainApp extends Component {
  constructor() {
    super();
    this.springValue = new Animated.Value(1);
  }

  
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
    user: 1,
    mainImage: require("../assets/shark.png")
    
  };

  combo_function() {
    this.setState({ length_click: this.state.length_click + 1 });
    if (this.state.length_click + 1 == this.rule.length) {
      this.setState({ combos: this.state.combos + 1 });
      this.setState({ length_click: 0 });
    }

    if (this.state.combos >= this.state.highestCombo) {
      this.setState({ highestCombo: this.state.combos });
    }

    const apiURL = 'http://192.168.43.208:3333/api/v1/leaderboard/' + 1
    data_update = {
       "highestCombo": this.state.highestCombo     
    }
    config = {
      header: {
        'Content-Type': 'application/json'
      }
    }
    axios.patch(apiURL, data_update, config)
  }

  combo_stop() {
    alert("Salah, ulangi dari awal");
    this.setState({ length_click: 0 });
    this.setState({ combos: 0 });
  }

  btn1() {
    if (this.rule[this.state.length_click] == 1) {
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
                source={this.state.mainImage}
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
            <Text style={{ fontSize: 36, color: "red" }}>
              {this.state.combos}
            </Text>
            <Text style={{ fontSize: 36, color: "white" }}> COMBO!</Text>

            {/* <Text note style={{ color: "white" }}>
              {this.state.highestCombo}
            </Text>
            <Text note style={{ color: "white" }}>
              {" "}
              HIGHEST COMBO!
            </Text> */}
          </View>

          {/* Button section */}
          <View style={{ flex: 2, flexDirection: "row" }}>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => this.btn2()}
              >
                <Text style={{ color: "white" }}>TAL</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={styles.button4}
                onPress={() => this.btn4()}
              >
                <Text style={{ color: "white" }}>DU</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 2, flexDirection: "row", paddingBottom: 40 }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={styles.button1}
                onPress={() => this.btn1()}
              >
                <Text style={{ color: "white"}}>ME</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={styles.button3}
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
  button1: {
    alignItems: "center",
    backgroundColor: "#ff9ff3",
    padding: 10,
    borderRadius: 100,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto"
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#1dd1a1",
    padding: 10,
    borderRadius: 100,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  button3: {
    alignItems: "center",
    backgroundColor: "#ff4d4d",
    padding: 10,
    borderRadius: 100,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  button4: {
    alignItems: "center",
    backgroundColor: "#7d5fff",
    padding: 10,
    borderRadius: 100,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  },
});
