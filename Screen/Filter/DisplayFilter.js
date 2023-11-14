import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import styles from "./FilterStyles";
import { useNavigation } from "@react-navigation/native";
const DisplayFilter = ({ route }) => {
  const navigation = useNavigation();
  const { Type, Data } = route.params || {};
  
  return (
    <SafeAreaView style={styles.container}>
      
        <ImageBackground
          source={require("../../assets/Pattern.png")}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <View>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                Find Your
                {"\n"}
                Favorite Food
              </Text>
              <Pressable style={styles.notificationButton}>
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color="#6B50F6"
                />
              </Pressable>
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
                  width={200}
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
                <FontAwesome
                  name="filter"
                  size={22}
                  color="#6B50F6"
                  marginHorizontal={12}
                />
              </Pressable>
            </View>
          </View>
          {Type === "Restaurant" ? (
            <FlatList
              data={Data}
              keyExtractor={(item) => item.id.toString()}
              style={{
                flex: 1,
              }}
              numColumns={2}
              renderItem={({ item }) => (
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => navigateToRestaurantDetail(item.id)}
                  >
                    <View
                      key={item.id.toString()}
                      style={{
                        margin: 2,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#ffffff",
                        marginLeft: 20,
                        height: 180,
                        width: 150,
                        borderRadius: 20,
                        textAlign: "center",
                        marginTop: 20,
                      }}
                    >
                      <Image
                        style={{
                          width: 100,
                          height: 100,
                          resizeMode: "contain",
                          borderRadius: 10,
                        }}
                        source={{ uri: item.image }}
                      />
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 15,
                          fontWeight: "500",
                          marginTop: 10,
                          fontWeight: "900",
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 13,
                          fontWeight: "500",
                          marginTop: 7,
                          lineHeight: 17,
                          color: "#BBBBBB",
                        }}
                      >
                        {item.time}Mins
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            ></FlatList>
          ) : (
            <View>
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
                showsVerticalScrollIndicator={false}
                data={Data}
                keyExtractor={(item) => item.id}
                style={{
                  flexDirection: "column",
                  marginHorizontal: 20,
                }}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => navigateToDishDetail(item.id)}
                  >
                    <View
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
                            {item.restaurantName}
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
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </ImageBackground>
      
    </SafeAreaView>
  );
};

export default DisplayFilter;
