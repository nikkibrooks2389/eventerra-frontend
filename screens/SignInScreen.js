import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import LogoImage from '../assets/eventerra-logo.png';
import { GlobalStyles } from '../styles/GlobalStyles';

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={[GlobalStyles.container, styles.container]}>
                <Image source={LogoImage} style={styles.logo} />
                <CustomInput style={GlobalStyles.secondaryText} placeholder="Email" value={email} setValue={setEmail} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
                <Text style={[GlobalStyles.primaryText, styles.text1]} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password?</Text>
                <CustomButton title="Sign In" onPress={() => {/* Handle sign in */ }} />
                <Text style={[GlobalStyles.primaryText, styles.text2]} onPress={() => navigation.navigate('SignUp')}>Don't have an account? Sign Up</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        justifyContent: 'center',

    },

    logo: {
        width: 120,  // Set your desired width
        height: 120, // Set your desired height
        marginBottom: 20, // Optional: adds some space below the image
    },

    text1: { // Align text to the right
        paddingBottom: 35,       // Add padding
        // You might also want to adjust the width or other styles as needed
    },
    text2: { // Align text to the right
        paddingTop: 10,       // Add padding
        // You might also want to adjust the width or other styles as needed
    },


});

export default SignInScreen;