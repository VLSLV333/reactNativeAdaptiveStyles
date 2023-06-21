import { Text, StyleSheet, Platform } from "react-native";

export default function Title({ txt }) {
  return <Text style={styles.title}>{txt}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === 'android' ? 0 : 2,
    // borderWidth: Platform.select({ android: 2, ios: 0 }),
    borderWidth: 0,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
