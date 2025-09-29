import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Alert,
  TextInput,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";



export default function CreateProductForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setloading] = useState(false)


  const handleSubmit = async () => {
    setloading(true)
    try {
      console.log("function is running");
      const res = await axios.post("http://192.168.29.75:8000/product/createProducts", {
        title,
        description,
        price,
        category,
      });
      console.log(res.data);
      // Alert.alert("Success", "Product created successfully!");
      setloading(false)
    } catch (err) {
      console.log(err.message);
      // Alert.alert("Error", err.message);
      setloading(false)
    }

  };



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Create Product</Text>

      <TextInput
        style={styles.input}
        placeholder="Product Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Product Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      {/* <TouchableOpacity onPress={handleSubmit}>
        <Text >Submit</Text>
      </TouchableOpacity> */}
      {loading ? <ActivityIndicator /> : <Button title="Submit Product" onPress={handleSubmit} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
});


