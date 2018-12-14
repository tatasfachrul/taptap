import React, { Component } from "react";
import { View, Text, Thumbnail, Content } from "native-base";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from "react-native";
import ContainerOverflow from "react-native-view-overflow";
import Icon from "react-native-vector-icons/FontAwesome";

export default class headerScreen extends Component {
    render(){
        return(
            <View
            style={{
              flex: 2,
              backgroundColor: "#3867d6",
              flexDirection: "row"
            }}
          >
            {/* Leader board section */}
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  flex: 4,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={{ color: "#dcdde1" }}>Ranking #????</Text>
                <Icon.Button
                  name="trophy"
                  backgroundColor="#f39c12"
                  // onPress={this.loginWithFacebook}
                >
                  <Text
                    style={{
                      fontFamily: "Arial",
                      fontSize: 12,
                      color: "black"
                    }}
                  >
                    Leaderboard
                  </Text>
                </Icon.Button>
              </View>
              <View
                style={{
                  flex: 2,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon name="trophy" size={50} color="#f39c12" />
              </View>
            </View>

            {/* Login section */}
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  flex: 4,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text>Username</Text>
                <Icon.Button
                  name="facebook"
                  backgroundColor="#3b5998"
                  // onPress={this.loginWithFacebook}
                >
                  <Text
                    style={{
                      fontFamily: "Arial",
                      fontSize: 12,
                      color: "white"
                    }}
                  >
                    Facebook Login
                  </Text>
                </Icon.Button>
              </View>
              <View
                style={{
                  flex: 2,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Thumbnail
                  square
                  source={require("../assets/3.jpeg")}
                  style={{ borderRadius: 5 }}
                />
              </View>
            </View>
          </View>

        )

    }
}