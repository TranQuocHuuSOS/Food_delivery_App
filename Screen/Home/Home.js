import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  const [searchResults, setSearchResults] = useState({
    dishes: [],
  });
  const [searchText, setSearchText] = useState("");

  const navigation = useNavigation();

  const [dataWithRestaurant, setData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
  const getAPIData = async () => {
    const dishUrl = `https://646aaa197d3c1cae4ce2b26c.mockapi.io/dishs`;
    let result = await fetch(dishUrl);
    if (!result.ok) {
      throw new Error(`HTTP Error! Status:${result.status}`);
    }
    const dishes = await result.json();
    // lấy tên nhà hàng liên quan

    const restaurantUrl = `https://646aaa197d3c1cae4ce2b26c.mockapi.io/restaurants`;
    result = await fetch(restaurantUrl);
    if (!result.ok) {
      throw new Error(`HTTP Error! Status:${result.status}`);
    }
    const restaurants = await result.json();

    // xử lý giữa món ăn và nhà hàng

    const dataWithRestaurant = dishes.map((dish) => {
      const restaurant = restaurants.find(
        (restaurant) => restaurant.id === dish.restaurant_id
      );
      const restaurantName = restaurant
        ? restaurant.name
        : "Unknown Restaurant";

      return {
        dishId: dish.id,
        dishName: dish.name_food,
        dishImg: dish.img,
        dishTypeFood: dish.type_food,
        dishPrice: dish.price,
        dishDescription: dish.description,
        dishIdRestaurant: dish.restaurant_id,
        restaurantNames: restaurantName,
      };
    });

    setData(dataWithRestaurant);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getAPIData();
        await getRestaurantData();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const getRestaurantData = async () => {
    const restaurantUrl =
      "https://646aaa197d3c1cae4ce2b26c.mockapi.io/restaurants";
    try {
      const response = await fetch(restaurantUrl);
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      const restaurantData = await response.json();
      setRestaurantData(restaurantData);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const searchs = (text) => {
    if (text && typeof text === "string") {
      const searchTextLowerCase = text.toLowerCase();
      const filteredDishes = dataWithRestaurant.filter((item) =>
        item.dishName.toLowerCase().includes(searchTextLowerCase)
      );

      setSearchResults({
        dishes: filteredDishes,
      });
    }
  };

  const navigateToDishDetail = (dishId) => {
    const selectedDish = dataWithRestaurant.find(
      (dish) => dish.dishId === dishId
    );
    if (selectedDish) {
      navigation.navigate("DetailProduct", { dish: selectedDish });
    }
  };

  const navigateToRestaurantDetail = (id) => {
    const selectedRestaurant = restaurantData.find(
      (restaurant) => restaurant.id === id
    );
    if (selectedRestaurant) {
      navigation.navigate("RestaurantDetail", { restaurant:selectedRestaurant });
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,

        marginBottom: 70,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
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
                  value={searchText}
                  onChangeText={(text) => {
                    setSearchText(text);
                    searchs(text);
                  }}
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
                <FontAwesome
                  name="filter"
                  size={22}
                  color="#6B50F6"
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

              <Pressable
                onPress={() =>
                  navigation.navigate("DetailRestaurant", {
                    data: restaurantData,
                  })
                }
              >
                <Text style={{ fontSize: 12, color: "#6B50F6" }}>
                  View More
                </Text>
              </Pressable>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {restaurantData.slice(0, 3).map((items) => (
                <TouchableOpacity
                  key={items.id}
                  onPress={() => navigateToRestaurantDetail(items.id)}
                >
                  <View
                    key={items.id}
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
                      style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                        borderRadius: 10,
                      }}
                      source={{ uri: items.image }}
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
                      {items.name}
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
                      {items.time}Mins
                    </Text>
                  </View>
                </TouchableOpacity>
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

              <Pressable
                onPress={() =>
                  navigation.navigate("MenuDetail", {
                    data: dataWithRestaurant,
                  })
                }
              >
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
              {/* Search dishs */}
              {searchResults.dishes.length > 0 && (
                <View>
                  {searchResults.dishes.map((item) => (
                    <TouchableOpacity
                      key={item.dishId}
                      onPress={() => navigateToDishDetail(item.dishId)}
                    >
                      <View
                        key={item.dishId}
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
                          style={{
                            width: 60,
                            height: 60,
                            resizeMode: "contain",
                            borderRadius: 10,
                          }}
                          source={{ uri: item.dishImg }}
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
                              
                                fontSize: 16,
                                fontWeight: "500",
                                fontWeight: "900",
                              }}
                            >
                              {item.dishName}
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
                              {item.restaurantNames}
                            </Text>
                          </View>
                          <Text
                            style={{
                              color: "#6B50F6",
                              fontSize: 25,
                              fontWeight: "900",
                            }}
                          >
                            {item.dishPrice}$
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              )}

              {!searchResults.dishes.length > 0 && (
                <View>
                  {dataWithRestaurant.slice(0, 3).map((item) => (
                    <TouchableOpacity
                      key={item.dishId}
                      onPress={() => navigateToDishDetail(item.dishId)}
                    >
                      <View
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
                          style={{
                            width: 60,
                            height: 60,
                            resizeMode: "contain",
                            borderRadius: 10,
                          }}
                          source={{ uri: item.dishImg }}
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
                              
                                fontSize: 16,
                                fontWeight: "500",
                                fontWeight: "900",
                              }}
                            >
                              {item.dishName}
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
                              {item.restaurantNames}
                            </Text>
                          </View>
                          <Text
                            style={{
                              color: "#6B50F6",
                              fontSize: 25,
                              fontWeight: "900",
                            }}
                          >
                            {item.dishPrice}$
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
