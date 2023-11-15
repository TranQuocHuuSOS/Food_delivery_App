import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screen/Home/Home";
import Profile from "./Screen/Profile/Profile";
import Cart from "./Screen/Cart/Cart";
import Message from "./Screen/Message/Message";
import Filter from "./Screen/Filter/Filter";
import Login from './Screen/Login/Login';
// import SignUp from "./Screen/SignIn/SignUp"
// import Onboarding from "./Screen/Onboarding/Onboarding";
import Payment from "./Screen/Payment/Payment";
import { Foundation, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import RestaurantDetail from "./Screen/RestaurantDetail/RestaurantDetail";
import DetailRestaurant from "./Screen/DetailRestaurant/DetailRestaurant";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./Screen/Chat/Chat";
import MenuDetail from "./Screen/MenuDetail/MenuDetail";
import EditPayment from "./Screen/Payment/EditPayment";
import Shipping from "./Screen/Shipping/Shipping";

import Map from "./Screen/Map/Map";
import Track from "./Screen/Track_order/Track";
import DetailProduct from "./Screen/DetailProduct/DetailProduct";
import DisplayFilter from "./Screen/Filter/DisplayFilter";
import Onboarding_a from "./Screen/Onboarding/Onboarding_a";
import Onboarding_b from "./Screen/Onboarding/Onboarding_b";


const Stack = createNativeStackNavigator();

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
            tabBarLabel: "",

            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <View style={{}}>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 4,
                    }}
                  >
                    <Foundation
                      name="home"
                      size={24}
                      color={focused ? "#2A01FF" : "#856DFF"}
                    />
                    <Text
                      style={
                        focused
                          ? styles.tabBarTextFocused
                          : styles.tabBarTextUnfocused
                      }
                    >
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
            padding: 4,
          }}
          name="Profile"
          component={Profile}
          options={({ route }) => ({
            tabBarLabel: "",

            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="face-man-profile"
                    size={24}
                    color={focused ? "#2A01FF" : "#856DFF"}
                  />
                  <Text
                    style={
                      focused
                        ? styles.tabBarTextFocused
                        : styles.tabBarTextUnfocused
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
            padding: 4,
          }}
          name="Cart"
          component={Cart}
          options={({ route }) => ({
            tabBarLabel: "",

            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Entypo
                    name="shopping-cart"
                    size={24}
                    color={focused ? "#2A01FF" : "#856DFF"}
                  />
                  <Text
                    style={
                      focused
                        ? styles.tabBarTextFocused
                        : styles.tabBarTextUnfocused
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
            padding: 4,
          }}
          name="Message"
          component={Message}
          options={({ route }) => ({
            tabBarLabel: "",

            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Entypo
                    name="message"
                    size={24}
                    color={focused ? "#2A01FF" : "#856DFF"}
                  />
                  <Text
                    style={
                      focused
                        ? styles.tabBarTextFocused
                        : styles.tabBarTextUnfocused
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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailRestaurant"
          component={DetailRestaurant}
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
          name="Chat"
          component={Chat}
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

        <Stack.Screen
          name="Onboarding_a"
          component={Onboarding_a}
          // options={{ headerShown: false }}
        />
        <Stack.Screen name="Onboarding_b" component={Onboarding_b} />
        {/* <Stack.Screen
          name="Login"
          component={Login}
          // options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="SignUp"
          component={SignUp}
          // options={{ headerShown: false }}
        /> */}

        <Stack.Screen
          name="Map"
          component={Map}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Track"
          component={Track}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DisplayFilter"
          component={DisplayFilter}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarIconStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarTextFocused: {
    color: "#2A01FF",
  },
  tabBarTextUnfocused: {
    color: "#6B50F6", // Màu của văn bản khi không được chọn
  },
});
