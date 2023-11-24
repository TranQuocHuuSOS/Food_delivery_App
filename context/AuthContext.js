import React, { createContext, useState,useContext, useReducer } from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from "../config";
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isEmailValid = (email) => {
    // Biểu thức chính quy kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const register = async (name, email, password ) => {
    setIsLoading(true);
    try {
      if (!name || !email || !password) {
        setIsLoading(false);
        Alert.alert('Error', 'Please fill in all fields.');
        return;
      }
      if (!isEmailValid(email)) {
        setIsLoading(false);
        Alert.alert('Error', 'Please enter a valid email address.');
        return;
      }
  
      // Kiểm tra độ dài của password
      if (password.length < 8) {
        setIsLoading(false);
        Alert.alert('Error', 'Password must be at least 8 characters long.');
        return;
      }
      const response = await axios.post(`${BASE_URL}`, {
        name, 
        email,
        password,
      });

      let userInfo = response.data;
      setUserInfo(userInfo);
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      setIsLoading(false);
      Alert.alert('Register successfully!')
      
      navigation.navigate('Login');
      console.log(userInfo);
    } catch (error) {
      console.log(`Register error: ${error}`);
      setIsLoading(false);
    }
  };

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      // Lấy thông tin người dùng từ mô phỏng (mock data)
      const response = await axios.get(`${BASE_URL}`);
      const mockData = response.data;
  
      // Tìm kiếm người dùng trong mock data
      const foundUser = mockData.find(user => user.email === email && user.password === password);

  
      if (foundUser) {
        // Thành công, lưu thông tin người dùng và chuyển hướng đến trang Main
        setUserInfo(foundUser);
        await AsyncStorage.setItem('userInfo', JSON.stringify(foundUser));
        setIsLoading(false);
        navigation.navigate('Main');
        return { success: true, userInfo: foundUser };
      } else {
        // Tài khoản không đúng
        setIsLoading(false);
        Alert.alert('Error', 'Invalid email or password');
        return { success: false, error: 'Invalid email or password' };
      }
    } catch (error) {
      console.log(`Login error: ${error}`);
      setIsLoading(false);
  
      // Trả về giá trị khi đăng nhập thất bại
      return { success: false, error: 'Login failed' };
    }
  };
  
 

  return (
    <AuthContext.Provider value={{ isLoading, userInfo, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};
