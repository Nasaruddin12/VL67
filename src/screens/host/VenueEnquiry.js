import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { BGTRASPARENT, GRAY_COLOR, Top, width } from '../../utils/constent'
import Navbar from '../../component/Header/Navbar'
import { useNavigation } from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomDropDown from '../../component/input/CustomDropDown'
import CustomInputWhite from '../../component/input/CustomInputWhite'
import CustomCheckBox from '../../component/input/CustomCheckBox'
import CustemButton from '../../component/button/CustemButton'

const VenueEnquiry = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Navbar title='Venue Enquiry' back={() => navigation.goBack(null)} />
            <ScrollView>
                <ImageBackground source={require('../../assets/hall.jpeg')} style={{ width: width, height: width * 0.7 }}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>R. S. Banquet Hall - 1</Text>
                        <Text style={styles.headerText}><Entypo name='location' size={width * 0.045} color='#fff' />  Pune, Maharashtra</Text>
                    </View>
                </ImageBackground>
                <View style={{ marginHorizontal: width * 0.05 }}>
                    <View style={styles.inputs}>
                        <CustomDropDown
                            onChange={(text) => console.log(text)}
                            placeholder='Event Type'
                            data={[]}
                        />
                    </View>
                    <View style={styles.inputs}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row', width: '50%' }}>
                                <View style={{ width: '82%' }}>
                                    <CustomInputWhite
                                        placeholder='Date From'
                                        onChangeText={(text) => console.log(text)}
                                    />

                                </View>
                                <Entypo name='calendar' color='#000' size={width * 0.07} />
                            </View>
                            <View style={{ marginLeft: width * 0.01, flexDirection: 'row', width: '50%' }}>
                                <View style={{ width: '82%' }}>
                                    <CustomInputWhite
                                        placeholder='Date To'
                                        onChangeText={(text) => console.log(text)}
                                    />
                                </View>
                                <Entypo name='calendar' color='#000' size={width * 0.07} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.inputs}>
                        <CustomCheckBox value={true} title='My dates are flexible' />
                    </View>
                    <View style={styles.inputs}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row', width: '50%' }}>
                                <View style={{ width: '82%' }}>
                                    <CustomInputWhite
                                        placeholder='Time From'
                                        onChangeText={(text) => console.log(text)}
                                    />

                                </View>
                                <Ionicons name='time-outline' color='#000' size={width * 0.07} />
                            </View>
                            <View style={{ marginLeft: width * 0.01, flexDirection: 'row', width: '50%' }}>
                                <View style={{ width: '82%' }}>
                                    <CustomInputWhite
                                        placeholder='Time To'
                                        onChangeText={(text) => console.log(text)}
                                    />
                                </View>
                                <Ionicons name='time-outline' color='#000' size={width * 0.07} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.inputs}>
                        <CustomCheckBox value={false} title='My time are flexible' />
                    </View>
                    <View style={[styles.inputs, { flexDirection: 'row' }]}>
                        <View style={{ width: width * 0.35 }}>
                            <CustomInputWhite
                                placeholder='Number of People'
                                onChangeText={(text) => console.log(text)}
                            />
                        </View>
                        <View style={{ width: width * 0.34, marginLeft: width * 0.02 }}>
                            <CustomInputWhite
                                placeholder='Budget'
                                onChangeText={(text) => console.log(text)}
                            />
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.text}>/ Person</Text>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={[styles.inputs, { flexDirection: 'row' }]}>
                        <View style={[, { width: '50%' }]}>
                            <View style={styles.inputs}>
                                <CustomCheckBox value={true} title='Open Air' />
                            </View>
                            <View style={styles.inputs}>
                                <CustomCheckBox value={true} title='Car Parking' />
                            </View>
                            <View style={styles.inputs}>
                                <CustomCheckBox value={false} title='Dj' />
                            </View>
                            <View style={styles.inputs}>
                                <CustomCheckBox value={false} title='Alcohol' />
                            </View>
                        </View>
                        <View style={{ width: '50%' }}>
                            <View style={styles.inputs}>
                                <CustomCheckBox value={true} title='Food' />
                            </View>
                            <View style={styles.inputs}>
                                <CustomCheckBox value={false} title='AC' />
                            </View>
                            <View style={styles.inputs}>
                                <CustomCheckBox value={false} title='Elevater' />
                            </View>
                            <View style={styles.inputs}>
                                <CustomCheckBox value={false} title='Stage' />
                            </View>
                        </View>
                    </View>
                    <View style={{marginVertical:width * 0.15, marginHorizontal: width * 0.2}}>
                        <CustemButton title='Send' colors={true} press={()=> console.log()}/>
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
        backgroundColor: '#fff',
    },
    headerContainer: {
        backgroundColor: BGTRASPARENT,
        padding: width * 0.02,
        bottom: 0,
        position: 'absolute',
        width: '100%'
    },
    headerText: {
        color: '#fff',
        fontSize: width * 0.04,
        fontWeight: '500',
        marginTop: width * 0.02
    },
    inputs: {
        marginTop: width * 0.05
    },
    text: {
        marginLeft: width * 0.03,
        fontSize: width * 0.035,
        color: '#000',
        fontWeight: '500'
    },
    line: {
        borderWidth: 1,
        borderColor: GRAY_COLOR,
        marginVertical: width * 0.05
    },
})

export default VenueEnquiry