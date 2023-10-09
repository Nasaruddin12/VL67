import { View, Text, ScrollView, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import Navbar from '../../component/Header/Navbar'
import { useNavigation } from '@react-navigation/native'
import { GRAY_COLOR, Top, width } from '../../utils/constent'
import CustomRating from '../../component/rating/CustomRating'
import ButtonWithIcon from '../../component/button/ButtonWithIcon'

const VenueDetails = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Navbar title="R. S. Banquet" back={() => navigation.goBack(null)} />
      <ScrollView>
        <View>
          <ImageBackground source={require('../../assets/hall.jpeg')} style={{ height: width * 0.45, marginHorizontal: width * 0.05, marginTop: width * 0.02 }}>
            <View style={styles.details}>
              <View style={{ width: '50%', borderRightWidth: 1, borderColor: '#fff', }}>
                <Text style={styles.title}>Hall 1</Text>
              </View>
              <View style={{}}>
              </View>
              <View style={{ marginLeft: width * 0.06 }}>
                <CustomRating />
                <Text style={styles.title}>₹  4000/ hour</Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground source={require('../../assets/hall1.jpeg')} style={{ height: width * 0.45, marginHorizontal: width * 0.05, marginTop: width * 0.02 }}>
            <View style={styles.details}>
              <View style={{ width: '50%', borderRightWidth: 1, borderColor: '#fff', }}>
                <Text style={styles.title}>Hall 2</Text>
              </View>
              <View style={{}}>
              </View>
              <View style={{ marginLeft: width * 0.06 }}>
                <CustomRating />
                <Text style={styles.title}>₹  4000/ hour</Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground source={require('../../assets/hall1.jpeg')} style={{ height: width * 0.45, marginHorizontal: width * 0.05, marginTop: width * 0.02 }}>
            <View style={styles.details}>
              <View style={{ width: '50%', borderRightWidth: 1, borderColor: '#fff', }}>
                <Text style={styles.title}>Hall 3</Text>
              </View>
              <View style={{}}>
              </View>
              <View style={{ marginLeft: width * 0.06 }}>
                <CustomRating />
                <Text style={styles.title}>₹  4000/ hour</Text>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.line}></View>
          <View style={{ flexDirection: 'row', marginHorizontal: width * 0.12 }}>
            <View style={{ width: '50%' }}>
              <Text style={styles.header}>Venue Name</Text>
              <Text style={styles.header}>Venue type</Text>
              <Text style={styles.header}>Owner Name</Text>
              <Text style={styles.header}>Website</Text>
              <Text style={styles.header}>Description</Text>

            </View>
            <View style={{ width: '50%' }}>
              <Text style={styles.text}>R. S. Banquet</Text>
              <Text style={styles.text}>Banquet Hall</Text>
              <Text style={styles.text}>R Sinha</Text>
              <Text style={styles.text}>www.banquet.com</Text>
            </View>

          </View>
          <View style={{ marginHorizontal: width * 0.12 }}>
            <Text style={styles.text}>
              A banquet hall, function hall, or reception hall, is a special purpose room, or a building, used for hosting large social and business events. Typically a banquet hall is capable of serving dozens to hundreds of people a meal in a timely fashion.</Text>
          </View>
          <View style={styles.line}></View>
          <View style={{ marginHorizontal: width * 0.05 }}>
            <Text style={styles.plainText}>Inhouse catring available outside catring permitted</Text>
          </View>
          <View style={styles.line}></View>
          <View style={{ marginHorizontal: width * 0.02, marginVertical: width * 0.08 }}>
            <ButtonWithIcon title='Book' press={() => navigation.navigate('/hallDetails')} colors={true} icon={<Image source={require('../../assets/hand.png')} />} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Top,
    backgroundColor: '#fff'
  },
  details: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    marginTop: width * 0.33,
    padding: 3,
    flexDirection: 'row'
  },
  title: {
    color: "#fff",
    fontSize: width * 0.04,
    fontWeight: '600'
  },
  line: {
    borderWidth: 1,
    borderColor: GRAY_COLOR,
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.02
  },
  header: {
    color: GRAY_COLOR,
    fontWeight: '600',
    marginVertical: width * 0.01,
    fontSize: width * 0.035
  },
  text: {
    color: '#000',
    fontWeight: '500',
    marginVertical: width * 0.01,
    fontSize: width * 0.035
  },
  plainText: {
    color: '#000',
    fontSize: width * 0.035

  }

})

export default VenueDetails  