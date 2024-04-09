import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList
    
  } from 'react-native'

import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon4 from 'react-native-vector-icons/Feather'
import Icon5 from 'react-native-vector-icons/AntDesign'
import FilterIcon from 'react-native-vector-icons/Ionicons'
import NotiIcon from 'react-native-vector-icons/MaterialIcons'
import HeartIcon from 'react-native-vector-icons/AntDesign'
import LocationIcon from 'react-native-vector-icons/Octicons'
import LocationPickIcon from 'react-native-vector-icons/MaterialIcons'

import FlowerSlide from "../components/FlowerSlide";
import FlowerSlideItem from "../components/FlowerSlideItem";




export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.rowContainer}>
          <View style={styles.locationGroup}>
            <LocationIcon name="location" size={30} color="#148fcc" style={styles.locationIcon}/>
            <Text style={styles.locationText}>O'fallon,63368</Text>
            <LocationPickIcon name="keyboard-arrow-down" size={30} color="#148fcc" style={styles.locationPickIcon}/>
          </View>


          <View style={styles.iconGroup}>
              <NotiIcon name="notifications" size={30} color="#148fcc"  style={styles.notiIcon}/>
              <HeartIcon name="heart" size={30} color="#148fcc" />
          </View>
      </View>

      <View style={styles.rowContainer}>
        <TextInput style={styles.input}
        placeholder="Search"
        />
        <FilterIcon name="filter-outline" size={30} color="#148fcc" />
      </View>


      {/* <View> */}
      <FlatList 
          data = {FlowerSlide} 
          renderItem={({item}) => <FlowerSlideItem item = {item}/>}
          horizontal
          
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          
      />
      {/* </View> */}




                    
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Icon1 name="home" size={30} color="black" /> 
          <Text style={styles.footerText}>Home</Text>
        </View>

        <View style={styles.iconContainer}>
          <Icon2 name="category" size={30} color="black" />
          <Text style={styles.footerText}>Categories</Text>
        </View>

        <View style={styles.iconContainer}>
          <Icon3 name="message-text-outline" size={30} color="black" /> 
          <Text style={styles.footerText}>Message</Text>
        </View>

        <View style={styles.iconContainer}>
        <Icon4 name="shopping-cart" size={30} color="black" /> 
          <Text style={styles.footerText}>Cart</Text>
        </View>

        <View style={styles.iconContainer}>
        <Icon5 name="profile" size={30} color="black" /> 
          <Text style={styles.footerText}>Profile</Text>
        </View>
      </View>
        
    
    </View>
  )
}

const styles = StyleSheet.create({
   
      container: {
          flex: 1,
          backgroundColor: '#fff',
          
          paddingHorizontal: 20,
          paddingBottom: 20, 
          
      },
      text: {
        
        fontSize: 15, 
        fontWeight: 'bold',
        marginBottom: 50, 
        

    }, 
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      position: 'absolute', 
    bottom: 0, 
    width: "100%",
      
    },
    iconContainer: {
      alignItems: 'center',
    },
    footerText: {
      fontSize: 12,
      marginTop: 5,
      fontWeight: 'bold',
      color: "black",
    },
    input: {
        
      marginTop: 30,
      height: 40,
      width: "85%",
      marginBottom: 15,
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#696b6a',  
    },
    rowContainer: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      // marginBottom: 10,
    },

    iconGroup: {
      flexDirection: 'row', 
      alignItems: 'center', 
      
    },

    locationGroup: {
      flexDirection: 'row', 
      alignItems: 'center', 
    },

    locationIcon: {
      marginRight: 10, 
    },

    locationText: {
      marginRight: 10, 
    },

    notiIcon: {
      marginRight: 10, 
    },
    

    locationPickIcon: {
      marginLeft: -15, 
    },
      
  });