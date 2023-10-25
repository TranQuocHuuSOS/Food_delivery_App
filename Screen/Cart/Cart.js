import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React,{useState} from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
const image = require("../../assets/Pattern.png");
const image_total = require("../../assets/Order_detail/Pattern.png");
import { SwipeListView } from "react-native-swipe-list-view";
import Card_price from "../Card_total_price/Card_price";

const Cart = () => {
  
  const [quantity, setQuantity] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  let totalPrice = 0;
  const data = [
    {
      key: "1",
      name_dish: "Spacy Fresh crab",
      name_restaurant: "kita",
      price: 35,
      menuImage: require("../../assets/MenuPhoto.png"),
      discount: 10,
    },
    {
      key: "2",
      name_dish: "Spacy Fresh crab",
      name_restaurant: "kita",
      price: 35,
      menuImage: require("../../assets/MenuPhoto1.png"),
      discount: 10,
    },
    {
      key: "3",
      name_dish: "Spacy Fresh crab",
      name_restaurant: "kita",
      price: 35,
      menuImage: require("../../assets/MenuPhoto2.png"),
      discount: 10,
    },
    {
      key: "4",
      name_dish: "Spacy Fresh crab",
      name_restaurant: "kita",
      price: 35,
      menuImage: require("../../assets/MenuPhoto.png"),
      discount: 10,
    },
    {
      key: "5",
      name_dish: "Spacy Fresh crab",
      name_restaurant: "kita",
      price: 35,
      menuImage: require("../../assets/MenuPhoto1.png"),
      discount: 10,
    },
  ];

  const increaseQuantity = (key) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [key]: (prevQuantity[key] || 0) + 1,
    }));
  };

  const decreaseQuantity = (key) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [key]: Math.max((prevQuantity[key] || 0) - 1, 1),
    }));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    data.forEach((item) => {
      const itemPrice =
        (item.price - item.discount) * (quantity[item.key] || 1);
      totalPrice += itemPrice;
    });

    totalPrice += 10;

    return totalPrice.toFixed(2);
  };
  const renderRow = (
    key,
    name_dish,
    name_restaurant,
    price,
    menuImage,
    discount
  ) => {
    const isSelected = selectedItems.includes(key);
    if (isSelected) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={() => console.log(`Item ${key} touched`)}
        style={styles.itemContainer}
        key={key}
      >
        <Text style={styles.itemText}>
          <View style={styles.card}>
            <View style={{flexDirection:"row"}}>
            <Image source={menuImage} style={{ width: 70, height: 70 }}></Image>
            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ fontWeight: "bold" }}>{name_dish}</Text>
              <Text style={{ color: "#000" }}>{name_restaurant}</Text>
              <Text
                style={{ fontWeight: "bold", color: "#6B50F6", fontSize: 20 }}
              >
                $ {price}
              </Text>
            </View>
            </View>
            <Pressable style={styles.amount}>
              <TouchableOpacity
                style={styles.plus}
                onPress={() => decreaseQuantity(key)}
              >
                <AntDesign name="minus" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.number}>{quantity[key] || 1}</Text>
              <TouchableOpacity
                style={styles.minus}
                onPress={() => increaseQuantity(key)}
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
      <ScrollView style={{bottom: 90, marginTop:80}}>
        
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
                item.name_dish,
                item.name_restaurant,
                item.price,
                item.menuImage,
                item.discount
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
          data={data}
          selectedItems={selectedItems}
          quantity={quantity}
          calculateTotalPrice={calculateTotalPrice}
        />
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Cart;
