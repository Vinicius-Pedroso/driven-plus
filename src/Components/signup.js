import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { SignUser } from "./FunctionsAPI";

export default function Signup (){

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Container>
            <Buttonregistry type='text' placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
            <Buttonregistry type='text' placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)}/>
            <Buttonregistry type='text' placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
            <Buttonregistry type='text' placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>

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
    width: 299px;
    height: 52px;
    background-color: #FF4791;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    p {
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