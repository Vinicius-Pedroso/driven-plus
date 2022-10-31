import styled from 'styled-components';
import Header from './header'
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    function SendLogin({ email, password}) {

        const UserLogin = {
            email: email,
            password: password
        }

        const promise = axios.post(`https://mock-api.driven.com.br/api/v4/driven-plus/auth/login`, UserLogin)
        
        promise.catch(error => {
            alert("Login não foi efetuado corretamente. Mais informações estão disponíveis no console")
            console.log(error)
        })

        return promise.then((response) => {
            console.log(response)
            localStorage.setItem("User_Info", JSON.stringify(response.data))
            if (response.data.membership === null){
                navigate("/subscription")
            } else {
                navigate("/home")
            }
        });
    }

    return (
        <Container>

            <Header></Header>

            <Center>
                <Buttonregistry type='text' placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
            </Center>
            <Center>
                <Buttonregistry type='text' placeholder="senha" value={password} onChange={e => setPassword(e.target.value)}/>
            </Center>

            <Buttonenter onClick={() => SendLogin({email, password})}>
                <p>ENTRAR</p>
            </Buttonenter>

            <Footertext>
                <Link to='/signup'>
                    <p>Não possuí uma conta? Cadastre-se</p>
                </Link>
            </Footertext>
            
        </Container>
    )
}

const Container = styled.div`
    background-color: #0E0E13;
    width: 100%;
    height: 100vh;
    display: block;
    justify-content: center;
    align-items: center;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
`

const Buttonenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    p {
        display: flex;
    align-items: center;
    justify-content: center;
        width: 299px;
    height: 52px;
    background-color: #FF4791;
    border: none;
    border-radius: 8px;
        color: white;
        font-family: 'Roboto';
        font-size: 14px;
        font-weight: 700;
    }
`
const Footertext = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    p{
        color: white;
        font-family: 'Roboto';
        font-size: 14px;
        font-weight: 400;
        text-decoration: underline;
    }
`
const Buttonregistry = styled.input`
    width: 299px;
    height: 52px;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    font-size: 18px;
    font-family: 'Roboto';
    ::placeholder {
        padding-left: 15px;
        color: #7E7E7E;
        font-size: 14px;
        font-family: 'Roboto';
        font-weight: 400;
    }
`