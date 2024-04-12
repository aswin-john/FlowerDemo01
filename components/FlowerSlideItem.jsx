import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    useWindowDimensions
    
  } from 'react-native'

export default function FlowerSlideItem({item}) {
    const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
        <Image source={item.image} style={[styles.image,{width,resizeMode: 'contain'}]}/>
    </View>
  )
}


const styles = StyleSheet.create({
   
    container: {
        // flex: 1,
        
        
        // paddingHorizontal: 20,
        // paddingBottom: 20, 


        backgroundColor: '#fff',
        // borderWidth: 2,
        marginTop: -30,
        
        
    },
    image: {
        // flex: 0.3,
        justifyContent: 'center', 
        alignItems: 'center',
        // marginTop: -40,
        
        
        
        
        
    },

    
});