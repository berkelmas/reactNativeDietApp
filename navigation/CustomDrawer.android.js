import React from "react";
import {
  SafeAreaView,
  Image,
  Text,
  View,
  PixelRatio,
  TouchableNativeFeedback
} from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import DrawerNavigatorItems from "./DrawerNavigatorItems";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../assets/styles/colors";
import NavigationService from "./NavigationService";
import { useSelector, useDispatch } from "react-redux";

const SezinDrawer = props => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ padding: 10, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          style={{ width: 230, height: 100, resizeMode: "contain" }}
          source={SezinLogoText}
        />
      </View>

      <DrawerNavigatorItems {...props} />

      <TouchableNativeFeedback>
        <View
          style={{
            marginTop: "auto",
            marginBottom: 15,
            backgroundColor: "#F5F7F9",
            height: 50,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <AntDesign
            name="logout"
            size={30}
            style={{ paddingHorizontal: 15 }}
            color="#484848"
          />
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 18 / PixelRatio.getFontScale(),
              paddingHorizontal: 20,
              color: colors.dark
            }}
          >
            Çıkış Yap
          </Text>
        </View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
};

export default SezinDrawer;
