import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Onboarding_a() {
    const navigation = useNavigation();
    const handleNext = () => {
        navigation.navigate('Onboarding_b');
      };
  return (
    <ImageBackground 
      source={require("../../assets/Onboarding/Onboarding_1.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.foodContainer}>
          <Image
            source={require('../../assets/Onboarding/food.png')}
            style={styles.foodImage1}
          />
        </View>

        <View style={styles.foodContainer}>
          <Image
            source={require("../../assets/Onboarding/food2.png")}
            style={styles.foodImage2}
          />
        </View>

        <View style={styles.foodContainer}>
          <Image
            source={require("../../assets/Onboarding/food7.png")}
            style={styles.foodImage3}
          />
        </View>
        <Text style={styles.text}>Find your  Comfort {'\n'}Food here</Text>
        <Text style={styles.text1}>Here You Can find a chef or dish for every taste {'\n'} and color. Enjoy!</Text>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next </Text>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodContainer: {
    width: 40,  
    height: 40, 
    marginBottom: 30,
  },
  foodImage1: {
    width: 150,
    height: 150,
    marginLeft: -100,
    marginTop: 180,
  },
  foodImage2: {
    marginTop:-30,
    marginLeft: -100,
    width: 150,
    height: 150,
  },
  foodImage3: {
    marginTop: -40,
    marginLeft: 30,
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 200,
    marginBottom: 30,
    textAlign: 'center',
  },
  text1: {
    fontSize: 12,
    textAlign: 'center',
  },

  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    height: 50,
    width: 100,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
