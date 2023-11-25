import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";
import { useNavigation } from "@react-navigation/native";

// Import your background image
const backgroundImage = require("../../assets/Pattern.png");

export default function InfoProfile() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(null);
  const { isLoading, updateProfile } = useContext(AuthContext);
  const navigation = useNavigation(); // Use useNavigation hook to get navigation

  const handleNext = async () => {
    try {
      // Call the register function and wait for its completion
      if (!firstName || !lastName || !mobileNumber) {
        console.log("Please fill in all fields.");
        return;
      }
  
      // Create a new info item using the user's input
      const newInfoItem = {
        firstName,
        lastName,
        mobileNumber,
      };
  
      // Call the updateProfile function and wait for its completion
      await updateProfile(newInfoItem);
  
      // If you want to navigate to another screen after updating the profile, do it here
      navigation.navigate("ImgProfile");
    } catch (error) {
      console.log("Error during registration:", error);
      // Handle registration error if needed
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Spinner visible={isLoading} />
        <Text style={styles.header}>
          Fill in your bio to get {"\n"} started
        </Text>
        <Text style={styles.subheader}>
          This data will be displayed in your account {"\n"}profile for security{" "}
        </Text>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              value={firstName}
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="#8E9098"
              onChangeText={(text) => setFirstName(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={lastName}
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="#8E9098"
              onChangeText={(text) => setLastName(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={mobileNumber}
              style={styles.input}
              placeholder="Mobile Number"
              placeholderTextColor="#8E9098"
              onChangeText={(text) => setMobileNumber(text)}
            />
          </View>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 80,
    marginBottom: 20,
    marginTop: -10,
    color: "#000",
  },
  subheader: {
    fontSize: 16,
    color: "#8E9098",
    marginRight: 10,
    color: "#000", // Set text color to white or appropriate color
  },
  formContainer: {
    width: "80%",
    padding: 20,
    marginRight: 50,
    borderRadius: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ffff",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Set background color with opacity
    width: 300,
  },
  input: {
    flex: 1,
    height: 50,
    padding: 0,
    color: "black",
  },
  nextButton: {
    backgroundColor: "#4285F4",
    borderRadius: 15,
    padding: 15,
    marginTop: 170,
    marginLeft: 75,
    width: 150,
  },
  nextButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});