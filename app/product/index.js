import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function ProductList() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Product List</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/product/1")}>
        <Text style={styles.btnText}>Go to Product 1</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
  button: { backgroundColor: "orange", padding: 12, borderRadius: 8 },
  btnText: { color: "#fff" },
});
