import axios from "axios";

const urlBaseServer = import.meta.env.VITE_URLBACKEND

const registerUser = async (user) => {
  try {
    const response = await axios.post(urlBaseServer + 'usuarios', user);
    return response
  } catch (error) {
    console.error('error registerUser: ', error)
    return error
  }
};
export { registerUser }


const loginUser = async (user) => {
  try {
    const response = await axios.post(urlBaseServer + 'login', user);
    return response
  } catch (error) {
    console.error('error loginUser: ', error)
    return error
  }
};
export { loginUser }


const loginGoogle = async (user) => {
  try {
    const response = await axios.post(urlBaseServer + 'google-auth', user);
    return response
  } catch (error) {
    console.error('error loginGoogle: ', error)
    return error
  }
};
export { loginGoogle }

