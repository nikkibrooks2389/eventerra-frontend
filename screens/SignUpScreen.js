import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { registerUser, checkEmailAvailability } from '../api/authServices';

const SignUpScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordsNotMatching, setPasswordsNotMatching] = useState(false);
    const [loading, setLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');
    const [formError, setFormError] = useState('');


    const handleSignUp = async () => {
        setFormError('');
        setEmailError('');
        setUserNameError('');
        setPasswordError('');
        setPasswordsNotMatching(false);

        if (!fullName || !email || !password || !confirmPassword) {
            setFormError('All fields are required');
            return;
        }

        try {

            setLoading(true);


            // Email format validation
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (!emailRegex.test(email)) {
                setEmailError('Invalid email format');
                setLoading(false);
                return;
            }


            console.log(password, confirmPassword)
            if (password !== confirmPassword) {
                setPasswordsNotMatching(true);
                setLoading(false);
                return;
            }

            // Clear email and form errors, and proceed with registration
            setEmailError('');
            setFormError('');
            console.log("HERE2")

            let res = await registerUser({ fullName, email, password });

            setLoading(false);
            Alert.alert('Success', 'User registered successfully');
            // Navigate to login or home screen
        } catch (error) {
            console.log(error.response)
            if (error.response && error.response.status === 400) {
                const validationErrors = error.response.data.errors;
                let fieldErrors = {};

                if (validationErrors) {
                    validationErrors.forEach((validationError) => {
                        const { path, message } = validationError;
                        fieldErrors[path] = message;
                    });
                    // Set the state for each error field
                    setUserNameError(fieldErrors.fullName || '');
                    setEmailError(fieldErrors.email || '');
                    setPasswordError(fieldErrors.password || '');
                }

                if (error.response.data === 'Email is already registered') {
                    setEmailError('Email already exists');

                }



            } else {
                console.log("ERRROR", error);
                Alert.alert('Error', 'Failed to register user');
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        // Password strength indicator logic
        const checkPasswordStrength = (value) => {
            const lengthRequirement = value.length >= 8;
            const hasUppercase = /[A-Z]/.test(value);
            const hasLowercase = /[a-z]/.test(value);
            const hasDigit = /\d/.test(value);
            const hasSpecialCharacter = /[!@#$%^&*]/.test(value);

            if (lengthRequirement && hasUppercase && hasLowercase && hasDigit && hasSpecialCharacter) {
                setPasswordStrength('Strong');
            } else if (lengthRequirement && ((hasUppercase && hasLowercase) || (hasLowercase && hasDigit) || (hasDigit && hasSpecialCharacter))) {
                setPasswordStrength('Medium');
            } else {
                setPasswordStrength('Weak');
            }
        };

        checkPasswordStrength(password);
    }, [password]);


    const getPasswordStrengthColor = () => {
        switch (passwordStrength) {
            case 'Weak':
                return 'red';
            case 'Medium':
                return 'orange';
            case 'Strong':
                return 'green';
            default:
                return 'black'; // Default color when no text in password
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Full Name {userNameError ? <Text style={styles.errorText}> {userNameError}</Text> : null} </Text>
                        <CustomInput placeholder="Full Name" value={fullName} setValue={setFullName} />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Email   {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}</Text>
                        <CustomInput placeholder="Email" value={email} setValue={setEmail} keyboardType="email-address" />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Password     {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null || password.length > 0 ? (
                            <Text style={[styles.passwordStrengthText, { color: getPasswordStrengthColor() }]}>
                                Password Strength: {passwordStrength}
                            </Text>
                        ) : null}</Text>
                        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Confirm Password  {passwordsNotMatching ? <Text style={styles.errorText}>Passwords need to match</Text> : null}</Text>
                        <CustomInput
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            setValue={setConfirmPassword}
                            secureTextEntry
                        />
                    </View>
                    {formError ? <Text style={styles.formError}>{formError}</Text> : null}
                    {loading ? <ActivityIndicator size="large" color="#007BFF" /> : null}
                    <CustomButton title="Sign Up" onPress={handleSignUp} disabled={loading} />
                    <Text style={styles.signInText} onPress={() => navigation.navigate('SignIn')}>
                        Already have an account? Sign In
                    </Text>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollView: {
        flexGrow: 1,
        padding: 20,
        justifyContent: 'center',
    },
    formGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        fontWeight: 'normal',
    },
    passwordStrengthText: {
        marginBottom: 10,
        fontWeight: 'normal',
    },
    formError: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
    signInText: {
        color: 'blue',
        marginTop: 20,
        textAlign: 'center',
    },
});

export default SignUpScreen;