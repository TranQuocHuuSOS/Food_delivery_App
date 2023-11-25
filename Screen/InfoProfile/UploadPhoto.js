import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
  } from "react-native";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
  
  const image = require("../../assets/Pattern.png");
  const DefaultImage = require("../../assets/Photo/PhotoProfile.png");
  const UploadIcon = require("../../assets/Photo/PhotoProfile.png");
  
  const UploadPhoto = () => {
    const navigation = useNavigation();
    const handleNext = () => {
        navigation.navigate('SetLocation');
      };
    return (
      <View style={{ flex: 1, color: "#FEFEFF" }}>
        <ImageBackground
          source={image}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          resizeMode="cover"
        >
          <ScrollView>
            <View style={{ marginHorizontal: 20, alignItems: "center" }}>
              <View style={uploadStyles.titleContainer}>
                <Text style={uploadStyles.title}>
                  Upload Your Photo Profile
                </Text>
                <Text style={uploadStyles.subtitle}>
                  This data will be displayed in your account {"\n"}profile for security
                </Text>
              </View>
              <View style={{ paddingTop: 30, width: "100%" }}>
                <View style={uploadStyles.imageContainer}>
                  <Image
                    style={uploadStyles.image}
                    source={DefaultImage}
                    resizeMode="cover"
                  />
                  <Text style={uploadStyles.imageText}>Take Photo</Text>
                </View>
                <View style={uploadStyles.imageContainer}>
                  <Image
                    style={uploadStyles.image}
                    source={UploadIcon}
                    resizeMode="cover"
                  />
                  <Text style={uploadStyles.imageText}>From Gallery</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={uploadStyles.nextButton}
              onPress={handleNext}
            >
              <Text style={uploadStyles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  };
  
  const uploadStyles = StyleSheet.create({
    titleContainer: {
      marginTop: 20,
      alignItems: "center",
    },
    title: {
      fontWeight: "bold",
      fontSize: 24,
      marginRight: 80,
      fontFamily: "sans-serif",
      color: "#000",
    },
    subtitle: {
      fontSize: 16,
      fontFamily: "sans-serif",
      color: "#000",
      marginBottom: -14,
    },
    imageContainer: {
      width: "100%",
      height: 130,
      borderRadius: 20,
      backgroundColor: "white",
      marginVertical: 20,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 5,
    },
    image: {
borderRadius: 10,
    },
    nextButton: {
      backgroundColor: "#4285F4",
      borderRadius: 15,
      padding: 15,
      marginTop: 100,
      width: 150,
      alignSelf: "center",
    },
    nextButtonText: {
      color: "#fff",
      textAlign: "center",
    },
    imageText: {
      marginTop: 20,
    },
  });
  
  export default UploadPhoto;