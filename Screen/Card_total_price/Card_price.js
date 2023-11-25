import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";

const image_total = require("../../assets/Order_detail/Pattern.png");

const Card_price = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://645f33db9d35038e2d1ec62a.mockapi.io/Bill');
      const user = response.data.find((user) => user.user_id === 38);
      setUserData(user);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const calculateTotalPrice = (user) => {
    if (user && user.items && user.items.length > 0) {
      // Tính giá chưa trừ giảm giá
      const subTotal = user.items.reduce((acc, item) => {
        if (
          item &&
          item.dishPrice !== undefined &&
          item.quantity !== undefined
        ) {
          const itemTotal = item.dishPrice * item.quantity;
          return acc + itemTotal;
        } else {
          console.error('Invalid item data:', item);
          return acc;
        }
      }, 0);
  
      // Lấy tổng chiết khấu từ tất cả các món ăn
      const totalDiscount = user.items.reduce((acc, item) => {
        return acc + (item.dishCount !== undefined ? Math.min(item.dishCount, item.quantity) : 0);
      }, 0);
  
      // Thêm chi phí giao hàng vào tổng giá
      const deliveryCharge = 10;
  
      return {
        subTotal: subTotal.toFixed(2),
        total: (subTotal + deliveryCharge - totalDiscount).toFixed(2)
      };
    }
  
    return {
      subTotal: '0.00',
      total: '0.00'
    };
  };
  
  const calculateSubTotal = (user) => {
    if (user && user.items && user.items.length > 0) {
      const subTotal = user.items.reduce((acc, item) => {
        if (
          item &&
          item.dishPrice !== undefined &&
          item.quantity !== undefined
        ) {
          const itemTotal = item.dishPrice * item.quantity;
          return acc + itemTotal;
        } else {
          console.error('Invalid item data:', item);
          return acc;
        }
      }, 0);
  
      return subTotal.toFixed(2);
    }
  
    return '0.00';
  };

  return (
    <View style={styles.container_total}>
      <ImageBackground
        source={image_total}
        resizeMode="cover"
        style={styles.imageTotal}
      >
        {userData && (
          <View style={{ marginTop: 20, marginHorizontal: 20 }}>
            <View style={styles.sub_total}>
              <Text style={styles.text_total}>Sub_total</Text>
              <Text style={styles.number_total}>
              ${calculateSubTotal(userData)}
              </Text>
            </View>
            <View style={styles.delivery}>
              <Text style={styles.text_total}>Delivery Charge</Text>
              <Text style={styles.number_total}>10 $</Text>
            </View>
            <View style={styles.discount}>
              <Text style={styles.text_total}>Discount</Text>
              <Text style={styles.number_total}>10$</Text>
            </View>
          </View>
        )}
        {userData && (
          <View style={styles.total}>
            <Text style={styles.text_totals}>Total</Text>
            <Text style={styles.number_totals}>
            ${calculateTotalPrice(userData).total}
            </Text>
          </View>
        )}
        <TouchableOpacity onPress={() => navigation.navigate('Confirm Order')}>
          <View style={styles.button}>
            <Text style={styles.text_button}>Place My Order</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Card_price;

const styles = StyleSheet.create({
  container_total: {
    marginHorizontal: 25,
    paddingTop: 20,
  },
  imageTotal: {
    backgroundColor: '#6B50F6',
    height: 190,
    borderRadius: 20,
  },
  sub_total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  delivery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  discount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    color: 'white',
    marginTop: 10,
  },
  text_total: {
    color: 'white',
  },
  number_total: {
    color: 'white',
  },
  text_totals: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  number_totals: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  text_button: {
    color: '#6B50F6',
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
});
