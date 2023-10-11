import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screen/Home/Home";
import Profile from "./Screen/Profile/Profile";
import Cart from "./Screen/Cart/Cart";
import Message from "./Screen/Message/Message";
import Filter from "./Screen/Filter/Filter";
import Payment from "./Screen/Payment/Payment";
import { Foundation, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import RestaurantDetail from "./Screen/RestaurantDetail/RestaurantDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuDetail from "./Screen/MenuDetail/MenuDetail";
import EditPayment from "./Screen/Payment/EditPayment";
import Shipping from "./Screen/Shipping/Shipping";

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
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={screenOptions}
        style={{ position: "absolute", backgroundColor: "black" }}
      >
        <Tab.Screen
          style={{}}
          name="Home"
          component={Home}
          options={({ route }) => ({
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <View style={{}}>
                  <View
                    style={{ alignItems: "center", 
                    justifyContent: "center",
                    alignItems: "center", }}
                  >
                    <Foundation
                      name="home"
                      size={30}
                      color={focused ? "#6B50F6" : "#000"}
                    />
                   <Text style={focused ? styles.tabBarTextFocused : styles.tabBarTextUnfocused}>
                      Home
                    </Text>
                  </View>
                </View>
              );
            },
          })}
        ></Tab.Screen>
        <Tab.Screen
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          name="Profile"
          component={Profile}
          options={({ route }) => ({
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", 
                  justifyContent: "center",
                  alignItems: "center", }}
                >
                  <MaterialCommunityIcons
                    name="face-man-profile"
                    size={30}
                    color={focused ? "#6B50F6" : "#000"}
                  />
                   <Text
                      style={
                        focused? styles.tabBarTextFocused : styles.tabBarTextUnfocused
                      }
                    >
                      Profile
                    </Text>
                </View>
              );
            },
          })}
        ></Tab.Screen>
        <Tab.Screen
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          name="Cart"
          component={Cart}
          options={({ route }) => ({
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", 
                  justifyContent: "center",
                  alignItems: "center", }}
                >
                  <Entypo
                    name="shopping-cart"
                    size={30}
                    color={focused ? "#6B50F6" : "#000"}
                  />
                   <Text
                      style={
                        focused? styles.tabBarTextFocused : styles.tabBarTextUnfocused
                      }
                    >
                      Cart
                    </Text>
                </View>
              );
            },
          })}
        ></Tab.Screen>
        <Tab.Screen
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          name="Message"
          component={Message}
          options={({ route }) => ({
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center",
                  justifyContent: "center",
                  alignItems: "center", }}
                >
                  <Entypo
                    name="message"
                    size={30}
                    color={focused ? "#6B50F6" : "#000"}
                  />
                   <Text
                      style={
                        focused? styles.tabBarTextFocused : styles.tabBarTextUnfocused
                      }
                    >
                      Message
                    </Text>
                </View>
              );
            },
          })}
        ></Tab.Screen>
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RestaurantDetail"
          component={RestaurantDetail}
          //  options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuDetail"
          component={MenuDetail}
          //  options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Filter"
          component={Filter}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confirm Order"
          component={Payment}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payment"
          component={EditPayment}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Shipping"
          component={Shipping}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles= StyleSheet.create(
  {
    tabBarIconStyle: {
     
      justifyContent: "center",
      alignItems: "center",
    },
    tabBarTextFocused: {
      color: "#6B50F6",
    },
    tabBarTextUnfocused: {
      color: "#000", // Màu của văn bản khi không được chọn
    },
  }
)
