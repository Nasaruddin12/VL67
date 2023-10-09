import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Top, width } from '../../utils/constent'
import Navbar from '../../component/Header/Navbar'
import { useNavigation } from '@react-navigation/native'
import StackCarousel from '../../component/CustomCarousel/StackCarousel'
import CustomSerach from '../../component/search/CustomSerach'
import CustemButton from '../../component/button/CustemButton'
import ButtonWithIcon from '../../component/button/ButtonWithIcon'
import ButtonsForVenue from '../../component/button/ButtonsForVenue'
import VenueFliterModel from '../../component/model/VenueFliterModel'

const Venue = () => {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Navbar title='Venue' back={() => navigation.goBack()} />
      <ScrollView  showsVerticalScrollIndicator={true}>
        <View style={{ marginHorizontal: width * 0.04, }}>
          <CustomSerach onFilter={() => setModalVisible(true)} />
        </View>
        <View style={{ marginTop: width * 0.05 }}>
          <StackCarousel onPress={() => navigation.navigate('/venueDetails')} />
        </View>
        <View style={{ marginHorizontal: width * 0.1, marginVertical: width * 0.05 }}>
          <ButtonsForVenue />
        </View>
        <View style={{ marginHorizontal: width * 0.02, marginBottom: 60 }}>
          <ButtonWithIcon title='Book' press={() => console.log()} colors={true} icon={<Image source={require('../../assets/hand.png')} />} />
        </View>
        <VenueFliterModel modalVisible={modalVisible} onClose={() => setModalVisible(false)} />
      </ScrollView>
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