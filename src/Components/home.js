import styled from 'styled-components'
import FooterHome from './homeFooter'
import HomeHeader from './homeHeader'

export default function Home (){

    const Temp = localStorage.getItem("User_Plan")
    const PlanData = JSON.parse(Temp)
    const id = PlanData.membership.id;

    const Temp2 = localStorage.getItem("User_Info")
    const UserData = JSON.parse(Temp2)

    console.log(UserData)

    return (
        <Container>
            <HomeHeader id={id} name={UserData.name}></HomeHeader>

            <ButtonHome><p>Solicitar brindes</p></ButtonHome>
            <ButtonHome><p>Materias bônus da web</p></ButtonHome>
            { id>= 2 && <ButtonHome><p>Aulas bônus de tech</p></ButtonHome> }
            { id === 3 && <ButtonHome><p>Mentorias personalizadas</p></ButtonHome> }
            <FooterHome></FooterHome>
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

const ButtonHome = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
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