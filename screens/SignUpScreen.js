import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
// import AuthService from '../services/AuthService'; // Assuming AuthService is set up for sign-up logic

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        // Implement the sign-up logic here.
        // Example: AuthService.signUp(email, password).then(...).catch(...)
        // Make sure to validate the inputs, like checking if the passwords match.
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
                keyboardType="email-address"
            />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
            <CustomInput
                placeholder="Confirm Password"
                value={confirmPassword}
                setValue={setConfirmPassword}
                secureTextEntry
            />
            <CustomButton title="Sign Up" onPress={handleSignUp} />
            <Text
                style={styles.signInText}
                onPress={() => navigation.navigate('SignIn')}>
                Already have an account? Sign In
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    signInText: {
        color: 'blue',
        marginTop: 20,
    },
});

export default SignUpScreen;