import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { height, Top, width } from '../../utils/constent'
import CustemButton from '../../component/input/CustemButton'
import CustemTextInput from '../../component/input/CustemTextInput'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import CustomRadioButton from '../../component/input/CustomRadioButton'
import { useNavigation } from '@react-navigation/native'
const Signup = () => {
    const navigation = useNavigation()
    const [value, setValue] = useState('Male')
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
                            icon={<Entypo name='mail' size={width * 0.05} color='#fff' />}
                        />
                    </View>
                    <View style={{ marginHorizontal: width * 0.15, marginTop: width * 0.04 }}>
                        <CustemTextInput
                            placeholder='Contact Number'
                            onChangeText={(e) => console.log(e)}
                            icon={<AntDesign name='mobile1' size={width * 0.05} color='#fff' />}
                        />
                    </View>
                    <View style={styles.flex}>
                        <View style={{ width: "45%" }}>
                            <Text style={styles.subtext}>Gender</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <CustomRadioButton title="Male"
                                    status={value == 'Male' ? true : false}
                                    press={() => setValue('Male')}
                                />
                            </View>

                            <View style={{ marginLeft: width * 0.024 }}>
                                <CustomRadioButton title="Female"
                                    status={value == 'Female' ? true : false}
                                    press={() => setValue('Female')}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ marginHorizontal: width * 0.2, marginTop: width * 0.5 }}>
                        <CustemButton title='Signup' colors={false} press={() => navigation.navigate('/otp')}
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
    subtext: {
        color: '#ffd',
        fontSize: width * 0.035
    }
})
export default Signup