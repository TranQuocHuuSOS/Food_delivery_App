import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { AuthContext } from '../../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { isLoading, login } = useContext(AuthContext);
  const handleLogin = async () => {
    const result = await login(email, password , navigation);
    if (result.success) {
      // Đăng nhập thành công, chuyển hướng đến trang Home
      navigation.navigate('Home');
    } else {
      // Đăng nhập thất bại, xử lý tương ứng nếu cần
      console.log('Login failed:', result.error);
    }
  };
 
  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <View style={styles.wrapper}>
        <Text>{login}</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 50 }}>
          <Text style={{ fontStyle: 'bold', fontSize: 30 }}>Log in</Text>
        </View>
        <TextInput value={email} style={styles.input} placeholder="Enter email" onChangeText={(text) => setEmail(text)} />
        <TextInput value={password} style={styles.input} placeholder="Enter password" secureTextEntry onChangeText={(text) => setPassword(text)} />
        <Button title="Login" onPress={() => handleLogin()} />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text> Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  link: {
    color: 'blue',
  },
});
