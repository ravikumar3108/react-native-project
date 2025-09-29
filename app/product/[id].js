import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { products } from "../../data/product";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>
        This is a detailed description of {product.name}. It's a high-quality product that you will love!
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('cart')}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>⬅ Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  name: { fontSize: 22, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  price: { fontSize: 18, color: "green", marginBottom: 15 },
  description: { fontSize: 14, color: "#555", textAlign: "center", marginBottom: 20 },
  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  backButton: { marginTop: 10 },
  backText: { color: "blue", fontSize: 16 },
  error: { fontSize: 18, color: "red", textAlign: "center", marginTop: 50 },
});
