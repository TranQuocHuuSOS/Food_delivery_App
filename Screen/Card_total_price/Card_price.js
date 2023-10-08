import { ImageBackground,StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
const image_total = require("../../assets/Order_detail/Pattern.png");
const Card_price = ({
    data,
    selectedItems,
    quantity,
    calculateTotalPrice,
  }) => {
  return (
    <View style={styles.container_total}>
          <ImageBackground
            source={image_total}
            resizeMode="cover"
            style={styles.imageTotal}
          >
            <View style={{ marginTop: 20, marginHorizontal: 20 }}>
              <View style={styles.sub_total}>
                <Text style={styles.text_total}>Sub_total</Text>
                <Text style={styles.number_total}> ${data
                    .filter((item) => !selectedItems.includes(item.key)) 
                    .reduce(
                      (acc, item) =>
                        acc +
                        (item.price - item.discount) * (quantity[item.key] || 1),
                      0
                    )
                    .toFixed(2)}</Text>
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
              <Text style={styles.number_totals}>${calculateTotalPrice()}</Text>
            </View>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.text_button}>Place My Order</Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
  )
}

export default Card_price

const styles = StyleSheet.create({
    container_total: {
        marginHorizontal: 25,
        paddingTop: "20%",
        bottom: 220
      },
      imageTotal: {
        backgroundColor: "#6B50F6",
        height: 190,
        borderRadius: 20,
      },
      sub_total: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      },
      delivery: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      },
      discount: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      },
      total: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        color: "white",
        marginTop: 10,
      },
      text_total: {
        color: "white",
      },
      number_total: {
        color: "white",
      },
      text_totals: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
      },
      number_totals: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
      },
      button: {
        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor: "white", 
        padding:15,
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
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center"
      },
})