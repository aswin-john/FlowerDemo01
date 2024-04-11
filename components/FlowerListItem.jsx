import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';

export default function FlowerListItem({ item }) {
    const { width } = useWindowDimensions();

    return (
        <View style={styles.container}>
            <Image source={item.image} style={[styles.image, { width: width * 0.9, height: width * 0.5 }]} resizeMode="contain" />
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>${item.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center', // Center items horizontally in the container
        padding: 10, // Add some padding to prevent items from touching the edges
        flex: 1,
        maxWidth: "50%"
    },
    image: {
        marginBottom: 10, // Reduce space between the image and text below
    },
    text: {
        fontSize: 15,
        fontFamily: "Poppins-ExtraBold",
    },
});
