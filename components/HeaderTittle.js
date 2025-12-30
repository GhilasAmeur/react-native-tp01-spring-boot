import { StyleSheet,Text } from "react-native"

export const HeaderTittle = ({text}) =>{
    return(
        <Text style = {styles.header}>{text}</Text>
    )

}

const styles = StyleSheet.create({

        header:{
            marginBottom:10,
            color:'purple',
            fontSize:16,
            fontWeight:'bold'

            
        }
})