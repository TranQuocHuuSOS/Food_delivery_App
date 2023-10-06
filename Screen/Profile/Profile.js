import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./styles";
import { HEIGHT, OVERDRAG } from "../../misc/consts";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AccentPicker from "../../Component/AccentPicker";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import BottomSheet from "reanimated-bottom-sheet";
// import Animated from "react-native-reanimated";
const image_profile = require("../../assets/images_profile/Photo_Profile.png");
const Profile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image_profile}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    
        {/* <View style={styles.info}>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          <Text style={{ color: "white" }}>hahah</Text>
          
        </View> */}
     
    </View>
  );
};

export default Profile;
