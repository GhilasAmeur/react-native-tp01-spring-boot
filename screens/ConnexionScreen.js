import { useState } from "react";
import { HeaderTittle, ButtonCustom, FooterTittle,InputCustom } from "../components";
import { userService } from "../services/userService";
import { ScreenWrapper } from "../utils/ScreenWrapper"


export const ConnexionScrenn = ({navigation, route}) =>{

  const {checkEmail, checkPassword, connexion} = userService()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
const handleConnexion = async () =>{

  const user  = await connexion(email, password)
  if(!user) return
  navigation.navigate("IsConnected", {user})

}

    return (
      <ScreenWrapper>
        <HeaderTittle text="Connexion" />
        <InputCustom placeholder="Email" type="email" onChangeText={setEmail} value={email}/>
        <InputCustom placeholder="Mot de passe" type="password" value={password} onChangeText={setPassword} />
        <ButtonCustom
          text="CONNEXION"
          onPress={handleConnexion}
        />
        <FooterTittle
          text="S'inscrire"
          onPress={() => navigation.navigate("Inscription")}
        />
        <FooterTittle
          text="Mot de passe oublié ?"
          onPress={() => navigation.navigate("ForgetPassword")}
        />
      </ScreenWrapper>
    );
}