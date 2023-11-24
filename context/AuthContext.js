import React, { createContext, useState,useContext, useReducer } from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from "../config";
import { useNavigation } from '@react-navigation/native';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const register = async (name, email, password ) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}`, {
        name,
        email,
        password,
      });

      let userInfo = response.data;
      setUserInfo(userInfo);
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      setIsLoading(false);
      navigation.navigate('Login');
      console.log(userInfo);
    } catch (error) {
      console.log(`Register error: ${error}`);
      setIsLoading(false);
    }
  };

  const login = async (email, password ) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}`, {
        params: { email, password },
      });

      let userInfo = response.data;
      console.log(userInfo);
      setUserInfo(userInfo);
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      setIsLoading(false);
      navigation.navigate('Home');
      return { success: true, userInfo };
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
