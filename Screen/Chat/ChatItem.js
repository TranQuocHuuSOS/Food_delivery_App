import React from 'react';
import { View, Text } from 'react-native';

function ChatItem({ message }) {
  return (
    <View style={{ marginVertical: 5 }}>
      <View
        style={{
          backgroundColor: message.isMyMessage ? '#007AFF' : '#E5E5EA',
          padding: 10,
          borderRadius: 8,
          alignSelf: message.isMyMessage ? 'flex-end' : 'flex-start',
          
        }}
      >
        <Text style={{ color: message.isMyMessage ? 'white' : 'black'}}>
          {message.text}
        </Text>
      </View>
    </View>
  );
}

export default ChatItem;
