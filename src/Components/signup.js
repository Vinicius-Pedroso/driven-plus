import Buttoninput from "./buttonInput"

export default function signup (){
    return (
        <Container>
            <Buttoninput text="Nome"/>
            <Buttoninput text="CPF"/>
            <Buttoninput text="Email"/>
            <Buttoninput text="Senha"/>
            <Buttonsign >
                <p>CADASTRAR</p>
            </Buttonsign>
            <Footertext>
                <p>Já possuí uma conta? Entre</p>
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