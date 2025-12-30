import { Text, TouchableOpacity, StyleSheet} from "react-native"

export const ButtonCustom = ({text, onPress, secondary}) =>{
    return (
      <TouchableOpacity
        style={[
          styles.button,
          secondary ? styles.buttonSecondary : styles.buttonPrimary,
        ]} 
        onPress={onPress}
      >
        <Text style={[styles.textButtonPrimary , secondary ? styles.textButtonSecondary : styles.textButtonPrimary] }>{text}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 25,
    padding: 12,
    width: "100%",
  },

  buttonPrimary: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
    borderColor: "purple",
  },
  buttonSecondary: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "lightgray",
  },
  textButtonPrimary: {
    fontSize:16,
    color: "white",
    fontWeight: "bold",
  },
  textButtonSecondary: {
    color: "purple",
  },
});