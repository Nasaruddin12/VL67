import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { width } from '../../utils/constent'
import Ionicons from 'react-native-vector-icons/Ionicons'

const CustomCheckBox = (props) => {
    return (
        <View style={styles.container}>
            {props.value == true ?
                <Ionicons name='checkmark' color='#000' size={width * 0.065} style={{ position: 'absolute', top: -8, }} /> :
                null
            }
            <View style={styles.box}>
            </View>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection:'row'
    },
    box: {
        width: width * 0.048,
        height: width * 0.045,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: width * 0.005
    },
    text:{
        fontSize:width * 0.035,
        color:'#000',
        marginLeft: width * 0.03
    }
})
export default CustomCheckBox