import { View, Text, Modal, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { height, width } from '../../utils/constent';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import CustemButton from '../button/CustemButton';


const VenueFliterModel = (props) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                props.onClose()
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.flex}>
                        <Text style={styles.heder}>Filter</Text>
                        <TouchableOpacity onPress={()=> props.onClose()}>
                        <Fontisto name='close-a' size={width * 0.06} color='#c7ccd1' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subcontainer}>
                        <View style={styles.width}>
                            <Ionicons name='partly-sunny' size={width * 0.15} color='#c7ccd1' />
                            <Text style={styles.text}>Open Air</Text>
                        </View>
                        <View style={styles.width}>
                            <MaterialIcons name='business-center' size={width * 0.15} color='#c7ccd1' />
                            <Text style={styles.text}>Business</Text>
                        </View>
                        <View style={styles.width}>
                            <MaterialCommunityIcons name='pool' size={width * 0.15} color='#c7ccd1' />
                            <Text style={styles.text}>Poolside</Text>
                        </View>

                    </View>
                    <View style={styles.subcontainer}>
                        <View style={styles.width}>
                            <FontAwesome5 name='glass-cheers' size={width * 0.15} color='#c7ccd1' />
                            <Text style={styles.text}>Party</Text>
                        </View>
                        <View style={styles.width}>
                            <MaterialIcons name='business-center' size={width * 0.15} color='#c7ccd1' />
                            <Text style={styles.text}>Studio</Text>
                        </View>
                        <View style={styles.width}>
                            <MaterialCommunityIcons name='cards-playing-club' size={width * 0.15} color='#c7ccd1' />
                            <Text style={styles.text}>Club</Text>
                        </View>
                    </View>
                    <View style={styles.subcontainer}>
                        <View style={styles.width}>
                            <MaterialCommunityIcons name='greenhouse' size={width * 0.15} color='#c7ccd1' />
                            <Text style={styles.text}>Farm House</Text>
                        </View>
                        <View style={styles.width}>
                            <MaterialCommunityIcons name='soccer-field' size={width * 0.15} color='#c7ccd1' />
                            <Text style={styles.text}>Plot</Text>
                        </View>
                        <View style={styles.width}>
                            <MaterialIcons name='restaurant' size={width * 0.15} color='#c7ccd1' />
                            <Text style={styles.text}>Hotel</Text>
                        </View>
                    </View>
                    <View style={styles.subcontainer}>
                        <View style={styles.width}>
                            <MaterialIcons name='other-houses' size={width * 0.15} color='#c7ccd1' />
                            <Text style={styles.text}>Private Estate</Text>
                        </View>
                        <View style={styles.width}>
                            <MaterialIcons name='food-bank' size={width * 0.15} color='#c7ccd1' />
                            <Text style={styles.text}>Banquet Hall</Text>
                        </View>
                        <View style={styles.width}>
                            <MaterialIcons name='temple-buddhist' size={width * 0.15} color='#c7ccd1' />
                            <Text style={styles.text}>Historical</Text>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: width * 0.2, marginVertical: width * 0.04 }}>
                        <CustemButton title='Apply' colors={true} press={() => console.log()} />
                    </View>
                </View>
            </View>
        </Modal>


    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height,
        backgroundColor: 'rgba(52, 52, 52, 0.6)'
    },
    modalView: {
        width: width * 0.95,
        backgroundColor: 'white',
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    flex: {
        flexDirection: 'row',
        backgroundColor: '#000',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.04,
        paddingVertical: width * 0.03
    },
    heder: {
        color: '#fff',
        fontSize: width * 0.05,
    },
    subcontainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.04,
        paddingVertical: width * 0.02
    },
    text: {
        color: '#000',
        fontSize: width * 0.04,
        fontWeight: 'bold'
    },
    width: {
        alignItems: "center",
        width: '30%'
    }

});
export default VenueFliterModel