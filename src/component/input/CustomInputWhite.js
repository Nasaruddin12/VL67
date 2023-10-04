import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { width } from '../../utils/constent'

const CustomInputWhite = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={props?.placeholder}
                style={styles.input}
                onChangeText={(e) => props.onChangeText(e)}
                // placeholderTextColor={'#D0D0D0'}
                value={props?.value}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#2c3e50',
        width:'100%'
    },
    input:{
        color:'#000',
        fontSize:width * 0.036,
        height: width * 0.09,
        // borderBottomWidth:1,
        // borderColor:"#fff",
        backgroundColor:'#fff'
    },
    icon:{
        position:'absolute',
        right: 5,
        top:10
    }
})
export default CustomInputWhite