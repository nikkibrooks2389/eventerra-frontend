import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
// import AuthService from '../services/AuthService'; // Assuming AuthService handles authentication logic

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handlePasswordReset = () => {
        // AuthService.resetPassword(email)
        //     .then(() => {
        //         Alert.alert('Password Reset', 'Check your email for password reset instructions.');
        //         navigation.navigate('SignIn');
        //     })
        //     .catch(error => {
        //         Alert.alert('Error', error.message);
        //     });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reset Password</Text>
            <CustomInput
                placeholder="Email Address"
                value={email}
                setValue={setEmail}
                keyboardType="email-address"
            />
            <CustomButton title="Send Instructions" onPress={handlePasswordReset} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default ForgotPasswordScreen;