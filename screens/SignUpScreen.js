import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { registerUser } from '../api/authServices';

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSignUp = async () => {
        try {
            console.log("email", email);
            if (password !== confirmPassword) {
                Alert.alert("Error", "Passwords do not match");
                return;
            }
            await registerUser({ email, password });
            Alert.alert("Success", "User registered successfully");
            // Navigate to login or home screen
        } catch (error) {
            Alert.alert("Error", "Failed to register user");
        }
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
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 20,
    },
    signInText: {
        color: 'blue',
        marginTop: 20,
    },
});

export default SignUpScreen;