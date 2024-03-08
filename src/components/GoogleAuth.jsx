
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleAuth = () => {
    const clientId = import.meta.env.VITE_CLIENTID
  
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    const decoded = jwtDecode(credentialResponse?.credential);
                    // si ya existe correo verificar
                    // 'corrreo y datos para grabarlo como si fuera registro
                    // ingresa al sistema
                    console.log(decoded);
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log("Login Failed");
                }}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleAuth;