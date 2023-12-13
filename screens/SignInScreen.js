import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <CustomInput placeholder="Email" value={email} setValue={setEmail} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
            <CustomButton title="Sign In" onPress={() => {/* Handle sign in */ }} />
            <Text onPress={() => navigation.navigate('SignUp')}>Don't have an account? Sign Up</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
    },
});

export default SignInScreen;