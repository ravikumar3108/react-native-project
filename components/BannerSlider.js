// For bannner slider need to install : npm install react-native-swiper


import { View, Image, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const banners = [
    "https://via.placeholder.com/400x200.png?text=Big+Sale+50%25+Off",
    "https://via.placeholder.com/400x200.png?text=New+Arrivals",
    "https://via.placeholder.com/400x200.png?text=Best+Sellers",
];

export default function BannerSlider() {
    return (
        <View style={styles.container}>
            <Swiper autoplay autoplayTimeout={3} showsPagination dotColor="#ccc" activeDotColor="green">
                {banners.map((banner, index) => (
                    <Image key={index} source={{ uri: banner }} style={styles.image} />
                ))}
            </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: 180, borderRadius: 12, overflow: "hidden", marginVertical: 12 },
    image: { width: width - 32, height: 180, borderRadius: 12, resizeMode: "cover" },
});



