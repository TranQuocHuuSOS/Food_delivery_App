import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import styles from "./FilterStyles";
import { useNavigation } from "@react-navigation/native";
const Filter = () => {
  const navigation = useNavigation();
  const [dishes, setDishes] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({
    type: "",
    location: "",
    food: "",
  });
  useEffect(() => {
    // Hàm lấy dữ liệu từ API món ăn
    const fetchDishes = async () => {
      try {
        const response = await fetch(
          "https://646aaa197d3c1cae4ce2b26c.mockapi.io/dishs"
        );
        if (response.ok) {
          const data = await response.json();
          setDishes(data);
        } else {
          console.error(
            "Lỗi khi lấy dữ liệu từ API món ăn:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ API món ăn:", error);
      }
    };

    // Hàm lấy dữ liệu từ API nhà hàng
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "https://646aaa197d3c1cae4ce2b26c.mockapi.io/restaurants"
        );
        if (response.ok) {
          const data = await response.json();
          setRestaurants(data);
        } else {
          console.error(
            "Lỗi khi lấy dữ liệu từ API nhà hàng:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ API nhà hàng:", error);
      }
    };

    fetchDishes();
    fetchRestaurants();
  }, []);

  const toggleCategory = (category, group) => {
    setSelectedCategories((prevCategories) => {
      if (
        (group === "type" && category === "Restaurant") ||
        (group === "type" && category === "Food")
      ) {
        return {
          ...prevCategories,
          type: prevCategories.type === category ? "" : category,
          location: "",
          food: "",
        };
      } else if (group === "location" && prevCategories.type === "Food") {
        return prevCategories;
      } else {
        return {
          ...prevCategories,
          [group]: prevCategories[group] === category ? "" : category,
        };
      }
    });
  };
  const searchByCategories = () => {
    const { type, location, food } = selectedCategories;

    // If only Food is selected, set the type to Food
    const effectiveType = food && !location ? "Food" : type || "Restaurant";

    let filteredData;

    if (effectiveType === "Restaurant" || location) {
      filteredData = [...restaurants].filter(
        (restaurant) =>
          (!location || restaurant.distance === parseInt(location)) &&
          (!food ||
            dishes.some(
              (dish) =>
                dish.type_food.toLowerCase() === food.toLowerCase() &&
                dish.restaurant_id === parseInt(restaurant.id)
            ))
      );
    } else if (effectiveType === "Food") {
      filteredData = [...dishes].filter(
        (dish) => !food || dish.type_food.toLowerCase() === food.toLowerCase()
      );
    }

    // Navigate to DisplayFilter screen and pass the filtered data
    navigation.navigate("DisplayFilter", {
      Type: effectiveType,
      Data: filteredData,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/Pattern.png")}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              Find Your
              {"\n"}
              Favorite Food
            </Text>
            <Pressable style={styles.notificationButton}>
              <Ionicons
                name="notifications-outline"
                size={20}
                color="#6B50F6"
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
                width={280}
              />
            </Pressable>
          </View>
          <View style={styles.typeLocationFoodContainer}>
            <View style={{ marginTop: 16 }}>
              <Text style={styles.sectionTitle}>Type</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.categoryItem}>
                  <Text
                    style={{
                      fontSize: 15,

                      color:
                        selectedCategories.type === "Restaurant"
                          ? "red"
                          : "#6B50F6",
                    }}
                    onPress={() => toggleCategory("Restaurant", "type")}
                  >
                    Restaurant
                  </Text>
                </View>
                <View style={styles.categoryItem}>
                  <Text
                    style={{
                      fontSize: 15,
                      color:
                        selectedCategories.type === "Food" ? "red" : "#6B50F6",
                    }}
                    onPress={() => toggleCategory("Food", "type")}
                  >
                    Food
                  </Text>
                </View>
              </ScrollView>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.sectionTitle}>Location</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.categoryItem}>
                  <Text
                    style={{
                      fontSize: 15,
                      color:
                        selectedCategories.location === 1 ? "red" : "#6B50F6",
                    }}
                    onPress={() => toggleCategory(1, "location")}
                  >
                    1 Km
                  </Text>
                </View>
                <View style={styles.categoryItem}>
                  <Text
                    style={{
                      fontSize: 15,
                      color:
                        selectedCategories.location === 10 ? "red" : "#6B50F6",
                    }}
                    onPress={() => toggleCategory(10, "location")}
                  >
                    10 Km
                  </Text>
                </View>
                <View style={styles.categoryItem}>
                  <Text
                    style={{
                      fontSize: 15,
                      color:
                        selectedCategories.location === 20 ? "red" : "#6B50F6",
                    }}
                    onPress={() => toggleCategory(20, "location")}
                  >
                    20Km
                  </Text>
                </View>
              </ScrollView>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.sectionTitle}>Food</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.categoryItem}>
                  <Text
                    style={{
                      fontSize: 15,
                      color:
                        selectedCategories.food === "Pizza" ? "red" : "#6B50F6",
                    }}
                    onPress={() => toggleCategory("Pizza", "food")}
                  >
                    Pizza
                  </Text>
                </View>
                <View style={styles.categoryItem}>
                  <Text
                    style={{
                      fontSize: 15,
                      color:
                        selectedCategories.food === "Soup" ? "red" : "#6B50F6",
                    }}
                    onPress={() => toggleCategory("Soup", "food")}
                  >
                    Soup
                  </Text>
                </View>
              </ScrollView>
            </View>
            <View style={{ paddingTop: 30 }}>
              <TouchableOpacity
                style={styles.searchButton}
                onPress={searchByCategories}
              >
                <Text style={styles.searchButtonText}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Filter;
