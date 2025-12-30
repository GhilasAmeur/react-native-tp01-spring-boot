import { useState } from "react"
import { TextInput, StyleSheet } from "react-native"

export const InputCustom = ({value, placeholder, onChangeText, type}) =>{

   
    return (
        <TextInput 
        style={styles.input} 
        value={value}
        placeholder={placeholder} 
        keyboardType = {type === "email" ? "email-address" : "default"}
        secureTextEntry = {type === "password" ? true : false }
        onChangeText={onChangeText} />

    )
}

const styles = StyleSheet.create({
    input :{
        marginTop : 15,
        borderWidth : 1,
        width:'100%',
        padding:15,
        borderColor:'lightgray',
        borderRadius:4

    },
    
     
})