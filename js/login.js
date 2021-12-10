import { url } from './api.js';
import { saveToken, saveUser } from './utils.js';


// async function login(username, password) {

//     const urlPass = url + "auth/local";
//     const data = JSON.stringify({ identifier: username, password: password });

//     const options = {
//         method: "POST",
//         body: data,
//         headers: {
//             "Content-Type": "application/json" 
//         }
//     }


//     try {
//         const response = await fetch(urlPass, options);
//         const json = await response.json();
//         console.log(json);


//         if (json.user) {

//             saveToken(json.jwt);
//             saveUser(json.user)

//             location.href = "https://img.ifunny.co/images/045355f75e5d96f1125f75e5dc458cebed2c82996935f49d16d355fe2814d690_1.webp"

//         }

//         if (json.error) {
//             showMessage("Wrong username and password combination", "invalid", ".message");
//         }

//     }

//     catch(error) {
//         showMessage("ERROR!", error, ".message");
//     }

// }