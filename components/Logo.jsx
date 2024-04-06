import React from 'react'
import {
    View,
    Text,
    Image,
    SafeAreaView,
    StyleSheet
  } from 'react-native'


const logoImg = require("./src/Logo.png")

export default function Logo() {
  return (
    <View style = {styles.container} >
        <Image source={logoImg} style = {styles.imgContainer}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#ffffff",
        
    },
    imgContainer: {
        width: 600,
        height: 600
        
    },
})
