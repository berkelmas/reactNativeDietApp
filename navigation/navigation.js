import React from "react";
import { PixelRatio } from "react-native";

// NAVIGATION
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import NavigationService from "./NavigationService";

import HomeScreen from "../Screens/Home/HomeScreen";
import MainScreen from "../Screens/Main/MainScreen";
import IcomoonIcon from "../components/Typography/IcomoonIcon";
import SezinDrawer from "./CustomDrawer";
import { colors } from "../assets/styles/colors";
import ExerciseScreen from "../Screens/Exercise/ExerciseScreen";

const customAppContainer = props => {
  const tabStack = createBottomTabNavigator({
    Main: {
      screen: MainScreen,
      navigationOptions: {
        title: "Ana Sayfa",
        tabBarIcon: ({ focused, color, size }) => (
          <IcomoonIcon
            name="home"
            size={30}
            color={focused ? colors.green : colors.dark}
          />
        ),
        tabBarOptions: {
          activeTintColor: colors.green,
          inactiveTintColor: colors.dark
        }
      }
    },
    Exercise: {
      screen: ExerciseScreen,
      navigationOptions: {
        title: "Egzersiz",
        tabBarIcon: ({ focused, color, size }) => (
          <IcomoonIcon
            name="dumbbell"
            size={30}
            color={focused ? colors.green : colors.dark}
          />
        ),
        tabBarOptions: {
          activeTintColor: colors.green,
          inactiveTintColor: colors.dark
        }
      }
    }
  });

  const HomeStack = createSwitchNavigator(
    {
      Home: {
        screen: HomeScreen
      },
      MainScreen: {
        screen: tabStack
      }
    },
    {
      initialRouteName: "Home"
    }
  );

  const DrawerNav = createDrawerNavigator(
    {
      Home: {
        screen: HomeStack,
        navigationOptions: {
          title: "Ana Sayfa",
          drawerIcon: <IcomoonIcon name="home" size={30} color={colors.dark} />
        }
      }
    },
    {
      contentComponent: SezinDrawer,
      contentOptions: {
        inactiveTintColor: colors.dark,
        activeTintColor: colors.dark,
        activeBackgroundColor: "#F5F7F9",
        labelStyle: {
          fontFamily: "Poppins-Medium",
          fontWeight: "normal",
          fontSize: 18 / PixelRatio.getFontScale(),
          color: colors.dark
        },
        iconContainerStyle: {
          height: 35,
          width: 40,
          opacity: 1
        }
      }
    }
  );

  const switchNavigator = createSwitchNavigator(
    {
      Dashboard: {
        screen: DrawerNav
      }
      // Loading: {
      //   screen: LoadingScreen
      // }
    },
    {
      initialRouteName: "Dashboard"
    }
  );

  const ContainerNavigator = createAppContainer(switchNavigator);

  return (
    <ContainerNavigator
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  );
};

export default customAppContainer;
