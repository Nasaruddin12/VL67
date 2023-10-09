import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { width } from '../../utils/constent'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const CustomSerach = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ width: '76%' }}>
        <TextInput
          style={styles.input}
          placeholder='Search by name'
          placeholderTextColor='#000'
        />
      </View>
      <View style={{ backgroundColor: '#D3D3D3', height: width * 0.12, marginLeft: width * 0.01, width: '12%', alignItems: 'center', justifyContent: 'center' }}>
        <Feather name='search' size={width * 0.06} color='#000' style={{ alignSelf: 'center', }} />
      </View>
        <View style={{ backgroundColor: '#fff', height: width * 0.12, width: '12%', alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={()=> props.onFilter()}>
          <FontAwesome name='filter' size={width * 0.1} color='#D3D3D3' style={{ alignSelf: 'center', }} />
      </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: width * 0.05,
    flexDirection: 'row',
  },
  input: {
    color: '#000',
    fontSize: width * 0.04,
    height: width * 0.12,
    // borderBottomWidth:1,
    // borderColor:"#fff",
    backgroundColor: '#D3D3D3',
    paddingLeft: width * 0.03
  }
})

export default CustomSerach