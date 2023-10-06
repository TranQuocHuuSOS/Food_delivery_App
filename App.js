import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screen/Home/Home";
import Profile from "./Screen/Profile/Profile";
import Cart from "./Screen/Cart/Cart";
import Message from "./Screen/Message/Message";
import { Foundation, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import "react-native-gesture-handler";


const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: true,
  headerShown: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
    background: "#fff",
  },
};
export default function App() {

  const [isOpen, setOpen] = useState(false);
  const [accent, setAccent] = useState("#782AEB");

  const toggleSheet = () => {
    setOpen(!isOpen);
  };
  return (
    <NavigationContainer style={{ backgroundColor:"black"}}>
      <Tab.Navigator
        screenOptions={screenOptions}
        style={{ position: "absolute", backgroundColor: "black" }}
      >
        <Tab.Screen
          style={{
           
          }}
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{}}>
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Foundation
                      name="home"
                      size={24}
                      color={focused ? "#6B50F6" : "#6B50F6"}
                    />
                  </View>
                </View>
              );
            },
          }}
        ></Tab.Screen>
        <Tab.Screen
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          name="Profile"
          component={Profile}
          onPress={toggleSheet}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <MaterialCommunityIcons
                    name="face-man-profile"
                    size={24}
                    color={focused ? "#6B50F6" : "#6B50F6"}
                  />
                </View>
              );
            },
          }}
        ></Tab.Screen>
        <Tab.Screen
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Entypo
                    name="shopping-cart"
                    size={24}
                    color={focused ? "#6B50F6" : "#6B50F6"}
                  />
                </View>
              );
            },
          }}
        ></Tab.Screen>
        <Tab.Screen
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          name="Message"
          component={Message}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Entypo
                    name="message"
                    size={24}
                    color={focused ? "#6B50F6" : "#6B50F6"}
                  />
                </View>
              );
            },
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
