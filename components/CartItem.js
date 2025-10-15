import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import API from "../utils/api"

export default function CartItem({ item, getCartProducts, cartData }) {

  const [quantity, setquantity] = useState(item?.quantity)
  const [cartItems, setCartItems] = useState(item)
  console.log(cartData)
  useEffect(() => {
    getCartProducts()
  }, [cartItems])

  const UpdateQuantity = async (quantity, id) => {
    const updateCat = await API.post(`/productCart/quantity/${id}`, { quantity: quantity }).then((res) => {
      setCartItems({ ...cartItems, quantity: res.data.quantity })
      setquantity(res.data.quantity)
    })
  }


    const Carttotal = cartData.reduce((total, item) => {
     return total + parseInt(item?.item?.price) * item?.quantity
    }, 0)
    console.log(Carttotal)


  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item?.item?.title}</Text>
        <Text style={styles.price}>${item?.item?.price * quantity}</Text>
        <View style={styles.actions}>
          {quantity == 1 ? <TouchableOpacity style={styles.qtyButton} onPress={() => UpdateQuantity(quantity - 1, item._id)} disabled>
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity> : <TouchableOpacity style={styles.qtyButton} onPress={() => UpdateQuantity(quantity - 1, item._id)}>
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>}
          <Text style={styles.qty}>{cartItems.quantity}</Text>
          <TouchableOpacity style={styles.qtyButton} onPress={() => UpdateQuantity(quantity + 1, item._id)}>
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.removeButton} >
        <Text style={styles.removeText}>❌</Text>
      </TouchableOpacity>
          <Text style={styles.qty}>Total :- {Carttotal}</Text>
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



