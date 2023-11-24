import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import Spinner from 'react-native-loading-spinner-overlay';
const Signup = ({navigation}) => {
    const[name, setName] = useState(null);
    const[email, setEmail] = useState(null);
    const[password, setPassword]= useState(null);
    const { isLoading, register } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Spinner visible={isLoading}/>
      <View style={styles.wrapper}>
        <Text>{register}</Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <Text style={{ fontStyle: "bold", fontSize: 30 }}>Sign up</Text>
        </View>
        <TextInput
          value={name}
          style={styles.input}
          placeholder="Enter name"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Enter email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          value={password}
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Signup" onPress={()=>{
          register(name, email,password, navigation)
        }}/>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text> Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  link: {
    color: "blue",
  },
});
