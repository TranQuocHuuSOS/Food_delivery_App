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
  ScrollView
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.96;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.65;
const MAX_UPWARD_TRANSLATE_Y =
BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT; // negative number;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;

const Profile = () => {
  const listMenu = [
    {
      id: "0",
      image: require("../.././assets/MenuImage/PhotoMenu1.png"),
      menuName: "Herbal Panceke",
      restaurantName: "Warung Herbal",
      price: "$7",
    },
    {
      id: "1",
      image: require("../.././assets/MenuImage/PhotoMenu2.png"),
      menuName: "Fruil Salad",
      restaurantName: "Wijie Resto",
      price: "$15",
    },
    {
      id: "2",
      image: require("../.././assets/MenuImage/PhotoMenu3.png"),
      menuName: "Green Noddle",
      restaurantName: "Noodle Home",
      price: "$5",
    },
    {
        id: "2",
        image: require("../.././assets/MenuImage/PhotoMenu3.png"),
        menuName: "Green Noddle",
        restaurantName: "Noodle Home",
        price: "$5",
      },
      {
        id: "2",
        image: require("../.././assets/MenuImage/PhotoMenu3.png"),
        menuName: "Green Noddle",
        restaurantName: "Noodle Home",
        price: "$5",
      },
      {
        id: "2",
        image: require("../.././assets/MenuImage/PhotoMenu3.png"),
        menuName: "Green Noddle",
        restaurantName: "Noodle Home",
        price: "$5",
      },
  ];
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

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/Profile/PhotoProfile.png")}
        style={{
          width: "100%",
          height: "65%",
        }}
        resizeMode="cover"
      ></ImageBackground>
      <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
        <View style={styles.draggableArea} {...panResponder.panHandlers}>
          <View style={styles.dragHandle} />
        </View>

        <View
          style={{
            marginHorizontal: 20,
            paddingVertical: 8,
            width: 120,
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
            Member good
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            paddingTop:15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Võ Thành Tâm
          </Text>
          <Pressable>
            <FontAwesome
              name="edit"
              size={30}
              color="#6B50F6"
              marginHorizontal={12}
            />
          </Pressable>
        </View>
        <Text
          style={{ lineHeight: 17, color: "#BBBBBB", marginHorizontal: 20 }}
        >
          Tammaxdog@gmail.com
        </Text>
        <Pressable style={{
          marginHorizontal: 20,
          flexDirection:'row',
          alignItems:'center',
          textAlign:'center',
          marginVertical:15
        }} >
            <Image  source={require("../../assets/Profile/VoucherIcon.png") } />
            <Text style={{marginLeft:15,fontWeight:'700'}}>You have 3 Vocher</Text>
        </Pressable>
        <Text style={{fontSize:18,fontWeight:"700",marginHorizontal: 20,}}>Favorite</Text>
        <ScrollView  showsVerticalScrollIndicator={false}
            style={{
              flexDirection: "column",
              marginHorizontal: 20,
              marginBottom:70
            }}
          >
            {listMenu.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  backgroundColor: "#ffffff",
                  marginVertical: 10,
                  borderRadius: 14,
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 15,
                  paddingHorizontal: 15,
                }}
              >
                <Image
                  style={{ width: 70, height: 70, resizeMode: "contain" }}
                  source={item.image}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 200,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "500",
                        fontWeight: "900",
                      }}
                    >
                      {item?.menuName}
                    </Text>
                    <Text
                      style={{
                        marginTop: 3,
                        fontSize: 13,
                        fontWeight: "500",
                        lineHeight: 17,
                        color: "#BBBBBB",
                      }}
                    >
                      {item?.restaurantName}
                    </Text>
                    <Text
                      style={{
                        color: "#6B50F6",
                        fontSize: 18,
                        fontWeight: "900",
                      }}
                    >
                      {item?.price}
                    </Text>
                  </View>
                  <Pressable
                    style={{
                      borderRadius:17,
                      backgroundColor: "#6B50F6",
                      paddingVertical:5,
                      paddingHorizontal:11
                    }}
                  >
                    <Text  style={{
                      color: "#ffff",
                      fontWeight: "500",
                    }}>Buy Again</Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </ScrollView>
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

export default Profile;
