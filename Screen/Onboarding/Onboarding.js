import React from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Onboarding() {
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
  }
});
