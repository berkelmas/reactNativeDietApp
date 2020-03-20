import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import * as Font from "expo-font";
import MyApp from "./navigation/navigation";

export default function App() {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    Font.loadAsync({
      "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
      "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
      "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
      "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
      "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
      "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
      "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
      Icomoon: require("./assets/fonts/icomoon.ttf")
    }).then(() => setLoaded(true));

    StatusBar.setHidden(true);

    /// FOR DEVELOPMENT PURPOSES
    // AsyncStorage.clear();
  }, []);

  return loaded && <MyApp />;
}

const styles = StyleSheet.create({});
