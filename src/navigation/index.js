//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Role from '../screens/Role';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import Otp from '../screens/auth/Otp';
import Hostnavigation from './hostnavigation/Hostnavigation';
// create a component

const Stack = createNativeStackNavigator()
const MainNavigater = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="/role" component={Role} />
                <Stack.Screen  name='/host' component={Hostnavigation}/>
                <Stack.Screen name="/login" component={Login} />
                <Stack.Screen name="/signup" component={Signup} />
                <Stack.Screen name="/otp" component={Otp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MainNavigater;
