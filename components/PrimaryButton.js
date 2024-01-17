import { Text, View, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOutercontainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnercontainer, styles.pressed]
            : styles.buttonInnercontainer
        }
        onPress={onPress}
        android_ripple={{ color: "#c69bb1" }}
      >
        <Text style={styles.buttontext}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOutercontainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnercontainer: {
    backgroundColor: "#8e3762",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
  },
  buttontext: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 1,
  },
});

export default PrimaryButton;
