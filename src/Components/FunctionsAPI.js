import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function SignUser({ name, cpf, email, password }) {
    console.log(email, name, cpf, password)
    const promise = axios.post(`https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up`, { email, name, cpf, password })
    return promise;
}

function SendLogin({ email, password}) {
    const navigate = useNavigate()
    const promise = axios.post(`https://mock-api.driven.com.br/api/v4/driven-plus/auth/login`, { email, password })
    return promise.then((response) => {
        localStorage.setItem("User_Info", JSON.stringify(response.data))
        navigate("/subscription")
    });
}

function CreateHeaders() {
  const auth = localStorage.getItem("User_Info");
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`
    }
  };

  return config;
}

export {SignUser, SendLogin, CreateHeaders}