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
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const image_total = require("../../assets/Order_detail/Pattern.png");
const images = require("../../assets/Maps.png");
const profile = require("../../assets/Profile.png");
const Track = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={images}
      resizeMode="cover"
      style={styles.imagebackground}
    >
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: "#C6C8C9",
              marginHorizontal: 20,
              marginTop: 420,
            }}
          >
            <ImageBackground
              source={image_total}
              resizeMode="cover"
              style={{ flex: 1, color: "#C1B5FF" }}
            >
              <View
                style={{
                  marginHorizontal: 20,
                  marginVertical: 20,
                }}
              >
                <Text style={{ color: "#22242E", fontWeight: "bold" }}>
                  Track Orders
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 20,
                  padding: 10,
                  flexDirection: "row",
                  backgroundColor: "white",
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    borderRadius: 100,
                    backgroundColor: "#604AD3",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={profile}
                    style={{ width: 64, height: 64 }}
                  ></Image>
                </View>
                <View style={{ marginHorizontal: 30 }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 15,
                      maxWidth: "90%",
                      color: "#C6C8C9",
                    }}
                  >
                    Mr Kemplas
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Entypo name="clock" size={15} color="#C6C8C9" />
                    <Text style={{ color: "#C6C8C9" }}>
                      25 minutes on the way
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: 20,
                  marginVertical: 15,
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate()}>
                  <View style={styles.buttons}>
                   
                      <Ionicons name="call" size={24} color="#C1B5FF" />
                
                    <Text style={{color:"#C1B5FF"}}> Call</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate()}>
                  <View style={styles.buttonss}>
                    <Entypo name="message" size={24} color="#FFFFFF" />
                  </View>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default Track;
