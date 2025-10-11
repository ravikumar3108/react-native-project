import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CartItem({ item }) {
  return (

    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item?.item?.title}</Text>
        <Text style={styles.price}>${item?.item?.price * item?.quantity}</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.qtyButton}>
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qty}>{item?.quantity}</Text>
          <TouchableOpacity style={styles.qtyButton}>
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.removeButton} >
        <Text style={styles.removeText}>❌</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: { width: 70, height: 70, borderRadius: 8, marginRight: 10 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "bold" },
  price: { fontSize: 14, color: "green", marginVertical: 5 },
  actions: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  qtyButton: {
    backgroundColor: "#ddd",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  qtyText: { fontSize: 16, fontWeight: "bold" },
  qty: { marginHorizontal: 10, fontSize: 16 },
  removeButton: { marginLeft: 10 },
  removeText: { fontSize: 18, color: "red" },
});



