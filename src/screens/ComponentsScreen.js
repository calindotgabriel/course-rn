import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Components Screen Demo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});

export default ComponentsScreen;

