import React from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Onboarding() {
  const navigation = useNavigation();
  const handleNext = () => {
      navigation.navigate('Onboarding_a');
    };
  return (
    <ImageBackground 
    source={require("../../assets/Onboarding/Onboarding.png")}
    style= {styles.background}
    >
    <View style={styles.container}>
      <Image
        source={require("../../assets/Onboarding/Group.png")}
        style={styles.image}
      />
      <View>
        <Text style={styles.didfood}>DIDFOOD</Text>
        <Text>Deliever Favorite Food</Text>
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 100,
    width: 150, 
    height: 250, 
  },
  didfood: {
    fontSize: 30,
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
