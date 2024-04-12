import React, { useState,useRef,useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    Animated
    
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
import Paginator from "../components/Paginator";

import FlowerList from "../components/FlowerList";
import FlowerListItem from "../components/FlowerListItem";

import flowerSlideData from '../components/FlowerSlide';



export default function HomeScreen() {
  const [currentIndex,setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const viewableItemsChanged = useRef(({ viewableItems}) => {
    // Your code to handle viewable items changes
    // console.log("Visible items are", viewableItems);
    // console.log("Changed in this iteration", changed);
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const [ForwardDirection, setForwardDirection] = useState(null);
  useEffect(() => {
    const timer = setInterval(() => {
      // Determine next index
      let nextIndex;
      if (ForwardDirection) {
        nextIndex = currentIndex + 1;
        if (nextIndex >= flowerSlideData.length) {
          nextIndex = flowerSlideData.length - 2;
          setForwardDirection(false);
        }
      } else {
        nextIndex = currentIndex - 1;
        if (nextIndex < 0) {
          nextIndex = 1;
          setForwardDirection(true);
        }
      }

      setCurrentIndex(nextIndex);

      // Scroll to the next index
      if (slideRef.current) {
        slideRef.current.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndex, flowerSlideData.length, ForwardDirection]);


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
      <Text style={styles.text}>Special Offer</Text>


      
      {/* Flatlist below indicates the flower slide horizontal carousel effect */}
      <View style={styles.rowFlatcontainer}>
      <FlatList 
          data = {flowerSlideData} 
          renderItem={({item}) => <FlowerSlideItem item = {item}/>}
          horizontal
          
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id} // Unique key for each item
          onScroll={Animated.event([{nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
         onViewableItemsChanged={viewableItemsChanged} 
         viewabilityConfig={viewConfig}
         ref={slideRef}
      />
      </View>
      <Paginator data = {flowerSlideData} scrollX={scrollX}/>


      <Text style={styles.text}>Recommended For You</Text>
      

      {/* <Text>Recommended for you</Text> */}
      {/* Flatlist below indicates the flower list vertical scroll */}
      {/* <View style={styles.colFlatcontainer}> */}
      <FlatList
      data = {FlowerList} 
      renderItem={({item}) => <FlowerListItem item = {item}/>}
      numColumns={2}
      contentContainerStyle={{gap: 7,padding: 7}}
      columnWrapperStyle={{gap: 10}}
      showsVerticalScrollIndicator={false}

      />
      {/* </View> */}


                    
      {/* <View style={styles.footer}>
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
      </View>   */}
        
    
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
        
        fontSize: 25, 
        fontWeight: 'bold',
        color: "#000000",
        // marginBottom: 50, 
        

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
    // padding: 18,
    
      
    },
    iconContainer: {
      alignItems: 'center',
      padding: 17,
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

    rowFlatcontainer: {
      // flex: 1,
      
      // borderWidth: 1,
      marginTop: -2,
      // flexDirection:"column",
      
  },
//   colFlatcontainer: {
//     // flex: 1,
//     borderWidth: 2,
     
    
// },

// text: {
        
//   fontSize: 15, 
//   // fontWeight: 'bold',
//   marginBottom: 50, 
//   fontFamily: "Poppins-Regular",
  

// },
    
  });