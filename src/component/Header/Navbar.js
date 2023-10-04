import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { width } from '../../utils/constent'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

const Navbar = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal:width * 0.01 }}>
        <TouchableOpacity onPress={() => props.back()}>
          <Entypo name="reply" size={width * 0.07} color='#fff' />
        </TouchableOpacity>
        <Text style={styles.text}>{props.title}</Text>
        <TouchableOpacity onPress={() => props.press()}>
          <Entypo name="dots-three-vertical" size={width * 0.07} color='#fff' />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: width * 0.1,
    justifyContent: 'center'
  },
  text: {
    color: '#ffd',
    fontSize: width * 0.04
  }
})

export default Navbar