//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import CustemTextInput from '../../component/CustemTextInput';
import { height, Top, width } from '../../utils/constent';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import CustemButton from '../../component/CustemButton';
import { useNavigation } from '@react-navigation/native'

// create a component
const Login = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{ margin: width * 0.01 }}>
                <ImageBackground source={require('../../assets/girl.jpeg')} style={styles.img} imageStyle={{}}>
                    <Image source={require('../../assets/logo.jpeg')} style={styles.logo} />
                    <Text style={styles.text}>For all Ocassions</Text>
                    <View style={{ marginHorizontal: width * 0.15, marginTop: width * 0.2 }}>
                        <CustemTextInput
                            placeholder='Username'
                            onChangeText={(e) => console.log(e)}
                            icon={<AntDesign name='user' size={width * 0.06} color='#fff' />}
                        />
                    </View>
                    <View style={{ marginHorizontal: width * 0.15, marginTop: width * 0.05 }}>
                        <CustemTextInput
                            placeholder='Password'
                            onChangeText={(e) => console.log(e)}
                            icon={<Entypo name='key' size={width * 0.05} color='#fff' />}
                        />
                    </View>
                    {/* <View style={{ marginHorizontal: width * 0.2, marginTop: width * 0.25, flexDirection:'row', justifyContent:'space-evenly' }}>
                        <Image source={require('../../assets/facebook.png')} />
                        <Image source={require('../../assets/twitter.png')} style={{width:50, height:50, resizeMode:'contain'}}/>
                        <Image source={require('../../assets/google.png')} style={{width:50, height:50, resizeMode:'contain', backfaceVisibility:'visible'}} />
                    </View> */}
                    <View style={{ marginHorizontal: width * 0.2, marginTop: width * 0.25 }}>
                        <CustemButton title='Login' colors={true} press={() => console.log('press')}
                        />
                    </View>
                    <View style={{ marginHorizontal: width * 0.2, marginTop: width * 0.07 }}>
                        <CustemButton title='Signup' colors={false} press={() => navigation.navigate('/signup')}
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
        
        height: '100%',
        borderRadius: width * 0.02,
        backgroundColor: 'transparent',
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
    }
});

//make this component available to the app
export default Login;
