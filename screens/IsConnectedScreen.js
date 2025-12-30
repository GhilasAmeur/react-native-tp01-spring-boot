import { Text } from "react-native"
import { ButtonCustom, HeaderTittle } from "../components"
import { ScreenWrapper } from "../utils/ScreenWrapper"
export const IsConnectedScreen = ({navigation, route}) =>{

  const {user} = route.params
    return (
      <ScreenWrapper>
        <HeaderTittle text="Vous êtes connecté" />
        <Text>
          Bienvenue {user.nom.toUpperCase()} sur note application de connexion inscription.
        </Text>
        <ButtonCustom text="DÉCONNEXION" secondary 
        onPress={() =>navigation.navigate("Connexion")}/>
      </ScreenWrapper>
    );
}