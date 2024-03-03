
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleAuth = () => {
    const clientId = "940019390899-pihg5gtgjfgtr4kdl99qq04q7btk03d8.apps.googleusercontent.com";
    // const clientId = "178140094130-d0172jtfs2tl7huh0kshb08du7l2533a.apps.googleusercontent.com"
     
      return (
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    const decoded = jwtDecode(credentialResponse?.credential);
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