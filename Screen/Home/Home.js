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
const Home = () => {
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
  ];
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
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginBottom:70

        
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
        
          <View style={{}}>
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
            <View style={{ paddingTop: 20 }}>
              <ImageBackground
                source={require("../../assets/Image.png")}
                style={{
                  backgroundColor: "#6B50F6",
                  marginHorizontal: 20,
                  height: 150,
                  borderRadius: 20,
                }}
              >
                <View
                  style={{
                    alignItems: "flex-end",
                    marginRight: 25,
                    marginTop: 25,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#ffff",
                      paddingBottom: 20,
                    }}
                  >
                    Specital Deal For {"\n"}October
                  </Text>
                  <Pressable
                    style={{
                      paddingVertical: 12,
                      backgroundColor: "#ffff",
                      width: 100,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 12,
                      marginRight: 33,
                    }}
                  >
                    <Text style={{ fontWeight: "700", color: "#6B50F6" }}>
                      Buy Now
                    </Text>
                  </Pressable>
                </View>
              </ImageBackground>
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
                Nearest Restaurant
              </Text>

              <Pressable onPress={() => navigation.navigate("Detail")}>
                <Text style={{ fontSize: 12, color: "#6B50F6" }}>
                  View More
                </Text>
              </Pressable>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
            </ScrollView>
            <View
              style={{
                paddingVertical: 20,
                justifyContent: "space-between",
                flexDirection: "row",
                marginHorizontal: 20,
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 17 }}>
                Popular Menu
              </Text>
              <Pressable>
                <Text style={{ fontSize: 12, color: "#6B50F6" }}>
                  View More
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginHorizontal: 20,
              }}
            >
              {listMenu.map((item, index) => (
                <Pressable
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
                    </View>
                    <Text
                      style={{
                        color: "#6B50F6",
                        fontSize: 25,
                        fontWeight: "900",
                      }}
                    >
                      {item?.price}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
       
      </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
