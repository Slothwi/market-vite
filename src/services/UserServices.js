import axios from "axios";

const urlBaseServer = import.meta.env.VITE_URLBACKEND

const registerUser = async ( user ) => {
  
  try {
    const response = await axios.post(urlBaseServer + '/usuarios', user);
    return response
  } catch (error) {
    console.error('error registerUser: ', error)
    return null
  }
};
export { registerUser }


const loginUser = async ( user ) => {
  
  try {
    const response = await axios.post(urlBaseServer + '/login', user);
    return response
  } catch (error) {
    console.error('error loginUser: ', error)
    return null
  }
};
export { loginUser }
