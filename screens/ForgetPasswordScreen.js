
import { ScreenWrapper } from "../utils/ScreenWrapper";
import { HeaderTittle, InputCustom, ButtonCustom, FooterTittle} from "../components";
import { userService } from "../services/userService";
import { useState } from "react";
export const ForgetPasswordScreen = ({navigation, route}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { updatePassword } = userService();

  const handleUpdatePassword = async () => {
    if(!email || !password){
      alert("Veuillez remplir tous les chmamps.")
      return
    }
   await updatePassword(email, password)
  }

  return (
    <ScreenWrapper>
      <HeaderTittle text="Mot de passe oublié" />
      <InputCustom placeholder="Email" value={email} type = "email" onChangeText={setEmail} />
      <InputCustom placeholder="Mot de passe" type="password" value= {password} onChangeText={setPassword}/>
      <ButtonCustom text="MODIFIER" onPress={handleUpdatePassword}/>
      <FooterTittle
        text="Se Connecter"
        onPress={() => navigation.navigate("Connexion")}
      />
    </ScreenWrapper>
  );
};
