import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import { height, Top, width } from '../../utils/constent'
import CustemButton from '../../component/CustemButton'
import CustemTextInput from '../../component/CustemTextInput'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
const Signup = () => {
    return (
        <View style={styles.container}>
            <View style={{ margin: width * 0.01 }}>
                <ImageBackground source={require('../../assets/girl.jpeg')} style={styles.img}>
                    <Image source={require('../../assets/logo.jpeg')} style={styles.logo} />
                    <Text style={styles.text}>For all Ocassions</Text>
                    <View style={{ marginHorizontal: width * 0.15, marginTop: width * 0.2 }}>
                        <CustemTextInput
                            placeholder='Username'
                            onChangeText={(e) => console.log(e)}
                            icon={<AntDesign name='user' size={width * 0.06} color='#fff' />}
                        />
                    </View>
                    <View style={{ marginHorizontal: width * 0.15, marginTop: width * 0.04 }}>
                        <CustemTextInput
                            placeholder='Email'
                            onChangeText={(e) => console.log(e)}
                            icon={<Entypo name='key' size={width * 0.05} color='#fff' />}
                        />
                    </View>
                    <View style={{ marginHorizontal: width * 0.15, marginTop: width * 0.04 }}>
                        <CustemTextInput
                            placeholder='Contact Number'
                            onChangeText={(e) => console.log(e)}
                            icon={<Entypo name='key' size={width * 0.05} color='#fff' />}
                        />
                    </View>
                    

                    <View style={{ marginHorizontal: width * 0.2, marginTop: width * 0.8 }}>
                        <CustemButton title='Signup' colors={false} press={() => console.log('press')}
                        />
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}
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
        height:'100%',
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
    }
})
export default Signup