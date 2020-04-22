import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetail from "./../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Image Screen</Text>
      <ImageDetail title="RN Logo" imageLink="https://reactnative.dev/img/tiny_logo.png"/>
      <ImageDetail title="Expo Logo" imageLink="https://lh3.googleusercontent.com/Bn-9LhsZ1P0z-ob_4pwvTF3aucymAzk6uqG7QIPkM7oo_ADkF1TJu_zJdxJswpkfU3Y"/>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});

export default ImageScreen;
