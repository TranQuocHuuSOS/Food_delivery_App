import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function SignUp() {
  const handleSignUp = () => {
    // Thêm xử lý khi người dùng nhấp vào nút "Sign Up"
    // Ví dụ: thực hiện hành động đăng ký tài khoản
  };

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <ImageBackground
      source={require("../../assets/home/signup1.png")}
      style={styles.background}
    >
      <Text style={styles.signup}>Sign Up For Free  </Text>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={24} color="#4285F4" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#8E9098"
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="envelope" size={24} color="#4285F4" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#8E9098"
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="#4285F4" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#8E9098"
            secureTextEntry
          />
        </View>
        <View style={styles.checkBoxContainer}>
          <View style={styles.checkBoxRow}>
            <TouchableOpacity onPress={() => setIsChecked1(!isChecked1)}>
              <View style={[styles.checkBox, isChecked1 && styles.checked]}>
                {isChecked1 && <Text style={styles.checkText}>&#10003;</Text>}
              </View>
            </TouchableOpacity>
            <Text style={styles.checkBoxLabel}>Keep Me Signed In</Text>
          </View>
          <View style={styles.checkBoxRow}>
            <TouchableOpacity onPress={() => setIsChecked2(!isChecked2)}>
              <View style={[styles.checkBox, isChecked2 && styles.checked]}>
                {isChecked2 && <Text style={styles.checkText}>&#10003;</Text>}
              </View>
            </TouchableOpacity>
            <Text style={styles.checkBoxLabel}>
              Email Me About Special Pricing
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.signupButtonText}>Create Account</Text>
        </TouchableOpacity>
        <View style={styles.signInTextContainer}>
          <Text style={styles.signInText}>Already have an account?</Text>
          <Text style={styles.signInLink}>Sign In</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  signup: {
    marginTop: 240,
    textAlign: "center",
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    borderColor: "#ffff",
    borderWidth: 1,
    marginBottom: 30,
    paddingLeft: 10,
    borderRadius: 15,
    marginTop: -20,
    backgroundColor: 'white'
  },
  icon: {
    marginRight: 10,
    width: 24, 
    height: 24,
    color: '#94C2F8'
    
  },
  input: {
    flex: 1,
    height: 50,
    padding: 0,
    color: 'black'
  },
  checkBoxContainer: {
    marginTop: -20,
    marginRight: 57,
  },
  checkBoxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginTop: 2,
  },
  checkBox: {
    width: 24,
    height: 24,
    borderColor: "#8E9098",
    borderWidth: 1,
    borderRadius: 12,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 10,
  },
  signupButtonText: {
    color: "#fff",
    textAlign: "center",
    width: 150,
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
