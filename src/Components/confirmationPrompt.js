import styled from 'styled-components';
import React from 'react';
import axios from 'axios';
import createHeaders from './auth';
import {useNavigate} from 'react-router-dom'

export default function ConfirmationPrompt ({setConfirmation, idPlan, cardName, cardNumber, securityNumber, expiration}){

    const PlanPrice = 9.99 +30*idPlan
    const config = createHeaders();
    const navigate = useNavigate()
    const CorrectSecurity = securityNumber*1

    function HandleSubscription (){
        
        const PlanDataSend = {
            membershipId: idPlan,
            cardName: cardName,
            cardNumber: cardNumber,
            securityNumber: CorrectSecurity,
            expirationDate: expiration
        }

        localStorage.setItem("User_Subscription", JSON.stringify(PlanDataSend))

        const MakeSubscription = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", PlanDataSend, config)

        MakeSubscription.then(response =>{
            console.log(response.status)
            if (response.status === 201){
                localStorage.setItem("User_Plan", JSON.stringify(response.data))
                navigate("/home")
            } else {
                alert("Sua tentativa de selecionar um plano não pode ser efetuada!")
            }
        })
        MakeSubscription.catch(error => {
            console.log(error)
            alert("Sua tentativa de selecionar um plano não pode ser efetuada!")
        })
    }

    return (
    <Container>
        <UpperIcon>
            <img src='../img/promptcancel.png' onClick={() => setConfirmation(false)}/>
        </UpperIcon>
        <Center>
            <ConfirmationBox>
                <h1>
                    Tem certeza que deseja assinar o plano Driven Plus R$ {PlanPrice}?
                </h1>
                <DealButtons>
                    <NoButton onClick={() => setConfirmation(false)}><p>Não</p></NoButton>
                    <YesButton onClick={() => HandleSubscription()}><p>SIM</p></YesButton>
                </DealButtons>
            </ConfirmationBox>
        </Center>
    </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    z-index: 1;
    display: block;
    p {
        color: white;
    }

`
const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`

const DealButtons = styled.div`
    display: flex;
    padding-top: 20px;
`

const ConfirmationBox = styled.div`
    margin-top: 15%;
    height: 210px;
    width: 200px;
    background-color: white;
    z-index: 1;
    border: none;
    border-radius: 12px;

    h1 {
        padding-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        font-family: Roboto;
        font-size: 18px;
        font-weight: 700;
        text-align: center;
    }
`

const UpperIcon = styled.div`
    padding-top: 30px;
    padding-left: 90%;
    width: 100%;
    height: 100px;
`

const NoButton = styled.div`
    height: 52px;
    width: 78px;
    border-radius: 8px;
    margin-left: 15px;
    background-color: #CECECE;
    display: flex;
        justify-content: center;
        align-items: center;
    p {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
    }
`

const YesButton = styled.div`
    height: 52px;
    width: 78px;
    border-radius: 8px;
    margin-left: 15px;
    background-color: #FF4791;
    display: flex;
        justify-content: center;
        align-items: center;
    p {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 700;
    }
`