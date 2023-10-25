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
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const images = require("../../assets/Maps.png");
const Map = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={images}
      resizeMode="cover"
      style={styles.imagebackground}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.search}>
            <Feather name="search" size={24} color="#6B50F6" />
            <TextInput
              style={styles.textsearch}
              placeholder={"Find Your Location"}
              placeholderTextColor="#9A89F2"
            />
          </View>
          {/* <View style={{ marginHorizontal: 130, backgroundColor: "white", marginTop:200 , paddingVertical: 30}}>
            <FontAwesome5 name="map-marker-alt" size={24} color="#6B50F6" />
          </View> */}
          <View
            style={{
              borderRadius: 20,
              backgroundColor: "white",
              marginHorizontal: 20,
              marginTop: 420,
            }}
          >
            <View
              style={{
                marginHorizontal: 20,
                marginVertical: 20,
              }}
            >
              <Text style={{ color: "#22242E" }}>Your Location</Text>
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
                <FontAwesome5 name="map-marker-alt" size={24} color="white" />
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
            <TouchableOpacity onPress={() => navigation.navigate("Shipping")}>
              <View style={styles.button}>
                <Text style={styles.text_button}>Set Location</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Map;
