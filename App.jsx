import React from "react"; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import 'react-native-vector-icons/AntDesign';


import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native'
import SignUp from './components/SignUp';
import Logo from './components/Logo';
import Login from './components/Login';
import HomeScreen from "./components/HomeScreen";



function App(){
  const Stack = createNativeStackNavigator();
  return(
    
  //  <SafeAreaView style = {styles.container}>  
    // <View> 
      //  <SignUp/> 
      // <Logo /> 
      //<Login /> 

    //  </View> 
  // </SafeAreaView> 
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
      
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});