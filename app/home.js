import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🏠 Home Screen</Text>
            <TouchableOpacity style={styles.button} onPress={() => router.push("/product")}>
                <Text style={styles.btnText}>View Products</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push("/cart")}>
                <Text style={styles.btnText}>Go to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push("/profile")}>
                <Text style={styles.btnText}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    title: { fontSize: 24, marginBottom: 20 },
    button: { backgroundColor: "purple", padding: 12, borderRadius: 8, marginTop: 10 },
    btnText: { color: "#fff" },
});
