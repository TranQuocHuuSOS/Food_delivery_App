
import React, { useState } from 'react';
import { Text, View, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from 'react-native';

function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Xin chào!',
      isMyMessage: false,
    },
    {
      id: 2,
      text: 'Bạn khỏe không!',
      isMyMessage: false,
    },
  ]);

  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    if (inputMessage.trim() === '') {
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isMyMessage: true,
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    >
      <View style={{ flex: 1, flexDirection: 'column' }}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, padding: 10, backgroundColor: 'white', borderRadius: 8, marginRight: 20, marginStart: 20}}>
          <Image
            style={{ width: 65, height: 65, borderRadius: 5, marginRight: 20 }}
            source={{ uri: 'https://randomuser.me/api/portraits/men/85.jpg' }} 
          />
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>ÚT</Text>
            <Text style={{ color: 'green' }}>Online</Text>
          </View>
          <TouchableOpacity
            style={{ marginLeft: 'auto', padding: 5 }}
            onPress={() => {
              alert('Make a call');
            }}
          >
            <Text style={{ fontSize: 20, marginLeft: 10 }}>📞</Text>
          </TouchableOpacity>
        </View>

        {/* Message List */}
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <View
              style={{
                alignItems: item.isMyMessage ? 'flex-end' : 'flex-start',
                margin: 10,
                marginStart: 20,
              }}
            >
              <View
                style={{
                  backgroundColor: item.isMyMessage ? '#007AFF' : '#E5E5EA',
                  padding: 10,
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: item.isMyMessage ? 'white' : 'black' }}>
                  {item.text}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingVertical: 10 }}
        />

        {/* Message Input */}
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <TextInput
            style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 20, paddingHorizontal: 10 }}
            placeholder="Nhập tin nhắn..."
            value={inputMessage}
            onChangeText={(text) => setInputMessage(text)}
          />
          <TouchableOpacity
            style={{ marginLeft: 10, padding: 10, backgroundColor: 'blue', borderRadius: 20 }}
            onPress={sendMessage}
          >
            <Text style={{ color: 'white' }}>Gửi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Chat;
