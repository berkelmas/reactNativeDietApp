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
  ScrollView,
  Image
} from "react-native";
import { Item, Input, Label } from "native-base";
import IcomoonIcon from "../../components/Typography/IcomoonIcon";
import { colors } from "../../assets/styles/colors";

// import { Input } from "react-native-elements";

// create a component
const ExerciseScreen = props => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <ImageBackground
          source={require("../../assets/images/exercise-top.png")}
          style={{
            width: "100%",
            height: Dimensions.get("window").height / 3,
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-Light",
              fontSize: 20,
              marginLeft: 15
            }}
          >
            Günlük
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 20,
              marginLeft: 15
            }}
          >
            Egzersizler
          </Text>
          <View
            style={{
              width: Dimensions.get("window").width / 2,
              marginLeft: 15,
              marginTop: 10
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Light",
                fontSize: 15,
                color: "#767676"
              }}
            >
              Buradan günlük egzersizlerinizi görüntüleyebilirsiniz.
            </Text>
          </View>
        </ImageBackground>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            marginTop: -40
          }}
        >
          <View style={styles.formCard}>
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: colors.green,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <IcomoonIcon name="calendar" size={20} color="#ffffff" />
            </View>
            <Text
              style={{
                fontSize: 18,
                color: colors.dark,
                fontFamily: "Poppins-Light"
              }}
            >
              Pzt.
            </Text>
          </View>
          <View style={styles.formCard}>
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: colors.green,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <IcomoonIcon name="calendar" size={20} color="#ffffff" />
            </View>
            <Text
              style={{
                fontSize: 18,
                color: colors.dark,
                fontFamily: "Poppins-Light"
              }}
            >
              Sal.
            </Text>
          </View>
          <View style={styles.formCard}>
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: colors.green,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <IcomoonIcon name="calendar" size={20} color="#ffffff" />
            </View>
            <Text
              style={{
                fontSize: 18,
                color: colors.dark,
                fontFamily: "Poppins-Light"
              }}
            >
              Çar.
            </Text>
          </View>
          <View style={styles.formCard}>
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: colors.green,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <IcomoonIcon name="calendar" size={20} color="#ffffff" />
            </View>
            <Text
              style={{
                fontSize: 18,
                color: colors.dark,
                fontFamily: "Poppins-Light"
              }}
            >
              Per.
            </Text>
          </View>
          <View style={styles.formCard}>
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: colors.green,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <IcomoonIcon name="calendar" size={20} color="#ffffff" />
            </View>
            <Text
              style={{
                fontSize: 18,
                color: colors.dark,
                fontFamily: "Poppins-Light"
              }}
            >
              Cum.
            </Text>
          </View>
          <View style={styles.formCard}>
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: colors.green,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <IcomoonIcon name="calendar" size={20} color="#ffffff" />
            </View>
            <Text
              style={{
                fontSize: 18,
                color: colors.dark,
                fontFamily: "Poppins-Light"
              }}
            >
              Cmt.
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: 25,
            fontFamily: "Poppins-Medium",
            color: "#484848",
            marginLeft: 15,
            marginTop: 15
          }}
        >
          Günlük Plan
        </Text>

        <View style={{ alignItems: "center" }}>
          <View style={styles.itemCard}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/images/fitness-item.png")}
                style={{ height: 70, resizeMode: "contain" }}
              />
              <View>
                <Text
                  style={{ fontFamily: "Poppins-Regular", color: colors.dark }}
                >
                  Fitness Rutini
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Light",
                    color: "#767676",
                    fontSize: 12,
                    marginLeft: 10
                  }}
                >
                  - Bench Press
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Light",
                    color: "#767676",
                    fontSize: 12,
                    marginLeft: 10
                  }}
                >
                  - Shoulder Press
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  height: 50,
                  width: 50,
                  backgroundColor: colors.green,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 100
                }}
              >
                <IcomoonIcon name="undo" size={20} color="#ffffff" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

ExerciseScreen.navigationOptions = ({ navigation }) => ({
  headerShown: false
});

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8"
  },
  formCard: {
    width: Dimensions.get("window").width / 2.5,
    height: Dimensions.get("window").height / 16,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginBottom: 15,
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
  },
  itemCard: {
    width: (Dimensions.get("window").width * 8.5) / 10,
    minHeight: Dimensions.get("window").height / 7,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 15,
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
export default ExerciseScreen;
