import { StyleSheet, Text } from "react-native";

export const FooterTittle = ({ text, action, onPress }) => {
  return (
    <Text style={styles.footer} onPress={onPress}>
      {action} <Text style={styles.action}>{text}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 15,
    fontSize: 14,
  },
  action: {
    fontSize: 16,
    color: "purple",
    fontWeight: "bold",
  },
});
