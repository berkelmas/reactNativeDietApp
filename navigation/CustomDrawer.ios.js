import React, { useEffect } from "react";
import {
  SafeAreaView,
  Image,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import DrawerNavigatorItems from "./DrawerNavigatorItems";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../assets/styles/colors";
import { useSelector, useDispatch } from "react-redux";

const SezinDrawer = props => {
  // console.log(props.items[0]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ padding: 10, justifyContent: "center", alignItems: "center" }}
      >
        {/* 
        <Image
          style={{ width: 230, height: 100, resizeMode: "contain" }}
          source={SezinLogoText}
        />
        */}
      </View>

      <DrawerNavigatorItems {...props} />

      <TouchableOpacity
        style={{
          marginTop: "auto",
          backgroundColor: "#F5F7F9",
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 8
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
            fontSize: 18,
            paddingHorizontal: 20,
            color: colors.dark
          }}
        >
          Çıkış Yap
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SezinDrawer;
