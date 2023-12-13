import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
// import HomeScreen from '../screens/HomeScreen'; // Assuming you have a Home screen

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{ title: 'Sign In' }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ title: 'Sign Up' }}
            />
            {/* <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home' }}
            /> */}
        </Stack.Navigator>
    );
};

export default AppNavigator;