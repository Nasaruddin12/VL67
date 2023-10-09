import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { width } from '../../utils/constent'

const CustemButton = (props) => {
    return (
        <TouchableOpacity onPress={()=> props?.press()}>
            <View style={[styles.container,{backgroundColor: props?.colors ? '#000': '' }]}>
                <Text style={{ color: '#ffd' }}>{props?.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: width * 0.1,
        borderWidth: 0.5,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'

    }
})

export default CustemButton