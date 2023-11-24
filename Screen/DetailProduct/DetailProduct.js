import React, { useRef, useState, useEffect } from "react";
import {
  Animated,
  PanResponder,
  Platform,
  StyleSheet,
  Dimensions,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.96;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.5;
const MAX_UPWARD_TRANSLATE_Y =
  BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT; // negative number;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;

const DetailProduct = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dish = route.params.dish;
  // const [cart, setCart]= ;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();
        lastGestureDy.current += gesture.dy;

        if (gesture.dy > 0) {
          // dragging down
          if (gesture.dy <= DRAG_THRESHOLD) {
            springAnimation("up");
          } else {
            springAnimation("down");
          }
        } else {
          // dragging up
          if (gesture.dy >= -DRAG_THRESHOLD) {
            springAnimation("down");
          } else {
            springAnimation("up");
          }
        }
      },
    })
  ).current;

  const springAnimation = (direction) => {
    console.log("direction", direction);
    lastGestureDy.current =
      direction === "down" ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  const Testimonials = [
    {
      image: require("../../assets/DetailProduct/PhotoProfile.png"),
      name: "Dianne Russell",
      star: 5,
      time: "12 April 2021",
      decripton:
        "This Is great, So delicious! You Must Here, With Your family ",
    },
    {
      id: "0",
      image: require("../../assets/DetailProduct/PhotoProfile.png"),
      name: "Dianne Russell",
      star: 5,
      time: "12 April 2021",
      decripton:
        "This Is great, So delicious! You Must Here, With Your family ",
    },
    {
      id: "0",
      image: require("../../assets/DetailProduct/PhotoProfile.png"),
      name: "Dianne Russell",
      star: 5,
      time: "12 April 2021",
      decripton:
        "This Is great, So delicious! You Must Here, With Your family ",
    },
  ];
  const addToCart = async (cart) => {
    try {
      // Fetch the existing cart from the API
      const response = await axios.get("https://645f33db9d35038e2d1ec62a.mockapi.io/Bill");
      const existingCart = response.data.find((item) => item.user_id === 38);

      if (existingCart) {
        // Check if the dish already exists in the cart
        const existingCartItem = existingCart.items.find(
          (item) => item.dishId === cart.dishId
        );

        if (existingCartItem) {
          // If the dish already exists, increment the quantity
          existingCartItem.quantity += cart.quantity || 1;
        } else {
          // If the dish does not exist, add a new item
          existingCart.items.push({ ...cart, quantity: cart.quantity || 1 });
        }

        // Update the existing cart in the API
        await axios.put(`https://645f33db9d35038e2d1ec62a.mockapi.io/Bill/${existingCart.id}`, existingCart);
      } else {
        // If the user doesn't have a cart, create a new one with the item
        await axios.post("https://645f33db9d35038e2d1ec62a.mockapi.io/Bill", {
          user_id: 38,
          items: [{ ...cart, quantity: cart.quantity || 1 }],
        });
      }

      navigation.navigate("Cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: dish.dishImg }}
        style={{
          width: "100%",
          height: "80%",
        }}
        resizeMode="cover"
      ></ImageBackground>
      <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
        <View style={styles.draggableArea} {...panResponder.panHandlers}>
          <View style={styles.dragHandle} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginHorizontal: 20 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  paddingVertical: 8,
                  width: 90,
                  backgroundColor: "#e6fff0",
                  borderRadius: 23,
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#6B50F6",
                    fontWeight: "500",
                  }}
                >
                  Popular
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Pressable
                  style={{
                    height: 34,
                    width: 34,
                    backgroundColor: "#c6bdf1",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons name="location-sharp" size={25} color={"#6B50F6"} />
                </Pressable>
                <Pressable
                  style={{
                    height: 34,
                    width: 34,
                    backgroundColor: "#f3c6c6",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="heart"
                    size={25}
                    color={"#FF4B4B"}
                  />
                </Pressable>
              </View>
            </View>
            <Text style={{ fontSize: 26, fontWeight: "bold", paddingTop: 10 }}>
              {dish.dishName}
            </Text>
            <View
              style={{ flexDirection: "row", paddingVertical: 10, gap: 20 }}
            >
              <Pressable
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <FontAwesome
                  name="star-half-empty"
                  color={"#3FDA85"}
                  size={30}
                />
                <Text
                  style={{ fontSize: 15, color: "#BBBBBB", fontWeight: "300" }}
                >
                  4.5 Rating
                </Text>
              </Pressable>
              <Pressable
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Fontisto name="shopping-bag" color={"#3FDA85"} size={22} />
                <Text
                  style={{ fontSize: 15, color: "#BBBBBB", fontWeight: "300" }}
                >
                  2000+ Order
                </Text>
              </Pressable>
            </View>
            <Text>{dish.dishDescription}</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                paddingVertical: 10,
                marginLeft: 10,
              }}
            >
              Testimonials
            </Text>

            <View
              style={{
                flexDirection: "column",
                paddingBottom: 70,
              }}
            >
              {Testimonials.map((item, index) => (
                <Pressable
                  key={index}
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#ffffff",
                    marginVertical: 10,
                    borderRadius: 14,
                    justifyContent: "space-between",
                    paddingVertical: 15,
                    paddingHorizontal: 15,
                    gap: 10,
                  }}
                >
                  <Image
                    style={{ width: 70, height: 70, resizeMode: "contain" }}
                    source={item.image}
                  />
                  <View
                    style={{ flexDirection: "column", position: "relative" }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        width: 220,
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontWeight: "500", fontSize: 20 }}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 13,
                            fontWeight: "500",
                            lineHeight: 17,
                            color: "#BBBBBB",
                          }}
                        >
                          {item.time}
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          width: 60,
                          height: 35,
                          justifyContent: "center",
                          borderRadius: 25,
                          gap: 6,
                          backgroundColor: "#d1cdeb",
                          position: "absolute",
                          right: 10,
                          top: 7,
                        }}
                      >
                        <FontAwesome name="star" color={"#6B50F6"} size={20} />
                        <Text
                          style={{
                            color: "#6B50F6",
                            fontWeight: "bold",
                            fontSize: 17,
                          }}
                        >
                          {item.star}
                        </Text>
                      </View>
                    </View>
                    <View style={{ width: 220, paddingTop: 20 }}>
                      <Text style={{}}>{item.decripton}</Text>
                    </View>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
        </ScrollView>
      </Animated.View>

      <TouchableOpacity
        onPress={
          () => addToCart(dish)
          // navigation.navigate("Cart", { selectedDish: dish });
        }
        style={{
          backgroundColor: "#6B50F6",
          height: 60,
          width: "auto",
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
          borderRadius: 10,
          top: 80,
        }}
      >
        <Text style={{ color: "#ffff", fontWeight: "bold", fontSize: 17 }}>
          Add To Cart
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheet: {
    position: "absolute",
    width: "100%",
    height: BOTTOM_SHEET_MAX_HEIGHT,

    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: "#a8bed2",
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
    backgroundColor: "#EEEEEE",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  draggableArea: {
    width: 132,
    height: 32,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  dragHandle: {
    width: 100,
    height: 6,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
  },
});

export default DetailProduct;
