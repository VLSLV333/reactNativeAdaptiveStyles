import { StyleSheet, View, Text, useWindowDimensions, Dimensions } from "react-native";

import Colors from "../../constants/colors";

export default function NumberContainer({ txt }) {
  // const {height, width, scale, fontScale} = useWindowDimensions();
  
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{txt}</Text>
    </View>
  );
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.yellowAccent,
    padding: width < 380 ? 12 : 24,
    margin: width < 380 ? 12 : 24,
    borderRadius: 7,
    alignContent: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.yellowAccent,
    fontSize: width < 380 ? 28 : 36,
    // fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'open-sans-bold'
  },
});
