import axios from 'axios'

const API_URL ="http://localhost:8080"

const register = async (user)=>{
    const res = await axios.post(API_URL +'/users',user)
    return res.data
}

const login = async (user)=>{
    const res = await axios.post(API_URL +'/users/login',user)
    if(res.data){
        localStorage.setItem('user',JSON.stringify(res.data))
    }
    return res.data
}
const logout = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.delete(API_URL + "/users/logout", {
      headers: {
        authorization: user?.token,
      },
    });
    if (res.data) {
      localStorage.removeItem("user");
    }
    return res.data;
  };
  
const authService ={
    register,
    login,
    logout
}

export default authService

