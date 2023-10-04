import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { width } from '../../utils/constent'

const CustomRadioButton = (props) => {
    return (
        <TouchableOpacity onPress={()=> props.press()}>
            <View style={styles.container}>
                <View style={styles.circle}>
                    {props.status &&
                        <View style={styles.fill}>
                        </View>
                    }
                </View>
                <Text style={styles.text}>{props?.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row'
    },
    text: {
        color: '#ffd',
        fontSize: width * 0.035,
        marginLeft: width * 0.025
    },
    circle: {
        width: width * 0.05,
        height: width * 0.05,
        borderWidth: 1.5,
        borderColor: '#fff',
        borderRadius: 25,
        justifyContent: 'center'
    },
    fill: {
        backgroundColor: '#fff',
        width: width * 0.031,
        height: width * 0.031,
        borderWidth: 1,
        borderRadius: 50,

        alignSelf: 'center',
    }
})

export default CustomRadioButton