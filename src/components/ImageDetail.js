import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = ({title, imageLink}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Image style={styles.logo} source={{url: imageLink}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50
  }
});

export default ImageDetail;
