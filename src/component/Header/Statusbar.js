import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { width } from '../../utils/constent'

const Statusbar = (props) => {
  const Line = () => {
    return (
      <View style={{ borderWidth: 1, borderColor: '#fff', width: '100%' }}></View>
    );
  }
  const data = [{ key: 1, value: true, text: 'Event' }, { key: 2, value: false, text: 'Finalize' },
  { key: 3, value: false, text: 'Payments' }, { key: 4, value: false, text: 'Feedback' }]
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: width * 0.02,marginLeft:width * 0.02 }}>
        {data.length > 0 && data.map((el, i) => (
          < >
            <View key={i}>
              <View style={[styles.circle, { backgroundColor: el.value == true ? '#000' : '#fff' }]}>
                <Text style={[styles.text, { color: el.value == true ? '#fff' : '#000' }]}>{el.key}</Text>
              </View>
              {/* <Text>{el.text}</Text> */}
            </View>
            {i != data.length - 1 &&
              <View style={{ width: "23%" }}>
                <Line />
              </View>
            }
          </>
        ))}
      </View>
      <View style={{ flexDirection: 'row', }}>
        {data.length > 0 && data.map((el, i) => (
          <View style={{width:'28%'}} key={i}>
            <Text style={[styles.text,{color:el.value == true ? '#000' : '#fff'}]}>{el.text}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3D3D3',
    height: width * 0.16,
    // alignItems: 'center',
    paddingHorizontal: width * 0.03
  },
  circle: {
    height: width * 0.06,
    width: width * 0.06,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: width * 0.035,
    fontWeight: 'bold'
  }
})

export default Statusbar