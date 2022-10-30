import React from 'react'
import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Signup (){

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function SignUser() {

        const newUser = {
            email: email,
            name: name,
            cpf: cpf,
            password: password
        }
    
        const signUserData = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up', newUser)
        
        signUserData.then(response => {
            console.log(response.data)
                navigate("/")
        })
        signUserData.catch(error => {
            console.log(error)
            alert("Não possível efetuar o cadastro")
        })
    }

    return (
        <Container>
            <Center>
            <Buttonregistry type='text' placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
            </Center>
            <Center>
            <Buttonregistry type='text' placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)}/>
            </Center>
            <Center>
            <Buttonregistry type='text' placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
            </Center>
            <Center>
            <Buttonregistry type='text' placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
            </Center>
            <Buttonsign onClick={() => SignUser({name, cpf, email, password})}>
                <p>CADASTRAR</p>
            </Buttonsign>

            <Footertext>
                <Link to="/">
                    <p>Já possuí uma conta? Entre</p>
                </Link>
            </Footertext>
        </Container>
    )
}

const Container = styled.div`
    padding-top: 100px;
    background-color: #0E0E13;
    width: 100%;
    height: 100vh;
    div {
    display: flex;
    justify-content: center;
    }
`
const Center = styled.div`
    display: flex;
    justify-content: center;
`

const Buttonsign = styled.div`
    display: flex;
    justify-content: center;
    p {
        width: 299px;
        height: 52px;
        background-color: #FF4791;
        border: none;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 299px;
    height: 52px;
    border: none;
    border-radius: 8px;
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