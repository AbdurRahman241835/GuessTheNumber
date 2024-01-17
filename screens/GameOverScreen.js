import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <View>
        <Text style={styles.summeryText}>
          Your Phone needed 
          <Text style={styles.highlight}> {roundsNumber} </Text>
          rounds to guess the number
          <Text style={styles.highlight}> {userNumber}</Text>
        </Text>
      </View>

      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "#3b021f",
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summeryText: {
    fontSize: 24,
    fontFamily: "open-sans",
    fontWeight: "200",
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    fontSize: 25,
    color: "#72063c",
  },
});

export default GameOverScreen;
