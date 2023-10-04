import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Top } from '../../utils/constent'
import Navbar from '../../component/Header/Navbar'
import { useNavigation } from '@react-navigation/native'
import CustomCarousel from '../../component/CustomCarousel'
import CustomSerach from '../../component/search/CustomSerach'

const Venue = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Navbar title='Venue' back={() => navigation.goBack()} />
      <CustomSerach />
      <CustomCarousel />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Top,
    backgroundColor: '#fff'
  }
})
export default Venue