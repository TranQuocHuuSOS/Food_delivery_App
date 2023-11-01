import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import styles from "./FilterStyles";
const Filter = () => {

  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/Pattern.png")}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              Find Your
              {"\n"}
              Favorite Food
            </Text>
            <Pressable style={styles.notificationButton}>
              <Ionicons
                name="notifications-outline"
                size={20}
                color="#6B50F6"
              />
            </Pressable>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 20,
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                backgroundColor: "#f1eeff",
                borderRadius: 10,
                paddingVertical: 10,
              }}
            >
              <AntDesign
                style={{ paddingLeft: 10 }}
                name="search1"
                size={20}
                color="#6B50F6"
              />
              <TextInput
                placeholder="What do you want to order?"
                placeholderTextColor="#6B50F6"
                width={280}
              />
            </Pressable>
          </View>
          <View style={styles.typeLocationFoodContainer}>
            <View style={{ marginTop: 16 }}>
              <Text style={styles.sectionTitle}>Type</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.categoryItem}>
                  <Text style={{ fontSize: 15, color: "#6B50F6" }}>Restaurant</Text>
                </View>
                <View style={styles.categoryItem}>
                  <Text style={{ fontSize: 15, color: "#6B50F6" }}>Food</Text>
                </View>
              </ScrollView>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.sectionTitle}>Location</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.categoryItem}>
                  <Text style={{ fontSize: 15, color: "#6B50F6" }}>1 Km</Text>
   
                </View>
                <View style={styles.categoryItem}>
                  <Text style={{ fontSize: 15, color: "#6B50F6" }}>10 Km</Text>    
                </View>
                <View style={styles.categoryItem}>
                  <Text style={{ fontSize: 15, color: "#6B50F6" }}>1 Km</Text>
                </View>
              </ScrollView>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.sectionTitle}>Food</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.categoryItem}>
                  <Text style={{ fontSize: 15, color: "#6B50F6" }}>
                    Restaurant
                  </Text>
                </View>
                <View style={styles.categoryItem}>
                  <Text style={{ fontSize: 15, color: "#6B50F6" }}>Food</Text>
                </View>
              </ScrollView>
            </View>
            <View style={{ paddingTop: 30 }}>
              <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};


export default Filter;
