import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import styles from "./styles";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';


// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import BottomSheet from "reanimated-bottom-sheet";
// import Animated from "react-native-reanimated";
const image_profile = require("../../assets/images_profile/Photo_Profile.png");
const Profile = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

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
      <BottomSheetModalProvider>
      <View style={styles.container}>
        <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
    </View>
  );
};

export default Profile;
