import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("ComponentScreen")}
        title="Go to demo components"
      />
      <Text style={styles.text}>Touchable</Text>
      <Button title="Go to Lists" onPress={() => navigation.navigate("Lists")}></Button>
      <Button title="Go to Images" onPress={() => navigation.navigate("Image")}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
