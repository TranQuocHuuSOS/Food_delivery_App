// import {
//     ImageBackground,
//     ScrollView,
//     StyleSheet,
//     Text,
//     View,
//     Pressable,
//     TextInput,
//   } from "react-native";
//   import React from "react";
//   import { SafeAreaView } from "react-native-safe-area-context";
//   import { Ionicons } from "@expo/vector-icons";
//   import { AntDesign } from "@expo/vector-icons";
//   import { MaterialIcons } from "@expo/vector-icons";

// const Header = () => {
//   return (
//     <SafeAreaView
//     style={{
//       flex: 1,
//       backgroundColor: "#ffffff",
//     }}
//   >
//     <ImageBackground
//       source={require("../../assets/Pattern.png")}
//       style={{
//         width: "100%",
//         height: 170,
//       }}
//     >
//       <View
//         style={{
//           flexDirection: "row",
//           marginHorizontal: 20,
//           justifyContent: "space-between",
//           paddingTop: 60,
//           alignItems: "center",
//         }}
//       >
//         <Text
//           style={{
//             fontWeight: "bold",
//             fontSize: 30,
//             fontFamily: "sans-serif",
//           }}
//         >
//           Find Your
//           {"\n"}
//           Favorite Food
//         </Text>

//         <Pressable
//           style={{
//             width: 50,
//             height: 50,
//             backgroundColor: "#ffffff",
//             alignItems: "center",
//             justifyContent: "center",
//             borderRadius: 14,
//           }}
//         >
//           <Ionicons
//             name="notifications-outline"
//             size={20}
//             color={"#6B50F6"}
//           />
//         </Pressable>
//       </View>
//       <View
//         style={{
//           marginHorizontal: 20,
//           justifyContent: "space-between",
//           flexDirection: "row",
//           alignItems: "center",
//           paddingTop: 20,
//         }}
//       >
//         <Pressable
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             gap: 10,
//             backgroundColor: "#f1eeff",
//             borderRadius: 10,
//             paddingVertical: 10,
//           }}
//         >
//           <AntDesign
//             style={{ paddingLeft: 10 }}
//             name="search1"
//             size={20}
//             color="#6B50F6"
//           />
//           <TextInput
//             placeholder="What do you want to order?"
//             placeholderTextColor="#6B50F6"
//             width={220}
//           />
//         </Pressable>
//         <Pressable
//           style={{
//             paddingVertical: 13,
//             backgroundColor: "#f1eeff",
//             alignItems: "center",
//             justifyContent: "center",
//             borderRadius: 10,
//           }}
//         >
//           <MaterialIcons name="mic-none" size={22} color="black" marginHorizontal={12}/>
//         </Pressable>
//       </View>
//     </ImageBackground>
//   </SafeAreaView>
//   )
// }


// export default Header

