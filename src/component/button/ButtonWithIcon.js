import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { width } from '../../utils/constent'

const ButtonWithIcon = (props) => {
    return (
        <TouchableOpacity onPress={() => props?.press()}>
            <View style={[styles.container]}>
                <View>
                    {props.icon}
                </View>
                <Text style={styles.text}>{props?.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // height: width * 0.1,
        borderWidth: 0.5,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#c7ccd1",
        flexDirection: 'row'
    },
    text: {
        color: '#fff',
        fontSize: width * 0.06,
        fontWeight: 'bold'
    }
})

export default ButtonWithIcon