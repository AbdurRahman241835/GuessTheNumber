import { Text, StyleSheet } from "react-native";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: "#ddb52f",
    fontSize: 24,
    fontWeight: "300",
    fontFamily: "open-sans",
  },
});

export default InstructionText;
