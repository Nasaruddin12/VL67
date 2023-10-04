//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, Touchable } from 'react-native';
import { height, Top, width } from '../utils/constent';
import { useNavigation } from '@react-navigation/native';

// create a component
const Role = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <View style={styles.logoconatainer}>
                    <Image source={require('../assets/logo.jpeg')} style={styles.logo} />
                </View>
                <View style={styles.flex}>
                    <View style={{ height: height * 0.3 }}>
                        <Image source={require('../assets/artist.jpeg')} style={styles.artistImg} />
                        <Text style={[styles.text, { position: 'absolute', alignSelf: 'center', top: height * 0.14 }]}>I'm an Artist </Text>
                    </View>
                    <View style={{ height: height * 0.3 }}>
                        <Pressable onPress={()=> navigation.navigate('/login')}>
                            <Image source={require('../assets/artist.jpeg')} style={styles.guestImg} />
                            <Text style={[styles.text, { position: 'absolute', alignSelf: 'center', top: height * 0.07 }]}>I'm a Host </Text>
                        </Pressable>
                        <View style={{ marginTop: width * 0.01 }}>
                            <Image source={require('../assets/artist.jpeg')} style={styles.guestImg} />
                            <Text style={[styles.text, { position: 'absolute', alignSelf: 'center', top: height * 0.07 }]}>I'm a Guest </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Image source={require('../assets/artist.jpeg')} style={styles.eventImg} />
                    <Text style={[styles.text, { position: 'absolute', alignSelf: 'center', top: height * 0.07 }]}>I'm an Event Manager </Text>
                </View>
                <View style={[styles.flex, { marginTop: width * 0.01 }]}>
                    <View style={{ height: height * 0.3 }}>
                        <Image source={require('../assets/artist.jpeg')} style={styles.artistImg} />
                        <Text style={[styles.text, { position: 'absolute', alignSelf: 'center', top: height * 0.14 }]}>I'm a Sponsor </Text>
                    </View>
                    <View style={{ height: height * 0.3 }}>
                        <View>
                            <Image source={require('../assets/artist.jpeg')} style={styles.guestImg} />
                            <Text style={[styles.text, { position: 'absolute', alignSelf: 'center', top: height * 0.07 }]}>I'm a Speaker </Text>
                        </View>
                        <View style={{ marginTop: width * 0.01 }}>
                            <Image source={require('../assets/artist.jpeg')} style={styles.guestImg} />
                            <Text style={[styles.text, { position: 'absolute', alignSelf: 'center', top: height * 0.07 }]}>I'm a Participant </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Image source={require('../assets/artist.jpeg')} style={styles.eventImg} />
                    <Text style={[styles.text, { position: 'absolute', alignSelf: 'center', top: height * 0.07 }]}>Venue </Text>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: Top
    },
    subcontainer: {
        margin: width * 0.01
    },
    logo: {
        resizeMode: 'contain',
        width: width * 0.13,
        height: width * 0.09,
        alignSelf: 'center'
    },
    logoconatainer: {
        // alignSelf:'center',
        backgroundColor: "#000",
    },
    flex: {
        flexDirection: 'row',
    },
    artistImg: {
        height: height * 0.3,
        width: width * 0.485,
        opacity: 0.8
    },
    text: {
        color: '#fff',
        fontSize: width * 0.04
    },
    guestImg: {
        height: height * 0.148,
        width: width * 0.485,
        marginLeft: width * 0.01
    },
    eventImg: {
        height: height * 0.165,
        width: width * 0.98,
        marginTop: width * 0.01
    }
});

//make this component available to the app
export default Role;
