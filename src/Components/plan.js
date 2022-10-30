import styled from 'styled-components'
import Plandata from './plandata'
import {useParams} from 'react-router-dom'

export default function Plan (){

    const idPlan = useParams().idPlan
    const PlanPrice = 9.99 + 30*idPlan

    return (
        <Container>
        <ion-icon name="arrow-back-outline"></ion-icon>
        <MiniLogoDriven>
        <img src="./img/vector1.png"/>
        </MiniLogoDriven>
        <Center>
            <h1>Driven Plus</h1>
        </Center>
        <Plandata PlanPrice={PlanPrice} />
        <Center>
            <BoxInput type="text" placeholder="Nome impresso no cartão"></BoxInput>
        </Center>
        <Center>
            <BoxInput type="text" placeholder="Digitos do cartão"></BoxInput>
        </Center>
        <Center>
            <BoxInput2 type="text" placeholder="Código de segurança"></BoxInput2>
            <Correctionbox></Correctionbox>
            <BoxInput2 type="text" placeholder="Validade"></BoxInput2>
        </Center>
        <Center>
            <ButtonInput ><p>ASSINAR</p></ButtonInput>
        </Center>
    </Container>

    )
}

const Container = styled.div`
    background-color: #0E0E13;
    width: 100%;
    height: 100vh;
    display: block;
    justify-content: center;
    p {
        padding-left: 5%;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        color: white;
    }
    h2{
        padding-left: 1%;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        color: white;
    }
`
const MiniLogoDriven = styled.div`
    padding-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Center = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 5px;
    h1 {
    font-family: Roboto;
    font-size: 32px;
    font-weight: 700;
    color: white;
    margin-bottom: 14px;
    }
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
    width: 145px;
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
const ButtonInput = styled.button`
    width: 299px;
    height: 52px;
    border: none;
    border-radius: 8px;
    background-color: #FF4791;
    display: flex;
    align-items: center;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 700;
`
const Correctionbox = styled.div `
    width: 7px;
`