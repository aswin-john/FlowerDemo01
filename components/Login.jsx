import React, { useState } from 'react'
import {
    StyleSheet,
    Image,
    TextInput,
    View,
    Text,
    SafeAreaView,
    StatusBar,
    Button
  } from 'react-native'
  import axios from 'axios';


  const logoImg = require("./src/Logo.png")
  const fbLogoImg = require("./src/fblogo.png")
  const googleLogo = require("./src/googlelogo.png")

  

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!email) errors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email format";
  }
    if (!password) errors.password = "Password is required";
    if (!/(?=.*\d)(?=.*[a-z]).{5,}/.test(password)) {
      errors.password = "Password must contain at least one digit, one lowercase letter, and be at least 5 characters long";
  }
    
    setErrors(errors);
    return Object.keys(errors).length === 0;
};
const handleSubmit = async () => {
  if (validateForm()) {
    try {
      const response = await axios.post(
          'http://3.109.172.100/api/authentication/login/',
          { email, password }
      );
      // Assuming the API response contains a token upon successful login
      const token = response.data.token;
      // You may want to store this token in AsyncStorage or Redux for later use
      // Redirect to HomeScreen upon successful login
      
      props.navigation.navigate("HomeScreen");
    }
    catch (error) {
      // Handle login failure
      console.log("Login Failed:", error.message);
      console.error('Login failed:', error);
    }
  }
};
  return (
    <View style = {styles.container}>
        <Image source={logoImg} style = {styles.imgContainer}/>
        <TextInput style={styles.input} 
                    placeholder="Enter email" 
                    value={email}
                    onChangeText={setEmail}/>
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <TextInput style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}


        <Text style = {styles.text}>or</Text>
        <View style={styles.imagJoinContainer}>
            <Image source={fbLogoImg} style = {styles.fbimgContainer}/>
            <Image source={googleLogo} style = {styles.googleImg}/>
        </View>
        

        <View style={styles.buttonContainer}>
        <Button title="Continue" style={styles.button} onPress={handleSubmit}/>
        </View>
        <Text style = {styles.text}>Don't have account <Text style = {styles.textLink} onPress={()=> props.navigation.navigate("SignUp")}> Sign Up! </Text></Text>

    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center', 
        alignItems: 'center',
        
    },
    imgContainer: {
        
        width: 250,
        height: 150,
        marginBottom: 100,
        
        
    },
    input: {
        
        marginTop: 30,
        height: 40,
        width: 350,
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#148fcc',  
      },


      text: {
        
        fontSize: 15, 
        // fontWeight: 'bold',
        marginBottom: 50, 
        fontFamily: "Poppins-Regular",
        

    }, 

      
    fbimgContainer: {
        
        width: 50,
        height: 50,
        marginBottom: 15,
        
        
    },
    googleImg: {
        
        width: 50,
        height: 50,
        marginBottom: 15,
        
        
        
    },


    imagJoinContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 10,
      },

      buttonContainer: {
        width: "70%", 
        marginBottom: 15,
      },
      textLink: {
        color: "#d47494",
        fontSize: 15, 
        fontWeight: 'bold',
        marginBottom: 50,
        textDecorationLine: 'underline',

      },
      errorText: {
        
        color: "red",
        textAlign: 'left',
        marginBottom: 10,
        marginLeft: 25,
        alignSelf: 'flex-start',
        
    },
})