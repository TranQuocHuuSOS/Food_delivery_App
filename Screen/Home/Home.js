import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import React ,{useEffect, useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
  const getAPIData= async()=>{
    const url=`https://646aaa197d3c1cae4ce2b26c.mockapi.io/dishs`;
    let result = await fetch(url);
    if (!result.ok){
      throw new Error (`HTTP Error! Status:${result.status}`);
    }
    result=await result.json();
    setData(result);
    
  };
  useEffect(()=>{
    const fetchData = async () => {
      try {
        await getAPIData();
        await getRestaurantData();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  },[]);
  const getRestaurantData = async () => {
    const restaurantUrl = 'https://646aaa197d3c1cae4ce2b26c.mockapi.io/restaurants';
    try {
      const response = await fetch(restaurantUrl);
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      const restaurantData = await response.json();
      setRestaurantData(restaurantData);
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
    }
  };

  const updatedData = data.map((item) => {
    const restaurant = restaurantData.find((r) => r.id === item.restaurant_id);
    if (restaurant) {
      return {
        ...item,
        restaurant_id: restaurant.name,
      };
    }
    return item;
  });
 
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginBottom:70,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require("../../assets/Pattern.png")}
        style={{
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
      >
        
          <View style={{}}>
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
            <View style={{ paddingTop: 20 }}>
              <ImageBackground
                source={require("../../assets/Image.png")}
                style={{
                  backgroundColor: "#6B50F6",
                  marginHorizontal: 20,
                  height: 150,
                  borderRadius: 20,
                }}
              >
                <View
                  style={{
                    alignItems: "flex-end",
                    marginRight: 25,
                    marginTop: 25,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#ffff",
                      paddingBottom: 20,
                    }}
                  >
                    Specital Deal For {"\n"}October
                  </Text>
                  <Pressable
                    style={{
                      paddingVertical: 12,
                      backgroundColor: "#ffff",
                      width: 100,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 12,
                      marginRight: 33,
                    }}
                  >
                    <Text style={{ fontWeight: "700", color: "#6B50F6" }}>
                      Buy Now
                    </Text>
                  </Pressable>
                </View>
              </ImageBackground>
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
                Nearest Restaurant
              </Text>

              <Pressable onPress={() => navigation.navigate("RestaurantDetail",{data: restaurantData})}>
                <Text style={{ fontSize: 12, color: "#6B50F6" }}>
                  View More
                </Text>
              </Pressable>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {restaurantData.slice(0, 3).map((items) => (
                <Pressable
                  key={items.id}
                  style={{
                    margin: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                    marginLeft: 20,
                    height: 180,
                    width: 150,
                    borderRadius: 20,
                  }}
                >
                  <Image
                    style={{ width: 100, height: 100, resizeMode: "contain", borderRadius:10 }}
                    source={{uri:items.image}}
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
                    {items.name}
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
                    {items.time}Mins
                    
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
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
              <Pressable onPress={() => navigation.navigate("MenuDetail", { data: updatedData })}>
                <Text style={{ fontSize: 12, color: "#6B50F6" }}>
                  View More
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginHorizontal: 20,
              }}
            >
               {updatedData.slice(1, 4).map((item)=>
                <Pressable
                  key={item.id}
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
                    style={{ width: 60, height: 60, resizeMode: "contain", borderRadius:10 }}
                    source={{uri:item.img}}
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
                      {item.price}
                      $
                    </Text>
                  </View>
                </Pressable>
              ) }
            </View>
          </View>
      </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
