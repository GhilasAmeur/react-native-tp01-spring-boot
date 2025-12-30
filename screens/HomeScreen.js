import { HeaderTittle, ButtonCustom } from "../components"
import { ScreenWrapper } from "../utils/ScreenWrapper"


export const HomeScreen = ({navigation}) =>{
return (
  <ScreenWrapper>
    <HeaderTittle text="CONNEXION / INSCRIPTION" />
    <ButtonCustom
      text="CONNEXION"
      onPress={() => navigation.navigate("Connexion")}
    />
    <ButtonCustom
      text="INSCRIPTION"
      onPress={() => navigation.navigate("Inscription")}
      secondary
    />
  </ScreenWrapper>
);
}