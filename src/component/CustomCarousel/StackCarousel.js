import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { width } from '../../utils/constent';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const StackCarousel = (props) => {
    var imageUrls = [
        'https://www.nobroker.in/blog/wp-content/uploads/2023/08/1-Sinhagad-Fort.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMH0yPMFcBEoBj-VnSk2BnHneQ_66ZpTGGDv46n1uxLvOPykawBZ7t0ZprLGtpcDwGVUU&usqp=CAU',
    ];

    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)

    const viewCount = 8
    const _renderItem = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => props.onPress()}>
                    <ImageBackground source={{ uri: item }} style={styles.slide}>
                        <View style={{
                            backgroundColor: 'rgba(52, 52, 52, 0.8)', flexDirection: 'row',
                            top: width * 1,paddingBottom: width * 0.03
                        }}>
                            <View style={{ width: '50%', }}>
                                <Text style={styles.text}>Sinhagad</Text>
                                <View style={[styles.row]}>
                                    <Entypo name='location' size={width * 0.055} color='#fff' style={styles.text} />
                                    <View style={{ width: '90%' }}>
                                        <Text style={styles.text}>Pune Maharashtra</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: '50%' }}>
                                <View style={styles.row}>
                                    <FontAwesome5 name='users' size={width * 0.055} color='#fff' style={styles.text} />
                                    <Text style={styles.text}>Capacity</Text>
                                </View>
                                <Text style={styles.text}>Min 300-Max 1000 </Text>
                            </View>
                            <View>

                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <View>
            <Carousel
                layout={'tinder'}
                loop={true}
                layoutCardOffset={15}
                ref={isCarousel}
                data={imageUrls}
                renderItem={(item, index) => <_renderItem item={item.item} index={index} />}
                sliderWidth={width}
                itemWidth={width}
                slideStyle={{height: width * 1.3}}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
            />

        </View>
    
    )
}

const styles = StyleSheet.create({
    image: {
        width: width,
        height: width * 1.5,
        marginBottom: -30, // Adjust the spacing between stacked images
    },
    slide: {
        marginHorizontal: width * 0.05,
        height: width * 1.2,
        // borderColor: '#c7ccd1',
        // borderWidth: 2,
        // height: width * 1.3
    },
    text: {
        color: '#fff',
        fontSize: width * 0.04,
        fontWeight: '700',
        marginLeft: width * 0.02,
        marginTop: width * 0.02,
    },
    row: {
        flexDirection: 'row',
        alignItems: "center"
    }
})

export default StackCarousel