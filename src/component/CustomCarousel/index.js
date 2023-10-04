import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { width } from '../../utils/constent';
const CustomCarousel = (props) => {
    var imageUrls = [
        'https://www.nobroker.in/blog/wp-content/uploads/2023/08/1-Sinhagad-Fort.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMH0yPMFcBEoBj-VnSk2BnHneQ_66ZpTGGDv46n1uxLvOPykawBZ7t0ZprLGtpcDwGVUU&usqp=CAU',
        'https://example.com/image3.jpg'
    ];
    const [snapDirection, setSnapDirection] = React.useState("left");
    const isCarousel = React.useRef(null)

    const viewCount = 5;
    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                {/* {console.log(item)} */}
                {/* <Text style={styles.title}>{item.title}</Text> */}
                <Image source={{ uri: item }} style={{ width: width * 0.8, height: width }} />
            </View>
        );
    }
    return (
        // <View>
        //     <Carousel
        //         loop={props?.loop}
        //         width={width}
        //         height={width * 1.5}
        //         autoPlay={props?.autoPlay}
        //         data={imageUrls.length > 0 ? imageUrls : []}
        //         mode='vertical-stack'
        //         modeConfig={{
        //             snapDirection,
        //             stackInterval: 8,
        //         }}
        //         // customConfig={() => ({ type: "positive", viewCount })}
        //         scrollAnimationDuration={1000}
        //         onSnapToItem={(index) => console.log('current index:', index)}
        //         renderItem={({ item, index }) => (
        //             <View
        //                 style={{
        //                     // flex: 1,
        //                     // borderWidth: 1,
        //                     justifyContent: 'center',
        //                 }}
        //             >
        //                 {console.log(item)}
        //                 <Image
        //                     key={item.id}
        //                     source={{ uri: item }}
        //                     style={[styles.image, { zIndex: -index }]}
        //                 />
        //             </View>
        //         )}
        //     />
        // </View>
        <Carousel
            ref={isCarousel}
            layout={'stack'}
            layoutCardOffset={`18`}
            data={imageUrls}
            renderItem={(item, index) => <_renderItem item={item.item} index={index}/>}
            sliderWidth={width * 0.7}
            itemWidth={width}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: width,
        height: width * 1.5,
        marginBottom: -30, // Adjust the spacing between stacked images
    },
})

export default CustomCarousel