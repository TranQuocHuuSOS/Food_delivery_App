import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

function MessengerItem({ user, onPress }) {
  let {
    name,
    url,
    messenger,
    numberOfUnreadMessages,
  } = user;

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 10,
          height: 80,
        }}
      >
        <View>
        
          <Image
            style={{
              width: 65,
              height: 65,
              resizeMode: 'cover',
              borderRadius: 10,
              marginRight: 10,
              marginBottom: 50,
            }}
            source={{
              uri: url,
            }}
          />
          {numberOfUnreadMessages > 0 && (
            <Text style={{
              backgroundColor: 'red',
              position: 'absolute',
              right: 5,
              fontSize: 12,
              borderRadius: 10,
              padding: 1,
              paddingHorizontal: numberOfUnreadMessages > 9 ? 2 : 4,
              color: 'white',
            }}>
              {numberOfUnreadMessages}
            </Text>
          )}
        </View>
        <View style={{
          marginLeft: 10,
          flexDirection: 'column',
        }}>
          <Text style={{
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
            {name}
          </Text>
          <Text style={{
            color: 'rgba(255, 0, 0, 0.5)',
            fontSize: 18,
            marginBottom: 50
          }}>
            {messenger}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default MessengerItem;
