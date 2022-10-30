import styled from 'styled-components';

export default function Plandata ({PlanPrice}){

    return (
        <Container>
            <SpanFlex>
                <img src='./img/list.svg'/>
                <h2>Benefícios:</h2>
            </SpanFlex>
            <p>1. Brindes exclusivos</p>
            <p>2. Materiais bônus de web</p>
            <SpanFlex>
                <img src='./img/dollar.svg'/>
                <h2>Preço:</h2>
            </SpanFlex>
            <p>R$ {PlanPrice} cobrados mensalmente</p>
        </Container>
    )
}

const SpanFlex = styled.span`
    align-items: center;
    display: flex;
    padding-left: 5%;
    margin-top: 5px;
    margin-bottom: 5px;
`

const Container = styled.div`
    background-color: #0E0E13;
    width: 100%;
    display: flex;
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