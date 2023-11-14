import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleSignUp = () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
    } else if (!isChecked1) {
      Alert.alert('Error', 'Please accept the terms.');
    } else {
      Alert.alert('Success', 'Account created successfully.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/home/accout.png")}
        style={styles.image}
      />
      <Text style={styles.signup}>Sign Up For Free</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="user"
            size={24}
            color="#4285F4"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#8E9098"
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="envelope"
            size={24}
            color="#4285F4"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#8E9098"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="lock"
            size={24}
            color="#4285F4"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#8E9098"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.checkBoxContainer}>
          <View style={styles.checkBoxRow}>
            <TouchableOpacity
              onPress={() => setIsChecked1(!isChecked1)}
            >
              <View style={[styles.checkBox, isChecked1 && styles.checked]}>
                {isChecked1 && (
                  <Text style={styles.checkText}>&#10003;</Text>
                )}
              </View>
            </TouchableOpacity>
            <Text style={styles.checkBoxLabel}>Keep Me Signed In</Text>
          </View>
          <View style={styles.checkBoxRow}>
            <TouchableOpacity
              onPress={() => setIsChecked2(!isChecked2)}
            >
              <View style={[styles.checkBox, isChecked2 && styles.checked]}>
                {isChecked2 && (
                  <Text style={styles.checkText}>&#10003;</Text>
                )}
              </View>
            </TouchableOpacity>
            <Text style={styles.checkBoxLabel}>
              Email Me About Special Pricing
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={handleSignUp}
        >
          <Text style={styles.signupButtonText}>Create Account</Text>
        </TouchableOpacity>
        <View style={styles.signInTextContainer}>
          <Text style={styles.signInText}>Already have an account?</Text>
          <Text style={styles.signInLink}>Sign In</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 104, 
    height: 169, 
  },
  signup: {
    fontSize: 20,
    marginTop: 30,
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
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    width: 300,
    
    
  },
  icon: {
    marginRight: 10,
    width: 24,
    height: 24,
    color: '#94C2F8',
  },
  input: {
    flex: 1,
    height: 50,
    padding: 0,
    color: 'black',
  },
  checkBoxContainer: {
    marginVertical: 20, 
    marginTop: 4,
    
  },
  checkBoxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },
  checkBox: {
    width: 24,
    height: 24,
    borderColor: "#8E9098",
    borderWidth: 1,
    borderRadius: 12,
    marginRight: 10,
   
  },
  checked: {
    backgroundColor: "#4285F4",
    borderColor: "#4285F4",
  },
  checkText: {
    color: "#fff",
  },
  checkBoxLabel: {
    color: "#000",
  },
  signupButton: {
    backgroundColor: "#4285F4",
    borderRadius: 15,
    padding: 15,
    marginTop: -10,
    marginLeft: 75,
    width: 150,
  },
  signupButtonText: {
    color: "#fff",
    textAlign: "center",
    
  },
  signInTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  signInText: {
    color: "#8E9098",
    textDecorationLine: "underline",
  },
  signInLink: {
    color: "#4285F4",
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});
