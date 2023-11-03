
import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import MessengerItem from './MessengerItem';

import { useNavigation } from "@react-navigation/native";
function Message() {
    
  const navigation = useNavigation();
  const [users, setUsers] = useState([
    {
      url: 'https://randomuser.me/api/portraits/men/70.jpg',
      messenger: 'Hello',
      name: 'Út',
      numberOfUnreadMessages: 3,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/45.jpg',
      messenger: 'Hello',
      name: 'Ngân hàng',
      numberOfUnreadMessages: 4,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/50.jpg',
      messenger: 'Hello',
      name: 'Anh Hai',
      numberOfUnreadMessages: 2,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/60.jpg',
      messenger: 'Hello',
      name: 'Tài xoăn',
      numberOfUnreadMessages: 22,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/85.jpg',
      messenger: 'Hello',
      name: 'Baby Kiều',
      numberOfUnreadMessages: 0,
    },
  ]);

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginStart: 8,
        }}
      >
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            padding: 70,
            fontWeight: 'bold',
            marginLeft: -40,
            paddingBottom: 30,

          }}
        >
          Chat
        </Text>
      </View>
      <FlatList
        style={{}}
        data={users}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={() => {
            navigation.navigate('Chat', { user: item });
          }}
       >
          <MessengerItem user={item} onPress={() => {
            navigation.navigate('Chat', { user: item });
          }} key={item.url} />
       </TouchableOpacity>
        )}
        keyExtractor={(item) => item.url}
      />
    </View>
  );
}

export default Message;
