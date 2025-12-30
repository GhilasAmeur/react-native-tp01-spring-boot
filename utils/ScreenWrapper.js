import { View, StyleSheet, Text} from "react-native"

export const ScreenWrapper = ({children}) =>{
    return (
      <View style={styles.container}>
      {children}
      </View>
    );

}
const styles = StyleSheet.create({
    container : {
        flex:1, 
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:'12.5%',
        backgroundColor:'white'
    }
})