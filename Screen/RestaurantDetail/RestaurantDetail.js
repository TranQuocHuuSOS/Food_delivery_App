import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Image,
  FlatList
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation , useRoute} from "@react-navigation/native";
const RestaurantDetail = () => {
  const navigation = useNavigation();
  const route= useRoute();
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
          style={{
            width: "100%",
            height: "100%",
          }}
          resizeMode="cover"
        >
          <View >
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
                Popular Restaurant
              </Text>
            </View>
            <FlatList data={receivedData} keyExtractor={(item) => item.id.toString()}
              style={{

              flex:1
              }}
              numColumns={2}
              renderItem={({ item }) => (
                <View style={{flex:1}}>

                <Pressable
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
                    style={{ width: 100, height: 100, resizeMode: "contain", borderRadius:10 }}
                    source={{uri:item.image}}
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
                </Pressable>
                </View>
              )}
              >
            </FlatList>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default RestaurantDetail;
