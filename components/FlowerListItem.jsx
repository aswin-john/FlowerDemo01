import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';

export default function FlowerListItem({ item }) {
    const { width } = useWindowDimensions();

    return (
        <View style={styles.container}>
            <Image source={item.image} style={[styles.image]} resizeMode="contain" />
            <View style={styles.titleContainer}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center', // Center items horizontally in the container
        // padding: 10, // Add some padding to prevent items from touching the edges

        flex: 1,
        maxWidth: "50%",
        borderWidth: 1,
        height: 250,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        
    },
    image: {
        // marginBottom: 10, // Reduce space between the image and text below
        width: '100%',
        height: '70%',
        borderRadius: 100,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    titleContainer: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      price: {
        fontSize: 16,
        color: 'green',
        marginTop: 5,
      },
});
