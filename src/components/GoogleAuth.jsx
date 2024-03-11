import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import SweetAlert2 from 'react-sweetalert2'
import { UserContext } from '../context/UserContext'
import { loginGoogle } from '../services/UserServices'

const GoogleAuth = ( {setisLoading} ) => {
    const navigate = useNavigate()
    const clientId = import.meta.env.VITE_CLIENTID
    const { setUserData } = useContext(UserContext)

    const [swalProps, setSwalProps] = useState({});

    const validateUser = async (user) => {
        setisLoading(true)

        const response = await loginGoogle(user)
        if (response?.status == 200) {
            setUserData({
                email: response.data.payload.email,
                nombre: response.data.payload.name,
                avatar: response.data.payload.picture
            })
            navigate('/mainpage')
        }
        else {
            setSwalProps({ show: true, title: 'Informacion', text: response.response.data.message, icon: 'error', showCancelButton: true, cancelButtonText: 'Ok', showConfirmButton: false, allowOutsideClick: false, allowEscapeKey: false })
        }

    };

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    const user = { credential: credentialResponse.credential, client_id: credentialResponse.clientId }
                    validateUser(user)
                }}
                onError={() => {
                    console.log("Login Failed");
                }}
            />
            <SweetAlert2 {...swalProps} />
        </GoogleOAuthProvider>
    );
};

export default GoogleAuth;