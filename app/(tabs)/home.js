import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import SearchBar from "../../components/SearchBar";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/product";
import axios from "axios";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState([])
    console.log(data.length)
    // Filter products based on search query
    const filteredProducts = products.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getProducts = async () => {
        try {
            console.log("function is running");
            const res = await axios.get("http://192.168.29.28:8000/product/allProducts");
            setData(res.data.data)
            // Alert.alert("Success", "Product created successfully!");
        } catch (err) {
            console.log(err.message);
            // Alert.alert("Error", err.message);
        }

    };

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <View style={styles.container}>
            {/* Search Bar */}
            <SearchBar value={searchQuery} onChangeText={setSearchQuery} />

            {/* Header */}
            <Text style={styles.header}>🛍️ Products {data.length}</Text>

            {/* Products Grid */}
            <FlatList
                data={data}
                renderItem={({ item }) => <ProductCard product={item} />}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.list}
            />

            {filteredProducts.length === 0 && (
                <Text style={styles.noData}>No products found 😢</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", padding: 10 },
    header: { fontSize: 22, fontWeight: "bold", marginVertical: 10 },
    list: { paddingBottom: 80 },
    noData: { textAlign: "center", marginTop: 20, fontSize: 16, color: "#888" },
});
