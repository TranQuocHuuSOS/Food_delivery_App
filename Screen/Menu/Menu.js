import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

const popularMenuData = [
  {
    id: '1',
    name: 'Pizza',
    price: '$5',
    image: require('../.././assets/searchimage/pizza.jpg'),
  },
  {
    id: '2',
    name: 'Carbonara',
    price: '$6',
    image: require('../.././assets/searchimage/pizza.jpg'),
  },
  {
    id: '3',
    name: 'Salad',
    price: '$99',
    image: require('../.././assets/searchimage/pizza.jpg'),
  },
];

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
const PopularMenu = () => {
  const renderItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Image
        source={item.image}
        style={styles.menuItemImage}
        resizeMode="cover"
      />
      <View style={styles.menuItemInfo}>
        <Text style={styles.menuItemName}>{item.name}</Text>
        <View style={styles.menuItemPriceContainer}>
          <Text style={styles.menuItemPrice}>{item.price}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Popular Menu</Text>
      <FlatList
        data={popularMenuData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.menuList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuList: {
    flexDirection: 'column',
  },
  menuItem: {
    marginBottom: 16,
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  menuItemInfo: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItemPriceContainer: {
    alignItems: 'flex-end',
  },
  menuItemPrice: {
    fontSize: 18,
    color: '#6B50F6',
  },
});

export default PopularMenu;


