
import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { locations, colors, types, foods } from "./Constant";

const Header = ({ headerText, headerIcon }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={{ flex: 1, fontSize: 24, fontWeight: "700" }}>{headerText}</Text>
      <FontAwesome name={headerIcon} size={24} color="#6B50F6" />
    </View>
  );
};

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View
      style={{
        backgroundColor: "#E9E6F8",
        flexDirection: "row",
        paddingVertical: 10,
        borderRadius: 20,
        paddingHorizontal: 16,
        marginVertical: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
      }}
    >
      <FontAwesome name={icon} size={20} color="#6B50F6" />
      <TextInput
        style={{ paddingLeft: 8, fontSize: 16, color: "#9A89F2" }}
        placeholder={placeholder}
        placeholderTextColor="#9A89F2"
      />
    </View>
  );
};

const Type = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((type, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                marginRight: 36,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 10,
                shadowColor: "#6B50F6",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                marginVertical: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#6B50F6",
                }}
              >
                {type.type}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const Location = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {locations.map((location, index) => {
        return (
          <View key={index} style={styles.locationItem}>
            <View
              style={{
                backgroundColor: index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#6B50F6",
                }}
              >
                {location.location}
              </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const Food = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {foods.map((food, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                marginRight: 36,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#6B50F6",
                }}
              >
                {food.food}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const Filter = () => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = () => {
    console.log("Submit search for:", searchText);
  };

  return (
    <ImageBackground
      source={require('../.././assets/searchimage/home.png')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={{ flex: 1, marginHorizontal: 16, fontSize: 20 }}>
        <Header headerText={"Find Your\nFavorite Food "} headerIcon={"bell-o"} />
        <SearchFilter icon="search" placeholder={"What do you want to order?" } />
        <View style={{ marginTop: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Type</Text>
          <Type />
        </View>
        <View style={{ marginTop: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Location</Text>
          <Location />
        </View>
        <View style={{ marginTop: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Food</Text>
          <Food />
        </View>
        <View style={styles.submitContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  submitContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  submitButton: {
    backgroundColor: "#6B50F6",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 130,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  locationItem: {
    marginRight: 36,
  },
});

export default Filter;
