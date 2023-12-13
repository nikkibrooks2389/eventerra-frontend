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
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        // Default text styling
        color: 'white',
        fontSize: 16,
    },
});

export default CustomButton;