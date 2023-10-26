import React, { useRef } from "react";
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
} from "react-native";
import { FontAwesome, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.96;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.5;
const MAX_UPWARD_TRANSLATE_Y =
  BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT; // negative number;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;

const DetailProduct = () => {
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
      id: "0",
      image: require("../../assets/DetailProduct/PhotoProfile.png"),
      name: "Dianne Russell",
      star: 5,
      time: "12 April 2021",
      decripton:"This Is great, So delicious! You Must Here, With Your family "
    }];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/DetailProduct/PhotoMenu.png")}
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
        <View style={{ marginHorizontal: 20, }}>
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
                  backgroundColor: "#BBBBBB",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: 'center',

                }}
              >
                <Ionicons name="location-sharp" size={25} color={"#6B50F6"} />
              </Pressable>
              <Pressable
                style={{
                  height: 34,
                  width: 34,
                  backgroundColor: "#BBBBBB",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: 'center',
                }}
              >
                <MaterialCommunityIcons name="heart" size={25} color={'#FF4B4B'} />
              </Pressable>
            </View>

          </View>
          <Text style={{ fontSize: 26, fontWeight: "bold", paddingTop: 10 }}>Rainbow Sandwich {"\n"}Sugarless</Text>
          <View style={{ flexDirection: 'row', paddingVertical: 10, gap: 20 }}>
            <Pressable style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center", gap: 5 }}>
              <FontAwesome name="star-half-empty" color={"#3FDA85"} size={30} />
              <Text style={{ fontSize: 15, color: '#BBBBBB', fontWeight: "300", }}>4.5 Rating</Text>
            </Pressable>
            <Pressable style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center", gap: 5 }}>
              <Fontisto name="shopping-bag" color={"#3FDA85"} size={22} />
              <Text style={{ fontSize: 15, color: '#BBBBBB', fontWeight: "300", }}>2000+ Order</Text>
            </Pressable>
          </View>
          <Text>
            Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt. Velit non est cillum consequat cupidatat ex Lorem laboris labore aliqua ad duis eu laborum.
            {"\n"}
            {"\n"}Strowberry
            {"\n"}Cream
            {"\n"}wheat
            {"\n"}
            {"\n"}
            Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt.
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', paddingVertical: 10, marginLeft: 10 }}>Testimonials</Text>

          <View
            style={{
              flexDirection: "column",
            }}
          >
            {Testimonials.map((item, index) => (
              <Pressable key={index}
                style={{
                  flexDirection: "row",
                  backgroundColor: "#ffffff",
                  marginVertical: 10,
                  borderRadius: 14,
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 15,
                  paddingHorizontal: 15,
                }} >
                <Image
                  style={{ width: 70, height: 70, resizeMode: "contain" }}
                  source={item.image}
                />
                <View style={{ flexDirection: 'column', }}>
                  <View style={{ flexDirection: 'row', backgroundColor:"yellow"}}>
                    <View style={{ flexDirection: 'column', }}>
                      <Text>{item.name}</Text>
                      <Text>{item.time}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }} >
                      <FontAwesome name="star-half-empty" color={"#3FDA85"} size={30} />
                      <Text>{item.star}</Text>
                    </View>
                  </View>
                  <View >
                    <Text style={{ flexDirection: 'row', backgroundColor:"yellow"}}> {item.decripton}</Text>
                  </View>
                </View>

              </Pressable>
            ))}
          </View>
        </View>
      </Animated.View>
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
