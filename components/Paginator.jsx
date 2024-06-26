import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    Animated,
    useWindowDimensions
    
  } from 'react-native'

export default function Paginator({data,scrollX}) {
    const {width} = useWindowDimensions();
  return (
    <View style = {styles.container}>
        {data.map((_,i) => {
            const inputRange= [(i-1) * width,i*width,(i+1) * width ];
            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [10,20,10],
                extrapolate: 'clamp',
            })
            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3,1,0.3],
                extrapolate: 'clamp',
            })
            return <Animated.View style = {[styles.dot,{width: dotWidth,opacity}]} key={i.toString()} />;
        }
    )}
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        // flex: 0.9,
        flexDirection: 'row', 
        // height: 64,
        justifyContent: 'center',
        alignItems: 'center',
    },
   
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: "#148fcc", 
        marginHorizontal: 8,
        // flex: 1,
        marginTop: -90,
        
        
        
    },
    
    
});