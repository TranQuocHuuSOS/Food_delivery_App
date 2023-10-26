import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation, useRoute } from "@react-navigation/native";
const MenuDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const receivedData = route.params?.data || [];
  
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView>
        <ImageBackground
          source={require("../../assets/Pattern.png")}
          //   style={{
          //     width:'auto',
          //     height: 'auto',
          //   }}
          l
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 20,
                justifyContent: "space-between",
                paddingTop: 60,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 30,
                  fontFamily: "sans-serif",
                }}
              >
                Find Your
                {"\n"}
                Favorite Food
              </Text>
              <Pressable
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#ffffff",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 14,
                }}
              >
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color={"#6B50F6"}
                />
              </Pressable>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 20,
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                backgroundColor: "#f1eeff",
                borderRadius: 10,
                paddingVertical: 10,
              }}
            >
              <AntDesign
                style={{ paddingLeft: 10 }}
                name="search1"
                size={20}
                color="#6B50F6"
              />
              <TextInput
                placeholder="What do you want to order?"
                placeholderTextColor="#6B50F6"
                width={220}
              />
            </Pressable>
            <Pressable
              style={{
                paddingVertical: 13,
                backgroundColor: "#f1eeff",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
              onPress={() => navigation.navigate("Filter")}
            >
              <MaterialIcons
                name="mic-none"
                size={22}
                color="black"
                marginHorizontal={12}
              />
            </Pressable>
          </View>
          <View
            style={{
              paddingVertical: 20,
              justifyContent: "space-between",
              flexDirection: "row",
              marginHorizontal: 20,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 17 }}>
              Popular Menu
            </Text>
          </View>
          <FlatList
            data={receivedData}
            keyExtractor={(item) => item.id.toString()}
            style={{
              flexDirection: "column",
              marginHorizontal: 20,
            }}
            renderItem={({ item }) => (
              <Pressable
                style={{
                  flexDirection: "row",
                  backgroundColor: "#ffffff",
                  marginVertical: 10,
                  borderRadius: 14,
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 15,
                  paddingHorizontal: 15,
                }}
              >
                <Image
                  style={{ width: 70, height: 70, resizeMode: "contain" }}
                  source={{ uri: item.img }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 240,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "500",
                        fontWeight: "900",
                      }}
                    >
                      {item.name_food}
                    </Text>
                    <Text
                      style={{
                        marginTop: 3,
                        fontSize: 13,
                        fontWeight: "500",
                        lineHeight: 17,
                        color: "#BBBBBB",
                      }}
                    >
                      {item.restaurant_id}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "#6B50F6",
                      fontSize: 25,
                      fontWeight: "900",
                    }}
                  >
                    {item.price}$
                  </Text>
                </View>
              </Pressable>
            )}
          ></FlatList>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default MenuDetail;

const styles = StyleSheet.create({});
