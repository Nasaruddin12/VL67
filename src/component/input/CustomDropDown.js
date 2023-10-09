import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { width } from '../../utils/constent';

const CustomDropDown = (props) => {

    return (
        <View style={styles.container}>
            <Dropdown
                style={[styles.dropdown,]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={props?.data}
                search={props?.search}
                maxHeight={300}
                labelField={props?.label}
                valueField={props?.value}
                placeholder={props.placeholder}
                searchPlaceholder="Search..."
                value={props?.value}
                onFocus={() => props?.onFocus()}
                onBlur={() => props?.onBlur()}
                onChange={item => {
                    props?.onChange(item)
                }}
                renderRightIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color={'black'}
                        name={props?.isFocus ? 'caretup' : "caretdown"}
                        size={width * 0.035}
                    />
                )}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        // padding: 16,
    },
    dropdown: {
        height: width * 0.09,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 1,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default CustomDropDown