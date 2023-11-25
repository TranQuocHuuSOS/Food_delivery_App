import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card_price from "../Card_total_price/Card_price";
import axios from "axios";
const image = require("../../assets/Pattern.png");

const Cart = () => {
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://645f33db9d35038e2d1ec62a.mockapi.io/Bill"
        );
        const cartItems = response.data.find((item) => item.user_id === 38);

        if (cartItems && cartItems.items) {
          // If there are items in the cart, update the state
          setData(cartItems.items);
          const quantities = {};
          cartItems.items.forEach((item) => {
            quantities[item.key] = item.quantity || 1;
          });

          setQuantity(quantities);
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchData();
  }, []);

  const increaseQuantity = async (key) => {
    try {
      console.log("Before API call - Quantity:", quantity);
  
      const updatedItem = await axios.put(
        `https://645f33db9d35038e2d1ec62a.mockapi.io/Bill/items/${key}`,
        {
          quantity: (quantity[key] || 0) + 1,
        }
      );
  
      console.log("After API call - Updated Item:", updatedItem.data);
  
      setData((prevData) =>
        prevData.map((item) =>
          item.key === key ? updatedItem.data : item
        )
      );
  
      setQuantity((prevQuantity) => ({
        ...prevQuantity,
        [key]: (prevQuantity[key] || 0) + 1,
      }));
  
      console.log("After State Update - Quantity:", quantity);
    } catch (error) { 
      console.error("Error updating quantity:", error);
      Alert.alert("Error", "Failed to update quantity");
    }
  };
  
  const decreaseQuantity = async (key) => {
    try {
      console.log("Before API call - Quantity:", quantity);
  
      const updatedItem = await axios.put(
        `https://645f33db9d35038e2d1ec62a.mockapi.io/Bill/items/${key}`,
        {
          quantity: Math.max((quantity[key] || 0) - 1, 1),
        }
      );
  
      console.log("After API call - Updated Item:", updatedItem.data);
  
      setData((prevData) =>
        prevData.map((item) =>
          item.key === key ? updatedItem.data : item
        )
      );
  
      setQuantity((prevQuantity) => ({
        ...prevQuantity,
        [key]: Math.max((prevQuantity[key] || 0) - 1, 1),
      }));
  
      console.log("After State Update - Quantity:", quantity);
    } catch (error) {
      console.error("Error updating quantity:", error);
      Alert.alert("Error", "Failed to update quantity");
    }
  };


  // const calculateTotalPrice = () => {
  //   let subtotal = 0;
  
  //   // Calculate subtotal of all items in the cart, considering variable discounts
  //   data.forEach((item) => {
  //     const itemPrice = (item.dishPrice - item.disCount) * (quantity[item.key] || 1);
  //     subtotal += itemPrice;
  //   });
  
  //   // Add a fixed delivery charge of $10
  //   const deliveryCharge = 10;
  
  //   // Calculate total price including discounts for each item
  //   const totalPrice = subtotal + deliveryCharge;
  
  //   return totalPrice.toFixed(2);
  // };
  
  

  const renderRow = (
    dishId,  // Thay vì key
    dishName,
    restaurantNames,
    dishPrice,
    dishImg,
    disCount,
    quantity
  ) => {
    const isSelected = selectedItems.includes(dishId);
    if (isSelected) {
      return null;
    }

    return (
      <TouchableOpacity
        onPress={() => console.log(`Item ${dishId} touched`)}
        style={styles.itemContainer}
        key={dishId}
      >
        <Text style={styles.itemText}>
          <View style={styles.card}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={{ uri: dishImg }}  // Sửa đường dẫn ảnh
                style={{ width: 70, height: 70 }}
              ></Image>
              <View style={{ marginHorizontal: 10 }}>
                <Text style={{ fontWeight: "bold" }}>{dishName}</Text>
                <Text style={{ color: "#000" }}>{restaurantNames}</Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#6B50F6",
                    fontSize: 20,
                  }}
                >
                  $ {dishPrice}
                </Text>
              </View>
            </View>
            <Pressable style={styles.amount}>
              <TouchableOpacity
                style={styles.plus}
                onPress={() => decreaseQuantity(dishId)}
              >
                <AntDesign name="minus" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.number}>{quantity || 1}</Text>
              <TouchableOpacity
                style={styles.minus}
                onPress={() => increaseQuantity(dishId)}
              >
                <AntDesign name="plus" size={20} color="white" />
              </TouchableOpacity>
            </Pressable>
          </View>
        </Text>
      </TouchableOpacity>
    );
  };

  const handleDeleteItem = (key) => {
    console.log("Delete item with key:", key);
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(key)
        ? prevSelectedItems.filter((itemKey) => itemKey !== key)
        : [...prevSelectedItems, key]
    );
  };

  const renderHiddenItem = (data) => (
    <View style={styles.hiddenContainer}>
      <TouchableOpacity
        style={[styles.hiddenButton, styles.deleteButton]}
        onPress={() => handleDeleteItem(data.item.key)}
      >
        <AntDesign name="delete" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <ScrollView style={{ bottom: 90, marginTop: 80 }}>
          <View style={styles.content}>
            <Text style={styles.text}>Order details</Text>
          </View>
          <View style={styles.card_food}>
            <SwipeListView
              useFlatList={true}
              data={data}
              renderItem={({ item }) =>
                renderRow(
                  item.key,
                  item.dishName,
                  item.restaurantNames,
                  item.dishPrice,
                  item.dishImg,
                  item.disCount,
                  item.quantity
                )
              }
              renderHiddenItem={renderHiddenItem}
              keyExtractor={(item) => item.key}
              leftOpenValue={0}
              rightOpenValue={-100}
              previewRowKey={"0"}
              previewOpenValue={-40}
              previewOpenDelay={3000}
            />
          </View>
          <Card_price
            // data={data}
            // selectedItems={selectedItems}
            // quantity={quantity}
            // calculateTotalPrice={calculateTotalPrice}
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Cart;
