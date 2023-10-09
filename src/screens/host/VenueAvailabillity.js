import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { GRAY_COLOR, Top, width } from '../../utils/constent'
import Navbar from '../../component/Header/Navbar'
import { useNavigation } from '@react-navigation/native'
import HorizontalCarousel from '../../component/CustomCarousel/HorizontalCarousel'
import { Calendar } from 'react-native-big-calendar'
import CustemButton from '../../component/button/CustemButton'

const VenueAvailabillity = () => {
    const navigation = useNavigation()
    const [date, setDate] = useState(new Date('2023-10-16T16:19:05.749Z'))
    const events = [
        {
            title: 'Meeting',
            start: new Date(2020, 1, 11, 10, 0),
            end: new Date(2020, 1, 11, 10, 30),
        },
        {
            title: 'Coffee break',
            start: new Date(2020, 1, 11, 15, 45),
            end: new Date(2020, 1, 11, 16, 30),
        },
    ]
    const [mode, setMode] = useState('month')
    return (
        <View style={styles.container}>
            {console.log(date)}
            <Navbar title='R. S. Banquet - Hall 1' back={() => navigation.goBack(null)} />
            <ScrollView>
                <HorizontalCarousel />
                <View style={{ marginHorizontal: width * 0.05, marginTop: width * 0.03 }}>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.flexContainer}>
                    <Text onPress={()=> setMode('month')} style={[styles.text, { color: mode == 'month' ? '#fff' : '#000', backgroundColor: mode == 'month' ? '#000' : '#fff' }]}>Month</Text>
                    <Text onPress={()=> setMode('week')} style={[styles.text, { color: mode == 'week' ? '#fff' : '#000', backgroundColor: mode == 'week' ? '#000' : '#fff' }]}>Week</Text>
                    <Text onPress={()=> setMode('day')} style={[styles.text, { color: mode == 'day' ? '#fff' : '#000', backgroundColor: mode == 'day' ? '#000' : '#fff' }]}>Day</Text>
                </View>
                <Calendar
                    events={events}
                    height={width * 1.2}
                    mode={mode}
                    date={date}
                    onChangeDate={(date) => console.log(date)}
                    onPressDateHeader={(date) => setDate(date)}
                />
                <View style={{marginVertical: width * 0.1, marginHorizontal : width * 0.2}}>
                    <CustemButton title='Book' colors={true} press={()=> navigation.navigate('/venueEnquiry')}/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: Top
    },
    line: {
        borderWidth: 1,
        borderColor: GRAY_COLOR,
        // marginHorizontal: width * 0.05,
        marginVertical: width * 0.02
    },
    text: {
        fontSize: width * 0.035,
        fontWeight: '500',
        padding: width * 0.02,
        borderWidth: 1,
        borderColor: '#000',
        width: width * 0.2,
        textAlign: 'center'
    },
    flexContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: width * 0.02
    }
})

export default VenueAvailabillity