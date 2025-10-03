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
  ActivityIndicator,
  Image
} from "react-native";
import * as ImagePicker from 'expo-image-picker'


export default function CreateProductForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setloading] = useState(false)
  const [image, setImage] = useState(null)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  const handleSubmit = async () => {
    setloading(true)

    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    formData.append("price", price)
    formData.append("category", category)
    formData.append("image", {
      uri: image,
      type: "image/jpeg",
      name: "image.jpeg",
    })

    try {
      console.log("function is running");
      const res = await axios.post("http://192.168.29.28:8000/product/createProducts", formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }
      });
      console.log(res.data);
      // Alert.alert("Success", "Product created successfully!");
      setloading(false)
    } catch (err) {
      console.log(err);
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

      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}


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
  image: {
    width: 200,
    height: 200,
  },
});


