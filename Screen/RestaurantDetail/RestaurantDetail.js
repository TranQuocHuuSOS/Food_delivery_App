import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const RestaurantDetail = () => {
  const navigation = useNavigation();

  const listRestaurant = [
    {
      id: "0",
      image: require("../.././assets/RestauranImage/Restaurant3.png"),
      name: "Vegan Resto",
      time: "12 Mins",
    },
    {
      id: "1",
      image: require("../.././assets/RestauranImage/Restaurant2.png"),
      name: "Healthy Food",
      time: "8 Mins",
    },
    {
      id: "2",
      image: require("../.././assets/RestauranImage/Restaurant3.png"),
      name: "Good Food",
      time: "12 Mins",
    },
    {
      id: "3",
      image: require("../.././assets/RestauranImage/Restaurant3.png"),
      name: "Good Food",
      time: "12 Mins",
    },
    {
      id: "4",
      image: require("../.././assets/RestauranImage/Restaurant3.png"),
      name: "Good Food",
      time: "12 Mins",
    },
    {
      id: "5",
      image: require("../.././assets/RestauranImage/Restaurant3.png"),
      name: "Good Food",
      time: "12 Mins",
    },
  ];
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView>
        <ImageBackground
          source={require("../../assets/Pattern.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
          resizeMode="cover"
        >
          <View >
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 20,
                justifyContent: "space-between",
                paddingTop: 60,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 30,
                  fontFamily: "sans-serif",
                }}
              >
                Find Your
                {"\n"}
                Favorite Food
              </Text>
              <Pressable
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#ffffff",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 14,
                }}
              >
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color={"#6B50F6"}
                />
              </Pressable>
            </View>
            <View
              style={{
                marginHorizontal: 20,
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 20,
              }}
            >
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  backgroundColor: "#f1eeff",
                  borderRadius: 10,
                  paddingVertical: 10,
                }}
              >
                <AntDesign
                  style={{ paddingLeft: 10 }}
                  name="search1"
                  size={20}
                  color="#6B50F6"
                />
                <TextInput
                  placeholder="What do you want to order?"
                  placeholderTextColor="#6B50F6"
                  width={220}
                />
              </Pressable>
              <Pressable
                style={{
                  paddingVertical: 13,
                  backgroundColor: "#f1eeff",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
                onPress={() => navigation.navigate("Filter")}
              >
                <MaterialIcons
                  name="mic-none"
                  size={22}
                  color="black"
                  marginHorizontal={12}
                />
              </Pressable>
            </View>
            <View
              style={{
                paddingVertical: 20,
                justifyContent: "space-between",
                flexDirection: "row",
                marginHorizontal: 20,
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 17 }}>
                Popular Restaurant
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {listRestaurant.map((item, index) => (
                <Pressable
                  key={index}
                  style={{
                    margin: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                    marginLeft: 20,
                    height: 180,
                    width: 150,
                    borderRadius: 20,
                    textAlign: "center",
                    marginTop: 20,
                  }}
                >
                  <Image
                    style={{ width: 110, height: 80, resizeMode: "contain" }}
                    source={item.image}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 15,
                      fontWeight: "500",
                      marginTop: 10,
                      fontWeight: "900",
                    }}
                  >
                    {item?.name}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 13,
                      fontWeight: "500",
                      marginTop: 7,
                      lineHeight: 17,
                      color: "#BBBBBB",
                    }}
                  >
                    {item?.time}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default RestaurantDetail;
