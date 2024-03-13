import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import SweetAlert2 from 'react-sweetalert2'

import { loginGoogle } from '../services/UserServices'

const GoogleAuth = ({ setisLoading }) => {
    const navigate = useNavigate()
    const clientId = import.meta.env.VITE_CLIENTID

    const [swalProps, setSwalProps] = useState({});

    const validateUser = async (user) => {
        try {
            setisLoading(true)
            console.log('user.credential', user.credential)
            const response = await loginGoogle(user)
            if (response?.status == 200) {
                window.sessionStorage.setItem('token', response.data.token)
                window.sessionStorage.setItem('userData', JSON.stringify({
                    id_usuario: 99,
                    email: response.data.data.email,
                    nombre: response.data.data.nombre,
                    avatar: response.data.data.avatar
                }))
                navigate('/mainpage')
            }
            else {
                setSwalProps({ show: true, title: 'Informacion', text: response.response.data.message, icon: 'error', showCancelButton: true, cancelButtonText: 'Ok', showConfirmButton: false, allowOutsideClick: false, allowEscapeKey: false })
            }
        } catch (error) {
            window.sessionStorage.removeItem('token')
            window.sessionStorage.removeItem('userData')
        }

    };

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    const user = { credential: credentialResponse.credential, clientId: credentialResponse.clientId }
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