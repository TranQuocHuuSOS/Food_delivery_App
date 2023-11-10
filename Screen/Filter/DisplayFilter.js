import { View, Text } from 'react-native'
import React from 'react'
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
import { useNavigation } from '@react-navigation/native';
const DisplayFilter = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigation = useNavigation();
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
      const allRestaurants = restaurants; 
      
    } else if (selectedCategory === "Food") {
      const allDishes = dishes; 
      console.log('====================================');
      console.log(allDishes,"allDishes");
      console.log('====================================');
    }
  };
  const searchByKeyword = async (keyword) => {
    try {
      // Gọi API giả của bạn hoặc bất kỳ API nào khác để lấy kết quả tìm kiếm dựa trên từ khóa
      const response = await fetch(`YOUR_API_ENDPOINT?keyword=${keyword}`);
      const data = await response.json();
  
      // Cập nhật trạng thái với kết quả tìm kiếm
      setSearchResults(data);
  
      // Điều hướng đến trang kết quả tìm kiếm
      navigation.navigate('SearchResults', { results: data });
    } catch (error) {
      console.error('Lỗi khi tìm kiếm theo từ khóa:', error);
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
        </View>
        
        </ImageBackground>
  </SafeAreaView>
  )
}

export default DisplayFilter
