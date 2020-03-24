//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from "react-native";
import { Item, Input, Label } from "native-base";
import IcomoonIcon from "../../components/Typography/IcomoonIcon";

// import { Input } from "react-native-elements";

// create a component
const MainScreen = props => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/home-page-man.png")}
          style={{
            width: "100%",
            height: Dimensions.get("window").height / 3,
            justifyContent: "center",
            marginLeft: 15
          }}
        >
          <Text style={{ fontFamily: "Poppins-Light", fontSize: 20 }}>
            Günaydın,
          </Text>
          <Text style={{ fontFamily: "Poppins-Regular", fontSize: 20 }}>
            Berk
          </Text>
        </ImageBackground>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity>
            <View style={styles.formCard}>
              <Image
                source={require("../../assets/images/diet-recommendation.png")}
                style={{ height: 100 }}
              />
              <Text style={{ fontFamily: "Poppins-Light", fontSize: 15 }}>
                Diyet Tavsiyeleri
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Exercise")}
          >
            <View style={{ ...styles.formCard, marginTop: 20 }}>
              <Image
                source={require("../../assets/images/exercise-recommendation.png")}
                style={{ height: 100 }}
              />
              <Text style={{ fontFamily: "Poppins-Light", fontSize: 15 }}>
                Egzersiz Tavsiyeleri
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

MainScreen.navigationOptions = ({ navigation }) => ({
  headerShown: false
});

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF4FF"
  },
  formCard: {
    width: (Dimensions.get("window").width * 8.5) / 10,
    minHeight: Dimensions.get("window").height / 5,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: -30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,

    elevation: 5
  }
});

//make this component available to the app
export default MainScreen;
