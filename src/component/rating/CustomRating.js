import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-ratings'
import { STAR_IMAGE } from '../../utils/images'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { width } from '../../utils/constent'
const data = [{ id: 1, value: true }, { id: 2, value: true }, { id: 3, value: true }, { id: 4, value: true }, { id: 5, value: false }]
const CustomRating = () => {
    return (
        <View style={styles.container}>
            <View style={styles.ratingContainer}>
                {data.map((el, i) => (
                    <FontAwesome name={el.value ? 'star' : 'star-o'} size={18} color='#fff' style={styles.icon} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // backgroundColor: "#000"
    },
    ratingContainer: {
        // backgroundColor: "rgba(52, 52, 52, 0.4)"
        flexDirection: 'row',
    },
    icon:{
        marginRight: width * 0.02
    }
})

export default CustomRating