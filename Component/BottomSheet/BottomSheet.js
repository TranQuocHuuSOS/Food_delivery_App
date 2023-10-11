// import { Dimensions, StyleSheet, View } from "react-native";
// import React, { useCallback, useImperativeHandle } from "react";
// import { PanGestureHandler } from "react-native-gesture-handler";
// import Animated, {
//   Extrapolate,
//   interpolate,
//   useAnimatedGestureHandler,
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
// } from "react-native-reanimated";

// const { height: SCREEN_HEIGHT } = Dimensions.get("window");
// const HALF_SCREEN_HEIGHT = SCREEN_HEIGHT / 3;

// const BottomSheet = React.forwardRef(({ children }, ref) => {
//   const translateY = useSharedValue(SCREEN_HEIGHT / 3);
//   const active = useSharedValue(false);
//   const scrollTo = useCallback((destination) => {
//     "worklet";
//     active.value = destination !== HALF_SCREEN_HEIGHT;

//     translateY.value = withSpring(destination, { damping: 50 });
//   }, []);

//   const isActive = useCallback(() => {
//     return active.value;
//   }, []);

//   useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
//     scrollTo,
//     isActive,
//   ]);
//   const onGestureEvent = useAnimatedGestureHandler({
//     onStart: (_, context) => {
//       context.y = translateY.value;
//     },
//     onActive: (event, context) => {
//       translateY.value = context.y + event.translationY;
//       translateY.value = Math.min(translateY.value, HALF_SCREEN_HEIGHT);
//       translateY.value = Math.max(translateY.value, 0);
//     },
//     onEnd: () => {
//       if (translateY.value > HALF_SCREEN_HEIGHT / 2) {
//         scrollTo(HALF_SCREEN_HEIGHT);
//       } else {
//         scrollTo(0);
//       }
//     },
//   });

//   const rBottomSheetStyle = useAnimatedStyle(() => {
//     const borderRadius = interpolate(
//       translateY.value,
//       [0, HALF_SCREEN_HEIGHT],
//       [25, 5],
//       Extrapolate.CLAMP
//     );

//     return {
//       borderRadius,
//       transform: [{ translateY: translateY.value }],
//     };
//   });

//   return (
//     <PanGestureHandler onGestureEvent={onGestureEvent}>
//       <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
//         <View style={styles.line} />
//         {children}
//       </Animated.View>
//     </PanGestureHandler>
//   );
// });

// const styles = StyleSheet.create({
//   bottomSheetContainer: {
//     height: SCREEN_HEIGHT,
//     width: "100%",
//     backgroundColor: "white",
//     position: "absolute",
//     top: 0,
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//   },
//   line: {
//     width: 75,
//     height: 4,
//     backgroundColor: "grey",
//     alignSelf: "center",
//     marginVertical: 15,
//     borderRadius: 2,
//   },
// });

// export default BottomSheet;
