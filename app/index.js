import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";
import axios from "axios";
import { validateEmail, validatePassword } from "../utils/validators";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

 


  const handleLogin = async () => {

    // Ipv4 address : - 192.168.29.98

    const data = await axios.post("http://192.168.29.98:8080/user/login", { email, password }).then((res) => {
      console.log(res.data)
      // if(res.data.status){
      //   alert("succesfulll")
      // }
      // else{
      //   alert("signup errro")
      // }

    })
  }

  
  // const handleLogin = async () => {
  //   // Email validation
  //   // if (!validateEmail(email)) {
  //   //   Alert.alert("Invalid Email", "Please enter a valid email");
  //   //   return;
  //   // }

  //   // // Password validation
  //   // if (!validatePassword(password)) {
  //   //   Alert.alert("Weak Password", "Password must be at least 6 characters");
  //   //   return;
  //   // }

  //   try {
  //     // Backend login request
  //     const res = await axios.post("http://192.168.29.98:8080/user/login", {
  //       email,
  //       password,
  //     });
  //     if (res.data.success) {
  //       Alert.alert("Login Success", `Welcome ${email}`);
  //       router.push("/home");
  //     } else {
  //       Alert.alert("Login Failed", res.data.message || "Invalid credentials");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     Alert.alert("Login Failed", "Something went wrong");
  //   }
  // };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔑 Login</Text>
      <InputField placeholder="Email" value={email} onChangeText={setEmail} />
      <InputField placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <CustomButton title="Login" onPress={handleLogin} bgColor="blue" />
      <TouchableOpacity onPress={() => router.push("/signup")}>
        <Text style={styles.link}>Don’t have an account? Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 30, textAlign: "center" },
  link: { marginTop: 20, color: "blue", textAlign: "center" },
});
