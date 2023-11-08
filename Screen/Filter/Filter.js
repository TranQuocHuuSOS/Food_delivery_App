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

const Filter = () => {
  const [dishes, setDishes] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  

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

  const searchByCategory = () => {
    if (selectedCategory === "Restaurant") {
        
    } else if (selectedCategory === "Food") {
      
    }
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
                        selectedCategory === "Restaurant" ? "red" : "#6B50F6",
                    }}
                    onPress={() => setSelectedCategory("Restaurant")}
                  >
                    Restaurant
                  </Text>
                </View>
                <View style={styles.categoryItem}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: selectedCategory === "Food" ? "white" : "#6B50F6",
                    }}
                    onPress={() => setSelectedCategory("Food")}
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
                  <Text style={{ fontSize: 15, color: "#6B50F6" }}>1 Km</Text>
                </View>
                <View style={styles.categoryItem}>
                  <Text style={{ fontSize: 15, color: "#6B50F6" }}>10 Km</Text>
                </View>
                <View style={styles.categoryItem}>
                  <Text style={{ fontSize: 15, color: "#6B50F6" }}>1 Km</Text>
                </View>
              </ScrollView>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.sectionTitle}>Food</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.categoryItem}>
                  <Text style={{ fontSize: 15, color: "#6B50F6" }}>Pizza</Text>
                </View>
                <View style={styles.categoryItem}>
                  <Text style={{ fontSize: 15, color: "#6B50F6" }}>Soup</Text>
                </View>
              </ScrollView>
            </View>
            <View style={{ paddingTop: 30 }}>
              <TouchableOpacity
                style={styles.searchButton}
                onPress={searchByCategory}
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
