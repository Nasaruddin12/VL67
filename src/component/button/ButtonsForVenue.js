import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { width } from '../../utils/constent'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const ButtonsForVenue = (props) => {
    return (
        <View style={styles.container}>
            <View style={[styles.icon, { borderColor: props.value == "reload" ? '#000' : '#c7ccd1', }]}>
                <Entypo name='ccw' color={props.value == "reload" ? '#000' : '#c7ccd1'} size={width * 0.1} />
            </View>
            <View style={[styles.icon, { borderColor: props.value == "close" ? '#000' : '#c7ccd1', }]}>
                <Fontisto name='close-a' color={props.value == "close" ? '#000' : '#c7ccd1'} size={width * 0.08} />
            </View>
            <View style={[styles.icon, { borderColor: props.value == "like" ? '#000' : '#c7ccd1', }]}>
                <Entypo name='heart' color={props.value == "like" ? '#000' : '#c7ccd1'} size={width * 0.1} />
            </View>
            <View style={[styles.icon, { borderColor: props.value == "details" ? '#000' : '#c7ccd1', }]}>
                <FontAwesome5 name='address-book' color={props.value == "details" ? '#000' : '#c7ccd1'} size={width * 0.1} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        borderRadius: 50,
        width: width * 0.15,
        height: width * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    }
})

export default ButtonsForVenue