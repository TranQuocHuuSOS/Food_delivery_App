import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import styles from "./styles";
import { AppRegistry } from 'react-native';
import { useSharedValue, withSpring, valueUnpacker } from 'react-native-reanimated';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetTextInput } from "@gorhom/bottom-sheet";
// import Animated from "react-native-reanimated";
import {name as appName} from "../../app.json";

AppRegistry.registerComponent(appName, () => App);

const image_profile = require("../../assets/images_profile/Photo_Profile.png");
const Profile = () => {
  const snapPoints = useMemo(() => ["25%"], []);
  const animateValue = (value) => {
    'worklet';
    return withSpring(value);
  };
  
  const mySharedValue = useSharedValue(0);
  
  // Sử dụng `valueUnpacker` trong một Worklet Function
  const animatedValue = valueUnpacker(() => animateValue(mySharedValue.value));
  
  // Sử dụng animatedValue trong UI hoặc trong các animation khác
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image_profile}
        resizeMode="cover"
        style={styles.image}
      >
        <GestureHandlerRootView>
        <BottomSheet snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <BottomSheetTextInput value="Awesome 🎉" style={styles.textInput} />
        </View>
      </BottomSheet>
        </GestureHandlerRootView>
      </ImageBackground>
  
      
   
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
