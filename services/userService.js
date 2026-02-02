export const userService = () => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const inscription = async (nom,email, password) => {
    
    if (nom.trim() === "" || password.trim() === "" || email.trim() === "") {
      alert("Veuillez remplir tous les champs.");
      return;
    }
console.log("cc");
    if (!checkEmail(email)) {
      alert("Veuillez saisir un email valide");
      return;
    }

    if (!checkPassword(password)) {
      alert("Mot de passe invalide, 1 majuscule, 1 minuscule, 1 chiffre");
      return;
    }

    await fetch("http://10.31.252.208:8080/user/adduser", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        nom,
        password,
        email,
      }),
    });
    alert("Utilisateur ajouté avec succès.");
  };

  const updatePassword = async (email, password) => {

    const response = await fetch("http://10.31.252.208:8080/user/update", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if(!response.ok){
      const errMessage = await response.text();
      alert(errMessage)
      return
    }

    alert("Mot de passe modifier avec succès.");
  };

  
  const connexion = async (email, password) => {

    if(email.trim() === "" || password.trim() === ""){
        alert("Tous les champs sont obligatoire.")
        return
    }
    
    const response = await fetch("http://10.31.252.208:8080/user/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!response.ok) {
      const errMessage = await response.text();
      alert(errMessage);
      return;
    }
    const user = await response.json();

    return user;
  };

  const checkEmail = (email) => {
    return regexEmail.test(email);
  };

  const checkPassword = (password) => {
    return regexPassword.test(password);
  };

  return { checkEmail, checkPassword, inscription, connexion, updatePassword };
}
