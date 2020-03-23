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
  Keyboard
} from "react-native";
import { Item, Input, Label } from "native-base";
import IcomoonIcon from "../../components/Typography/IcomoonIcon";

// import { Input } from "react-native-elements";

// create a component
const HomeScreen = props => {
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
            Merhaba
          </Text>
          <Text style={{ fontFamily: "Poppins-Regular", fontSize: 20 }}>
            Yeni Kullanıcı
          </Text>
        </ImageBackground>

        <View style={{ alignItems: "center" }}>
          <View style={styles.formCard}>
            <Item floatingLabel>
              <Label style={{ fontFamily: "Poppins-Regular", fontSize: 15 }}>
                Yaşınız
              </Label>
              <Input />
            </Item>
            <Item style={{ marginTop: 10 }} floatingLabel>
              <Label style={{ fontFamily: "Poppins-Regular", fontSize: 15 }}>
                Kilonuz
              </Label>
              <Input />
            </Item>
            <Item style={{ marginTop: 10 }} floatingLabel>
              <Label style={{ fontFamily: "Poppins-Regular", fontSize: 15 }}>
                Boyunuz
              </Label>
              <Input />
            </Item>
            <Item style={{ marginTop: 10 }} floatingLabel>
              <Label style={{ fontFamily: "Poppins-Regular", fontSize: 15 }}>
                Hedef Kilonuz
              </Label>
              <Input />
            </Item>
            <Item style={{ marginTop: 10 }} floatingLabel>
              <Label style={{ fontFamily: "Poppins-Regular", fontSize: 15 }}>
                Kronik Rahatsızlığınız
              </Label>
              <Input />
            </Item>
            <TouchableOpacity
              onPress={props.navigation.navigate.bind(this, "MainScreen")}
              style={{
                backgroundColor: "#81B0F0",
                width: "90%",
                paddingHorizontal: 10,
                paddingVertical: 7,
                marginTop: 15,
                marginBottom: 10,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2
                },
                shadowOpacity: 0.15,
                shadowRadius: 2,

                elevation: 5
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  color: "#ffffff",
                  fontSize: 20
                }}
              >
                Başla
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: "Poppins-Light",
              color: "#767676",
              fontSize: 12,
              marginTop: 20,
              paddingHorizontal: (Dimensions.get("window").width * 0.7) / 10
            }}
          >
            * You can enter your information at the start to get your custom
            both fitness and diet analysis.
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "auto",
            marginBottom: 30
          }}
        >
          <IcomoonIcon name="arrow-right" size={30} color="#484848" />
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              color: "#484848",
              fontSize: 18,
              marginLeft: 10,
              marginRight: 10
            }}
          >
            Geç
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => ({
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
    minHeight: (Dimensions.get("window").height * 1.3) / 3,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: -30,
    paddingHorizontal: 10,
    paddingVertical: 5,
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
export default HomeScreen;
