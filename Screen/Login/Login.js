import React from 'react';
import { StyleSheet, StatusBar, ImageBackground, View, TextInput, Image, Text, TouchableOpacity, Linking } from 'react-native';

export default function Login() {
  const handleFacebookLogin = () => {
    Linking.openURL('https://www.facebook.com/login');
  };

  const handleGoogleLogin = () => {
    Linking.openURL('https://accounts.google.com/login');
  };

  const handleForgotPassword = () => {
  };

  const handleLogin = () => {
  };

  return (
    <ImageBackground
      source={require('../../assets/home/signup1.png')}
      style={styles.background}
    >
      <Text style={styles.login}>Login To Your Account</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#8E9098"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#8E9098"
          secureTextEntry
        />
        <Text style={styles.continue}>Or Continue With</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonFacebook} onPress={handleFacebookLogin}>
            <Image source={require('../../assets/home/facebook.png')} style={styles.icon} />
            <Text style={styles.buttonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGoogle} onPress={handleGoogleLogin}>
            <Image source={require('../../assets/home/google.png')} style={styles.icon} />
            <Text style={styles.buttonText}>Google</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Your Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  login: {
    marginTop: 240,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ffff',
    borderWidth: 1,
    marginBottom: 35,
    paddingLeft: 10,
    borderRadius: 15,
    marginTop: -20,
    backgroundColor: 'white'
  },
  continue: {
    marginTop: -20,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  buttonFacebook: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1877F2',
    borderRadius: 15,
    padding: 10,
    width: 140,
    height: 50,
    marginRight: 20,
    marginBottom: 10,
    marginLeft: 70,
  },
  buttonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    width: 140,
    height: 50,
    marginBottom: 10,
    marginRight: 50,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
  },
  forgotPassword: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#4285F4',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#1877F2',
    borderRadius: 15,
    padding: 15,
    marginTop: 30,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    width: 100,
  },
});
