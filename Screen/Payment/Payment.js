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
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Card_price from "../Card_total_price/Card_price";
const images = require("../../assets/Pattern.png");
const LogoPay = require("../../assets/paypa/Logosss.png");
const image_total = require("../../assets/Order_detail/Pattern.png");
const Payment = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
       
        color: "#FEFEFF",
      }}
    >
      <ImageBackground
        source={images}
        style={{
          width: "100%",
          height: "100%",

          color: "#6B50F6",
        }}
        resizeMode="cover"
      >
        <ScrollView>
          <View style={{ marginHorizontal: 20 }}>
            <View
              style={{
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 30,
                  fontFamily: "sans-serif",
                }}
              >
                Payment Order
              </Text>
            </View>
            <View style={{ paddingTop: 30 }}>
              <View
                style={{
                  height: 108,
                  width: "100%",
                  borderRadius: 20,
                  backgroundColor: "white",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginHorizontal: 20,
                    marginVertical: 20,
                  }}
                >
                  <Text style={{ color: "#22242E" }}>Deliver To</Text>
                  <Text
                    style={{ color: "#6B50F6" }}
                    onPress={() => navigation.navigate("Shipping")}
                  >
                    Edit
                  </Text>
                </View>
                <View
                  style={{
                    marginHorizontal: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Pressable
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 100,
                      backgroundColor: "#604AD3",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesome5
                      name="map-marker-alt"
                      size={24}
                      color="white"
                    />
                  </Pressable>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 15,
                      maxWidth: "90%",
                    }}
                  >
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 108,
                  width: "100%",
                  borderRadius: 20,
                  backgroundColor: "white",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginHorizontal: 20,
                    marginVertical: 20,
                  }}
                >
                  <Text style={{ color: "#22242E" }}>Payment Method</Text>
                  <Text
                    style={{ color: "#6B50F6" }}
                    onPress={() => navigation.navigate("Payment")}
                  >
                    Edit
                  </Text>
                </View>
                <View
                  style={{
                    marginHorizontal: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    source={LogoPay}
                    resizeMode="cover"
                  ></Image>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    2121 6352 8465 ****
                  </Text>
                </View>
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
                      <Text style={styles.number_total}>123 $ </Text>
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
                  <View style={styles.total}>
                    <Text style={styles.text_totals}>Total</Text>
                    <Text style={styles.number_totals}>123 $</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Confirm Order")}
                  >
                    <View style={styles.button}>
                      <Text style={styles.text_button}>Place My Order</Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Payment;
