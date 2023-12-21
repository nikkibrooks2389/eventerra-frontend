import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title, style, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        // Default button styling
        backgroundColor: '#74D3D4',
        padding: 15,
        borderRadius: 25,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,

    },
    text: {
        // Default text styling
        color: 'white',
        fontSize: 18,
    },
});

export default CustomButton;