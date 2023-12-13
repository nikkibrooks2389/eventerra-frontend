import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry, style }) => {
    return (
        <TextInput
            style={[styles.input, style]} // Merge default style with custom style
            onChangeText={setValue}
            value={value}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        // Default styling
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        marginBottom: 10,
    },
});

export default CustomInput;