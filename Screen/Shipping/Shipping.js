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
import { FontAwesome5 } from "@expo/vector-icons";
const image = require("../../assets/Pattern.png");
const LogoPay = require("../../assets/paypa/Logosss.png");
const pa = require("../../assets/layer1.png");
const visa = require("../../assets/Group.png");
const Shipping = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        color: "#FEFEFF",
      }}
    >
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
                Shipping
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
                    marginVertical: 20,
                  }}
                >
                  <Text style={{ color: "#22242E" }}>Order Location</Text>
                </View>
                <View
                  style={{
                    marginHorizontal: 20,
                    paddingBottom: 20,
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
                    8502 Preston Rd. Inglewood, Maine 98380
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  borderRadius: 20,
                  backgroundColor: "white",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    marginHorizontal: 20,
                    marginVertical: 20,
                  }}
                >
                  <Text style={{ color: "#22242E" }}>Deliver To</Text>
                </View>
                <View
                  style={{
                    marginHorizontal: 20,
                    paddingBottom: 20,
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
                <View
                  style={{
                    marginHorizontal: 20,
                    paddingBottom: 20,
                  }}
                >
                  <Text
                    style={{ marginLeft: 70, color: "#6B50F6" }}
                    onPress={() => navigation.navigate("")}
                  >
                    Set Location
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Shipping;
