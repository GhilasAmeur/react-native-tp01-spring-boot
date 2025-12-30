import { ScreenWrapper } from "../utils/ScreenWrapper"
import { ButtonCustom, FooterTittle, HeaderTittle, InputCustom } from "../components"
import { useState } from "react"
import { userService } from "../services/userService"
export const InscriptionScreen = ({navigation, route}) =>{

  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {inscription} = userService()

  const handleInscription = async() =>{
   
    await inscription(nom, email, password)
    setNom("")
    setEmail("")
    setPassword("") 
  }
    return (
      <ScreenWrapper>
        <HeaderTittle text="Inscription" />
        <InputCustom placeholder="Nom" value={nom} onChangeText={setNom}/>
        <InputCustom placeholder="Email" value={email} onChangeText={setEmail} type="email"/>
        <InputCustom placeholder="Mot de passe" value={password} onChangeText={setPassword} type="password"/>
        <ButtonCustom text="INSCRIPTION" onPress={handleInscription}/>
        <FooterTittle
          action="Déja inscrit ?"
          text="Connectez vous"
          onPress={() => navigation.navigate("Connexion")}
        />
      </ScreenWrapper>
    );
}