import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import CartItem from "../../components/CartItem";
import { useEffect, useState } from "react";
import API from "../../utils/api";


export default function Cart() {
  const [cartData, setCartData] = useState([])

  const getCartProducts = async () => {
    const addData = await API.get(`productCart/getCart`).then((res) => {
      console.log(res.data.message)
      setCartData(res.data.message)
    })
  }

  useEffect(() => {
    getCartProducts()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🛒 Your Cart</Text>
      {cartData.length > 0 ? (
        <>
          <FlatList
            data={cartData}
            renderItem={({ item }) => <CartItem item={item} />}
            keyExtractor={(item) => item.id}
          />
          {/* <View style={styles.footer}>
            <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View> */}
        </>
      ) : (
        <Text style={styles.empty}>Your cart is empty 🛍️</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#f8f8f8" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 15, textAlign: "center" },
  footer: { padding: 15, backgroundColor: "#fff", borderRadius: 10, marginTop: 10 },
  total: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  checkoutButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  checkoutText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  empty: { fontSize: 18, color: "#555", textAlign: "center", marginTop: 50 },
});
