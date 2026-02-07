import { useRef, useState } from "react";
import { ButtonCustom, HeaderTittle, InputCustom } from "../components"
import { ScreenWrapper } from "../utils/ScreenWrapper"
import { userService } from "../services/userService";
import { CameraView, useCameraPermissions } from "expo-camera";
import { View, Image } from "react-native";


export const ProfilScreen = ({route, navigation}) =>{

const {user} = route.params

//console.log("USER:", user);
//console.log("ID:", user.id);


    const[nom, setNom] = useState(user.nom)
    const [email, setEmail] = useState(user.email)
    const [permission, requestPermission] = useCameraPermissions()
    const [showCamera, setShowCamera] = useState(false); 
    const [type, setType] = useState("back")
    const cameraRef = useRef(null)
    const [photo, setPhoto] = useState(null)
    const id = user.id

    const {updateProfile, deleteProfile} = userService()

    const handleUpdate = async () =>{
//ici j'ai un souci le alert s'affiche quand meme donc je fait try catch

      await  updateProfile(id,nom, email)
     
    }

    const deleteYourProfile = async () => {

      await deleteProfile(id)

    }

// État pour afficher la vue caméra

const openCamera = async () => {
  // 1. On vérifie si on a déjà la permission
  if (!permission?.granted) {
    // 2. On attend la réponse de l'utilisateur (async/await)
    const result = await requestPermission();

    // 3. Si l'utilisateur refuse, on s'arrête là
    if (!result.granted) {
      alert("Permission refusée");
      return;
    }
  }

  // 4. Si la permission est accordée, on active la vue caméra
  setShowCamera(true);
};

const takePhoto = async() =>{
  console.log(cameraRef.current)
if(cameraRef.current){
  const result = await cameraRef.current.takePictureAsync()
  setPhoto(result.uri)
  setShowCamera(false)
}
}
if(showCamera){
  return (
    <CameraView style={{ flex: 1 }} facing={type} ref={cameraRef}>
      <View 
        style={{
          flex: 1,
          flexDirection:"row",
          justifyContent: "space-around",
          alignItems: "flex-end",
          marginBottom: 50,
        }}
      >
        <View>
          <ButtonCustom
            style={{ flex: 1 }}
            text="Fermer"
            onPress={() => setShowCamera(false)}
          />
        </View>
        <View>
          <ButtonCustom
            style={{ flex: 1 }}
            text="Prendre une photo"
            onPress={takePhoto}
          />
        </View>
        <View>
          <ButtonCustom
            style={{ flex: 1 }}
            text="Rotation"
            onPress={() => setType(type === "back" ? "front" : "back")}
          />
        </View>
      </View>
    </CameraView >
  );
  
};

    return (
      <ScreenWrapper>
        <HeaderTittle text="Mon profil" />
        {photo && (
          <Image
            source={{ uri: photo }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              alignSelf: "center",
              marginVertical: 20,
            }}
          />
        )}

        <ButtonCustom text="Ouvrir la caméra" onPress={openCamera} />
        <InputCustom
          placeholder="Modifier le nom"
          value={nom}
          onChangeText={setNom}
        />
        <InputCustom
          placeholder="Modifier l'email"
          value={email}
          onChangeText={setEmail}
        />
        <ButtonCustom text="MODIFIER" onPress={handleUpdate} />
        <ButtonCustom
          text="Supprimer mon compte"
          secondary
          onPress={async () => {
            await deleteYourProfile(user.id);
            navigation.navigate("Home");
          }}
        />
      </ScreenWrapper>
    );
}