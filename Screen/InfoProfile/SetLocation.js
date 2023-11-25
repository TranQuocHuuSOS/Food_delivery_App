import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Pressable,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
  import { FontAwesome5 } from "@expo/vector-icons";
  const image = require("../../assets/Pattern.png");
  
  const SetLocation = () => {
    const navigation = useNavigation();
    const handleNext = () => {
        navigation.navigate('Main');
      };
    return (
      <View style={{ flex: 1, color: "#FEFEFF" }}>
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
              <View style={{ marginTop: 20 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 30,
                    fontFamily: "sans-serif",
                    marginBottom: 10,  
                  }}
                >
                  Set Your Location
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "sans-serif",
                  }}
                >
                  This data will be displayed in your account {"\n"}profile for
                  security
                </Text>
              </View>
  
              <View style={{ paddingTop: 30 }}>
                <View
                  style={{
                    width: "100%",
                    borderRadius: 20,
                    backgroundColor: "white",
                  }}
                ></View>
                <View
                  style={{
                    width: "100%",
                    borderRadius: 20,
                    backgroundColor: "white",
                    marginTop: 20,
                  }}
                >
                  <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                    {/* Không có nội dung */}
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
                        marginBottom: 6,
                        marginTop: -20,
                      }}
                    >
                      <FontAwesome5 name="map-marker-alt" size={24} color="white" />
                    </Pressable>
                    <Text
style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        marginRight: 130,
                        marginTop: -10,
                      }}
                    >
                      Your Location
                    </Text>
                  </View>
                  <View style={{ marginHorizontal: 20, paddingBottom: 20 }}>
                    <TouchableOpacity
                      style={{
                        textAlign: "center",
                        borderWidth: 2,
                        borderColor: "#F6F6F6",
                        borderRadius: 15,
                        padding: 8,
                        backgroundColor: "#F6F6F6",
                        width: 280,
                        height: 60,
                      }}
                      onPress={() => navigation.navigate("Map")}
                    >
                      <Text style={{ color: "#000", textAlign: "center", lineHeight: 40 }}>
                        Set Location
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={{
              backgroundColor: "#4285F4",
              borderRadius: 15,
              padding: 15,
              width: 150,
              alignSelf: "center",
              marginBottom: 40,
            }}
            onPress={handleNext}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>Next</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };
  
  export default SetLocation;