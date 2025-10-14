import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CartItem({ item }) {

  const [quantity, setquantity] = useState(item?.quantity)
  const [total, setTotal] = useState([])


  function addQuantity() {
    setquantity(quantity + 1)
  }


  function decQuantity() {
    if (quantity <= 1) {
      setquantity(1)
    }
    else {
      setquantity(quantity - 1)
    }
  }

  function TotalPrice() {
    console.log(item?.item?.price)

  }


  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item?.item?.title}</Text>
        <Text style={styles.price}>${item?.item?.price * quantity}</Text>
        <View style={styles.actions}>
          {quantity == 1 ? <TouchableOpacity style={styles.qtyButton} onPress={decQuantity} disabled>
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity> : <TouchableOpacity style={styles.qtyButton} onPress={decQuantity}>
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>}
          <Text style={styles.qty}>{quantity}</Text>
          <TouchableOpacity style={styles.qtyButton} onPress={addQuantity}>
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.qtyButton} onPress={TotalPrice(quantity)}>
            <Text style={styles.qtyText}>Total</Text>
          </TouchableOpacity>
          <Text style={styles.qty}>Total :- {item?.item?.price * quantity}</Text> */}
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



