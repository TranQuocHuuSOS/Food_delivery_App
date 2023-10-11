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
import React from "react";
import { useNavigation } from "@react-navigation/native";
const image = require("../../assets/Pattern.png");
const LogoPay = require("../../assets/paypa/Logosss.png");
const pa = require("../../assets/layer1.png");
const visa = require("../../assets/Group.png");
const EditPayment = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        color: "#FEFEFF",
      }}
    >
      <ScrollView>
        <ImageBackground
          source={image}
          style={{
            width: "100%",
            height: "100%",
            flex: 1,
            color: "#6B50F6",
          }}
          resizeMode="cover"
        >
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
                Payment
              </Text>
            </View>
            <View style={{ paddingTop: 30 }}>
              <View
                style={{
                  width: "100%",
                  borderRadius: 20,
                  backgroundColor: "white",
                }}
              >
                <View
                  style={{
                    marginHorizontal: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height:80
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
                  <Text>2121 6352 8465 ****</Text>
                </View>
              </View>
              <View
                style={{
                 
                  width: "100%",
                  borderRadius: 20,
                  backgroundColor: "#EDEAEA",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    marginHorizontal: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 80,
                  }}
                >
                  <Image
                    style={{
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    source={visa}
                    resizeMode="cover"
                  ></Image>
                  <Text>2121 6352 8465 ****</Text>
                </View>
              </View>
              <View
                style={{
                 
                  width: "100%",
                  borderRadius: 20,
                  backgroundColor: "#EDEAEA",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    marginHorizontal: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 80,
                  }}
                >
                  <Image
                    style={{
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    source={pa}
                    resizeMode="cover"
                  ></Image>
                  <Text>2121 6352 8465 ****</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default EditPayment;

const styles = StyleSheet.create({});
