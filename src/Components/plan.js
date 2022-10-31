import styled from 'styled-components'
import Plandata from './plandata'
import createHeaders from './auth'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'
import React from 'react'
import ConfirmationPrompt from './confirmationPrompt'

export default function Plan() {

    const idPlan = useParams().idPlan
    const [data, setData] = useState([])
    const config = createHeaders();
    const image = `../img/vector${idPlan}.png`
    const [cardName, setCardName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [securityNumber, setSecurityNumber] = useState("")
    const [expiration, setExpiration] = useState("")
    const [confirmation, setConfirmation] = useState(false)

    useEffect(() => {
        const MembershipPlanData = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlan}`, config)

        MembershipPlanData.then(response => {
            setData(response.data)
        })
        MembershipPlanData.catch(error => console.log(error))
    }, [])

    if (data.lenght === 0) {
        return (
            <div>
                <h1>Loading</h1>
            </div>
        );
    }

    return (
        <>
        
        {confirmation && <ConfirmationPrompt setConfirmation={setConfirmation} idPlan={data.id}></ConfirmationPrompt>}
        <Container>
            
            <Link to="/subscription">
            <ion-icon name="arrow-back-outline"></ion-icon>
            </Link>
            <BlockDiv>
                <CenterImg>
                    <img src={image} />
                </CenterImg>
            <h1>Driven Plus</h1>

            <Plandata idPlan={data.id} />

            <BoxInput type="text" placeholder="Nome impresso no cartão" value={cardName} onChange={e => setCardName(e.target.value)}></BoxInput>
            <BoxInput type="text" placeholder="Digitos do cartão" value={cardNumber} onChange={e => setCardNumber(e.target.value)}></BoxInput>
            <ButtonSeparation>
                <BoxInput2 type="text" placeholder="Código de segurança" value={securityNumber} onChange={e => setSecurityNumber(e.target.value)}></BoxInput2>
                <Correctionbox></Correctionbox>
                <BoxInput2 type="text" placeholder="Validade" value={expiration} onChange={e => setExpiration(e.target.value)}></BoxInput2>
            </ButtonSeparation>
            <ButtonInput onClick={() => setConfirmation(true)}><p>ASSINAR</p></ButtonInput>
            </BlockDiv>
        </Container>
        </>
    )
}

const Container = styled.div`
    background-color: #0E0E13;
    padding-top: 0px;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;

    h1 {
    font-family: Roboto;
    font-size: 32px;
    font-weight: 700;
    color: white;
    margin-bottom: 14px;
    }
    
    h2{
        padding-left: 1%;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        color: white;
    }

    ion-icon{
        padding-top: 25px;
        padding-left: 10px;
        width: 28px;
        height: 28px;
        color: white;
        position: relative;
    }
`

const ButtonSeparation = styled.div`
    display: flex;
    padding-bottom: 5px;
    
`

const BlockDiv = styled.div`
    display: block;
    img {
        padding-top: 60px;
    }

    h1{
        display: flex;
        justify-content: center;
    }
`

const CenterImg = styled.div`
    display: flex;
    justify-content: center;
`

const BoxInput = styled.input`
    width: 299px;
    height: 52px;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
`

const BoxInput2 = styled.input`
    width: 144px;
    height: 52px;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
`
const ButtonInput = styled.div`
    margin-top: 10px;
    display: flex;

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 303px;
        height: 52px;
        border: none;
        border-radius: 8px;
        background-color: #FF4791;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 700;
        color: white;
        text-decoration: none;
    }
`
const Correctionbox = styled.div`
    width: 7px;
`