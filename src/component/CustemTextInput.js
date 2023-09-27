//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { width } from '../utils/constent';

// create a component
const CustemTextInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder={props?.placeholder}
                style={styles.input}
                onChangeText={(e)=>props.onChangeText(e)}
                placeholderTextColor={'#D0D0D0'}
                value={props?.value}
            />
            <View style={styles.icon}>
                {props?.icon}
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#2c3e50',
        width:'100%'
    },
    input:{
        color:'#fff',
        fontSize:width * 0.036,
        height: width * 0.1,
        borderBottomWidth:1,
        borderColor:"#fff",
    },
    icon:{
        position:'absolute',
        right: 5,
        top:10
    }
});

//make this component available to the app
export default CustemTextInput;
