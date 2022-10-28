import styled from 'styled-components';
import Buttoninput from './buttonInput';
import Header from './header'

export default function Login() {
    return (
        <Container>
            <Header></Header>
            <Buttoninput text="E-mail" />
            <Buttoninput text="Senha" />

            <Center>
                <Buttonenter >
                    <p>ENTRAR</p>
                </Buttonenter>
            </Center>

            <Footertext>
                <p>Não possuí uma conta? Cadastre-se</p>
            </Footertext>
        </Container>
    )
}

const Container = styled.div`
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

const Buttonenter = styled.div`
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