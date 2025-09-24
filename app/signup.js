import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";
import { validateEmail, validatePassword } from "../utils/validators";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = () => {
    if (!name) {
      Alert.alert("Name Required", "Please enter your name");
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email");
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert("Weak Password", "Password must be at least 6 characters");
      return;
    }
    Alert.alert("Signup Success", `Account created for ${name}`);
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Signup</Text>
      <InputField placeholder="Name" value={name} onChangeText={setName} />
      <InputField placeholder="Email" value={email} onChangeText={setEmail} />
      <InputField placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <CustomButton title="Signup" onPress={handleSignup} bgColor="green" />
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 30, textAlign: "center" },
  link: { marginTop: 20, color: "blue", textAlign: "center" },
});
