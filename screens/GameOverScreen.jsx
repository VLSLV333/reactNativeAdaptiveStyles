import {
  View,
  StyleSheet,
  Image,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";

import Title from "../components/UI/Title";

import PrimaryButton from "../components/UI/PrimaryButton";

import Colors from "../constants/colors";

export default function GameOverScreen({ reload, rounds, userNumber }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 100;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    borderWidth: 3,
    borderColor: Colors.startGameBG,
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.rootContainer}>
        <Title txt={"Game Over!"} />
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/success.png")}
            style={[styles.image, imageStyle]}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.roundsNumber}>{rounds.length}</Text> rounds to
          guess the number
          <Text style={styles.winNumber}> {userNumber}</Text>.
        </Text>
        <PrimaryButton btnText={"Start New Game"} onPress={() => reload()} />
      </View>
    </ScrollView>
  );
}

// const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    overflow: "hidden",
    // width: width < 380 ? 150 : 300,
    // height: width < 380 ? 150 : 300,
    // borderRadius: width < 380 ? 150 : 75,
    // borderWidth: 3,
    // borderColor: Colors.startGameBG,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highLightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  roundsNumber: {
    color: Colors.primary500,
  },
  winNumber: {
    color: Colors.yellowAccent,
  },
});
