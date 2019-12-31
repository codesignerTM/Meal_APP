import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultTextComponent = props => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans"
  }
});

export default DefaultTextComponent;
