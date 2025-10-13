import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import SearchBar from "../../components/SearchBar";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/product";
import axios from "axios";
import API from "../../utils/api";

export default function Home() {
    const [data, setData] = useState([])
    // Filter products based on search query
    const [searchData, setSearchData] = useState("")

    const getProducts = async () => {
        try {
            console.log("function is running");
            const res = await API.get("product/allProducts");
            setData(res.data.data)
            // Alert.alert("Success", "Product created successfully!");
        } catch (err) {
            console.log(err.message);
            // Alert.alert("Error", err.message);
        }
    };

    const filterSerachData = data.filter((item) =>
        item.title.toLowerCase().includes(searchData.toLowerCase())
    )
    console.log(filterSerachData)
    useEffect(() => {
        getProducts()
    }, [])


    return (
        <View style={styles.container}>
            {/* Search Bar */}
            <SearchBar value={searchData} onChangeText={setSearchData} />

            {/* Header */}
            <Text style={styles.header}>🛍️ Products {data.length}</Text>

            {/* Products Grid */}
            <FlatList
                data={filterSerachData}
                renderItem={({ item }) => <ProductCard product={item} />}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.list}
            />

            {filterSerachData.length === 0 && (
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
