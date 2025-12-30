import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../screens/HomeScreen"
import { ConnexionScrenn } from "../screens/ConnexionScreen";
import { InscriptionScreen } from "../screens/InscriptionScreen";
import { ForgetPasswordScreen } from "../screens/ForgetPasswordScreen";
import { IsConnectedScreen } from "../screens/IsConnectedScreen";


const Stack = createNativeStackNavigator()
export default function StackNavigation (){

   
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Connexion"
            component={ConnexionScrenn}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Inscription"
            component={InscriptionScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPasswordScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="IsConnected"
            component={IsConnectedScreen}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
