import React from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const image = require("../../assets/Pattern.png");
const AccountImage = require("../../assets/Photo/PhotoProfile.png");
const CloseIcon = require("../../assets/Photo/PhotoProfile.png"); 

const ImgProfile = () => {
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate('UploadPhoto');
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#FEFEFF", justifyContent: "center", alignItems: "center" }}>
      <ImageBackground
        source={image}
        style={{
          flex: 1,
        }}
        resizeMode="cover"
      >
        <ScrollView>
          <View style={{ marginHorizontal: 20, alignItems: "center" }}>
            <View style={{ marginTop: 20, alignItems: "center" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 24,
                  marginRight: 80,
                  fontFamily: "sans-serif",
                  color: "#000",
                }}
              >
                Upload Your Photo Profile
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "sans-serif",
                  color: "#000",
                  marginBottom: -14,
                }}
              >
                This data will be displayed in your account {"\n"}profile for security
              </Text>
            </View>
            <View style={{ paddingTop: 30, width: "100%" }}>
              <View
                style={{
                  position: "relative",
                  borderRadius: 20,
                  marginVertical: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 90,
                  marginTop: 50,
                }}
              >
                <Image
                  style={{ width: 200, height: 200, borderRadius: 10 }}
                  source={AccountImage}
                  resizeMode="cover"
                />
                {/* Thêm thành phần View chứa dấu "X" */}
                <View style={styles.closeIconContainer}>
                  <Image
                    style={styles.closeIcon}
                    source={CloseIcon}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#4285F4",
              borderRadius: 15,
              padding: 15,
              marginTop: 100,
              width: 150,
              alignSelf: "center",
            }}
            onPress={handleNext}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
</View>
  );
};

const styles = StyleSheet.create({
  closeIconContainer: {
    position: "absolute",
    top: 9,
    left: 220,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5F5252", 
    borderRadius: 12,
  },
  closeIcon: {
    width: 30,
    height: 30,
  },
});

export default ImgProfile;