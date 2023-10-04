//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import CustemButton from '../../component/input/CustemButton';
import CustemTextInput from '../../component/input/CustemTextInput';
import { height, Top, width } from '../../utils/constent';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
// create a component
const Otp = () => {
     const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{ margin: width * 0.01 }}>
                <ImageBackground source={require('../../assets/girl.jpeg')} style={styles.img}>
                    <Image source={require('../../assets/logo.jpeg')} style={styles.logo} />
                    <Text style={styles.text}>For all Ocassions</Text>

                    <Text style={styles.title}>Please enter OTP Number received on your registered mobile number</Text>
                    <View style={{ marginHorizontal: width * 0.15, marginTop: width * 0.1 }}>
                        <CustemTextInput
                            placeholder='Otp Number'
                            onChangeText={(e) => console.log(e)}
                            icon={<AntDesign name='mobile1' size={width * 0.06} color='#fff' />}
                        />
                    </View>
                    <View style={{ marginHorizontal: width * 0.2, marginTop: width * 0.9 }}>
                        <CustemButton title='Signup' colors={false} press={() => navigation.navigate('/host')}
                        />
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: Top,
        height: height,
        width: width
    },
    img: {
        // width: width * 0.98,
        height: '100%',
        borderRadius: width * 0.02,
        // backgroundColor: 'transparent',
        // opacity: 0.6

    },
    logo: {
        alignSelf: 'center',
        height: width * 0.18,
        width: width * 0.25,
        marginTop: width * 0.05,
        borderRadius: width * 0.02
    },
    text: {
        fontSize: width * 0.04,
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: width * 0.03
    },
    flex: {
        flexDirection: 'row',
        marginTop: width * 0.04,
        marginHorizontal: width * 0.15
    },
    title:{
        fontSize: width * 0.04,
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: width * 0.1,
        marginHorizontal: width * 0.1
    }
});

//make this component available to the app
export default Otp;
