import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import CartItem from "../../components/CartItem";

const dummyCart = [
  {
    id: "1",
    name: "Nike Shoes",
    price: 120,
    image: "https://via.placeholder.com/200x150.png?text=Nike+Shoes",
    quantity: 1,
  },
  {
    id: "2",
    name: "Adidas T-shirt",
    price: 45,
    image: "https://via.placeholder.com/200x150.png?text=Adidas+T-shirt",
    quantity: 2,
  },
];

export default function Cart() {
  const total = dummyCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🛒 Your Cart</Text>
      {dummyCart.length > 0 ? (
        <>
          <FlatList
            data={dummyCart}
            renderItem={({ item }) => <CartItem item={item} />}
            keyExtractor={(item) => item.id}
          />
          <View style={styles.footer}>
            <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
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
