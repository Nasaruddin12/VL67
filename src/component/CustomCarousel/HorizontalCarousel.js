import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { width } from '../../utils/constent';
import CustomRating from '../rating/CustomRating';

const HorizontalCarousel = (props) => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
    var imageUrls = [
        'https://www.nobroker.in/blog/wp-content/uploads/2023/08/1-Sinhagad-Fort.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMH0yPMFcBEoBj-VnSk2BnHneQ_66ZpTGGDv46n1uxLvOPykawBZ7t0ZprLGtpcDwGVUU&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMH0yPMFcBEoBj-VnSk2BnHneQ_66ZpTGGDv46n1uxLvOPykawBZ7t0ZprLGtpcDwGVUU&usqp=CAU',
    ];


    const _renderItem = ({ item, index }) => {
        return (
            <View>
                {/* <TouchableOpacity onPress={() => props.onPress()}> */}
                <ImageBackground source={{ uri: item }} style={styles.slide}>
                    <View style={{
                        backgroundColor: 'rgba(52, 52, 52, 0.4)', flexDirection: 'row',
                        top: width * 0.95, height: width * 0.15, alignItems:'center'
                    }}>
                        <View style={{ width: '50%', borderRightWidth: 1, borderColor: '#fff', marginLeft: 4}}>
                            <CustomRating />
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.text}>₹  4000/ hour</Text>
                        </View>
                        <View>

                        </View>
                    </View>
                </ImageBackground>
                {/* </TouchableOpacity> */}
            </View>
        );
    }
    return (
        <View>
            <Carousel
                layout={'default'}
                // layoutCardOffset={9}
                ref={isCarousel}
                data={imageUrls}
                renderItem={(item, index) => <_renderItem item={item.item} index={index} />}
                sliderWidth={width}
                itemWidth={width}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
            />
            <Pagination
                dotsLength={imageUrls.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 10,
                    marginHorizontal: -3,
                    backgroundColor: '#000',
                    borderWidth: 1,
                }}
                inactiveDotStyle={{
                    backgroundColor: '#fff',
                    width: 12,
                    height: 12,
                    borderRadius: 10,
                    marginHorizontal: -3,
                    borderWidth: 1,
                }}
                inactiveDotOpacity={1}
                inactiveDotScale={1}
                tappableDots={true}
                containerStyle={{ position: 'absolute', alignSelf: 'center' }}
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
        borderColor: '#c7ccd1',
        borderWidth: 2,
        height: width * 1.1
    },
    text: {
        color: '#fff',
        fontSize: width * 0.04,
        fontWeight: '600',
        marginLeft: width * 0.04,
    },
    row: {
        flexDirection: 'row',
        alignItems: "center"
    }
})

export default HorizontalCarousel