import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { height, Top, width } from '../../utils/constent'
import Navbar from '../../component/Header/Navbar'
import { useNavigation } from '@react-navigation/native'
import Statusbar from '../../component/Header/Statusbar'
import CustomInputWhite from '../../component/input/CustomInputWhite'
import Entypo from 'react-native-vector-icons/Entypo'
import CustomRadioButton from '../../component/input/CustomRadioButton'
import CustemButton from '../../component/input/CustemButton'
import CustomDropDown from '../../component/input/CustomDropDown'
const CreateEvent = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Navbar title='Create Event'
                press={() => console.log()}
                back={() => navigation.goBack(null)} />
            <ScrollView>
                <Statusbar />

                <View style={{ marginHorizontal: width * 0.04, marginTop: width * 0.03 }}>
                    <Text style={styles.text}>Event Name</Text>
                    <CustomInputWhite
                        onChangeText={(text) => console.log(text)}
                    />
                </View>
                <View style={{ marginHorizontal: width * 0.04, marginTop: width * 0.03 }}>
                    <Text style={styles.text}>Logo</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '61%' }}>
                            <CustomInputWhite
                                onChangeText={(text) => console.log(text)}
                            />

                        </View>
                        <View style={{ width: '35%', marginLeft: width * 0.035 }}>

                            <CustomInputWhite
                                value="Browse"
                            />
                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: width * 0.04, marginTop: width * 0.03 }}>
                    <Text style={styles.text}>Date From and To</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', width: '50%' }}>
                            <View style={{ width: '82%' }}>
                                <CustomInputWhite
                                    onChangeText={(text) => console.log(text)}
                                />

                            </View>
                            <Entypo name='calendar' color='#fff' size={width * 0.07} />
                        </View>
                        <View style={{ marginLeft: width * 0.01, flexDirection: 'row', width: '50%' }}>
                            <View style={{ width: '82%' }}>
                                <CustomInputWhite

                                />
                            </View>
                            <Entypo name='calendar' color='#fff' size={width * 0.07} />

                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: width * 0.04, marginTop: width * 0.03 }}>
                    <Text style={styles.text}>Time From and To</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', width: '50%' }}>
                            <View style={{ width: '82%' }}>
                                <CustomInputWhite
                                    onChangeText={(text) => console.log(text)}
                                />

                            </View>
                            <Entypo name='calendar' color='#fff' size={width * 0.07} />
                        </View>
                        <View style={{ marginLeft: width * 0.01, flexDirection: 'row', width: '50%' }}>
                            <View style={{ width: '82%' }}>
                                <CustomInputWhite

                                />
                            </View>
                            <Entypo name='calendar' color='#fff' size={width * 0.07} />

                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: width * 0.04, marginTop: width * 0.03, flexDirection: 'row' }}>
                    <View style={{ width: width * 0.45 }}>
                        <Text style={styles.text}>Number of Participant/ Gust</Text>
                        <CustomInputWhite
                            onChangeText={(text) => console.log(text)}
                        />

                    </View>
                    <View style={{ width: width * 0.45, marginLeft: width * 0.02 }}>
                        <Text style={styles.text}>Budget</Text>
                        <CustomInputWhite
                        />
                    </View>
                </View>
                <View style={{ marginHorizontal: width * 0.04, marginTop: width * 0.03 }}>
                    <Text style={styles.text}>Currency</Text>
                    <CustomDropDown
                        onChange={(text) => console.log(text)}
                        data={[]}
                    />
                </View>
                <View style={{ marginHorizontal: width * 0.04, marginTop: width * 0.03 }}>
                    <Text style={styles.text}>Dresscode</Text>
                    <CustomInputWhite
                        onChangeText={(text) => console.log(text)}
                    />
                </View>
                <View style={{ marginHorizontal: width * 0.04, marginTop: width * 0.06, flexDirection: 'row', }}>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.text}>Dresscode For</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '50%' }}>
                        <View style={{ width: '50%' }}>
                            <CustomRadioButton title='All' status={true} press={()=>console.log()}/>
                        </View>
                        <View>
                            <CustomRadioButton title='Guest' press={()=>console.log()}/>
                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: width * 0.04, marginTop: width * 0.03 }}>
                    <Text style={styles.text}>City</Text>
                    <CustomDropDown
                        onChange={(item) => console.log(item)}
                        data={[]}
                    />
                </View>
                <View style={{ marginHorizontal: width * 0.04, marginTop: width * 0.03 }}>
                    <Text style={styles.text}>Location</Text>
                    <CustomDropDown
                        onChange={(item) => console.log(item)}
                        data={[]}
                    />
                </View>
                <View style={{ marginHorizontal: width * 0.3, marginVertical: width * 0.15 }}>
                    <CustemButton title='Save' press={()=> navigation.navigate('/venue')} />
                </View>


            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#000',
        marginTop: Top,
        height: height,
        width: width
    },
    text: {
        color: '#fff',
        fontSize: width * 0.035,
        marginBottom: width * 0.03
    }
})

export default CreateEvent