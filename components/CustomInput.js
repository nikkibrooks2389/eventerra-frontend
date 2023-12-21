import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GlobalStyles } from '../styles/GlobalStyles';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry, textContentType, style }) => {
    const [isSecure, setIsSecure] = useState(true);

    return (
        <View style={[styles.inputContainer, style]}>
            <TextInput
                style={[GlobalStyles.input, styles.input]}
                onChangeText={setValue}
                value={value}
                placeholder={placeholder}
                secureTextEntry={isSecure}
                textContentType={textContentType}
            />
            {secureTextEntry &&
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => setIsSecure(!isSecure)}>
                    <Icon name={isSecure ? 'eye-slash' : 'eye'} size={20} color="grey" />
                </TouchableOpacity>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    icon: {
        position: 'absolute',
        right: 10,
        bottom: 5,
        height: '100%',
        justifyContent: 'center',
        padding: 10,
    },

});


export default CustomInput;