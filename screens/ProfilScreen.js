import { ButtonCustom, HeaderTittle, InputCustom } from "../components"
import { ScreenWrapper } from "../utils/ScreenWrapper"
import { Text } from "react-native"

export const ProfilScreen = ({route, navigation}) =>{
    return (
      <ScreenWrapper>
        <HeaderTittle text="Mon profil" />
        <InputCustom placeholder="nom" />
        <InputCustom placeholder="email"/>
        <ButtonCustom text="MODIFIER"/>
        <ButtonCustom text="Supprimer mon compte" secondary />
      </ScreenWrapper>
    );
}