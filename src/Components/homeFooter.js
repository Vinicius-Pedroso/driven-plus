import styled from 'styled-components'
import axios from 'axios'
import createHeaders from './auth';
import {useNavigate} from 'react-router-dom'

export default function HomeFooter() {

    const config = createHeaders();
    const navigate = useNavigate()

    const Temp2 = localStorage.getItem("User_Subscription")
    const UserData = JSON.parse(Temp2)

    function HandleDelete (){

        const DeleteSubscription = axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", config)
    
        DeleteSubscription.then(response => {
            console.log(response)
            navigate("/subscription")
        })

        DeleteSubscription.catch(error => console.log(error))
    }

    function HandleChange (){

        const ChangePlan = UserData

        const ChangeSubscription = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", ChangePlan, config)

        ChangeSubscription.then(response =>{
            console.log(response.status)
            if (response.status === 201){
                navigate("/subscription")
            }
        })
        ChangeSubscription.catch(error => {
            console.log(error)
        })
    }

    return (
        <Container>            
            
            <ButtonFooter onClick={() => HandleChange()}><p>Mudar plano</p></ButtonFooter>
            <ButtonFooter2 onClick={() => HandleDelete()}><p>Cancelar plano</p></ButtonFooter2>

        </Container>
    )
}

const Container = styled.div`
background-color: #0E0E13;
width: 100%;
height: 170px;
display: block;
bottom: 10px;
position: fixed;
justify-content: center;
align-items: center;
`

const ButtonFooter = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 26px;
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
    color: white;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 700;
}
`

const ButtonFooter2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 6px;
p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 299px;
    height: 52px;
    background-color: #FF4747;
    border: none;
    border-radius: 8px;
    color: white;
    color: white;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 700;
}
`