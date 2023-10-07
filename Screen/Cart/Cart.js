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
  Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import styles from "./styles";
import { AntDesign} from '@expo/vector-icons'; 
const image = require("../../assets/Pattern.png");
const image_total = require("../../assets/Order_detail/Pattern.png");
import { SwipeListView } from 'react-native-swipe-list-view';
const Cart = () => {
  const data = [
    { key: '1', name_dish: 'Spacy Fresh crab', name_restaurant:"kita", price:"35", menuImage: require("../../assets/MenuPhoto.png") },
    { key: '2', name_dish: 'Spacy Fresh crab', name_restaurant:"kita", price:"35", menuImage: require("../../assets/MenuPhoto1.png")  },
    { key: '3', name_dish: 'Spacy Fresh crab', name_restaurant:"kita", price:"35", menuImage: require("../../assets/MenuPhoto2.png")  },
    { key: '4', name_dish: 'Spacy Fresh crab', name_restaurant:"kita", price:"35", menuImage: require("../../assets/MenuPhoto.png") },
    { key: '5', name_dish: 'Spacy Fresh crab', name_restaurant:"kita", price:"35", menuImage: require("../../assets/MenuPhoto1.png")  },
    // Thêm dữ liệu khác nếu cần
  ];

  const renderRow = (key, name_dish, name_restaurant,price, menuImage) => (
    <TouchableOpacity
      onPress={() => console.log(`Item ${key} touched`)}
      style={styles.itemContainer}
      key={key}
    >
      <Text style={styles.itemText}>
      <View style={styles.card}>
              <Image source={menuImage}></Image>
              <View style={{marginHorizontal:25}}>
                <Text style={{fontWeight:"bold", }}>{name_dish}</Text>
                <Text style={{color:"#000"}}>{name_restaurant}</Text>
                <Text style={{fontWeight:"bold",color:"#6B50F6" }}> $ {price}</Text>
              </View>
              <View style={styles.amount}>
                <TouchableOpacity style={styles.plus} ><AntDesign name="minus" size={20} color="black"  /></TouchableOpacity>
                <Text style={styles.number}>1</Text>
                <TouchableOpacity style={styles.minus} ><AntDesign name="plus" size={20} color="white" /></TouchableOpacity>
              </View>
          </View>
      </Text>
    </TouchableOpacity>
  );

  const renderHiddenItem = () => (
    <View style={styles.hiddenContainer}>
      <TouchableOpacity
        style={[styles.hiddenButton, styles.deleteButton]}
        onPress={() => console.log('Delete Button pressed')}
      >
        <AntDesign name="delete" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.imageBackground}
        ></ImageBackground>
        <View style={styles.content}>
          <Text style={styles.text}>Order details</Text>
        </View>
        <View style={styles.card_food}>
        <SwipeListView
        useFlatList={true}
        data={data}
        renderItem={({ item }) => renderRow(item.key, item.name_dish, item.name_restaurant, item.price, item.menuImage)}
        renderHiddenItem={renderHiddenItem}
        keyExtractor={(item) => item.key}
        leftOpenValue={0}
        rightOpenValue={-80}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
      />
          
        </View>
        <View style={styles.container_total}>
          <ImageBackground
            source={image_total}
            resizeMode="cover"
            style={styles.imageTotal}
          >
            <View style={{ marginTop: 20, marginHorizontal: 20 }}>
              <View style={styles.sub_total}>
                <Text style={styles.text_total}>Sub_total</Text>
                <Text style={styles.number_total}>120 $</Text>
              </View>
              <View style={styles.delivery}>
                <Text style={styles.text_total}>Delivery Charge</Text>
                <Text style={styles.number_total}>10 $</Text>
              </View>
              <View style={styles.discount}>
                <Text style={styles.text_total}>Discount</Text>
                <Text style={styles.number_total}>20$</Text>
              </View>
            </View>
            <View style={styles.total}>
              <Text style={styles.text_totals}>Total</Text>
              <Text style={styles.number_totals}>150$</Text>
            </View>
            <TouchableOpacity >
              <View style={styles.button}>
                <Text style={styles.text_button}>Place My Order</Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
