import styled from 'styled-components';

export default function Plandata ({idPlan}){

    const id = idPlan
    const planPrice = 9.99 +30*id

    return (
        <>

        <Container>

            <SpanFlex>
                <img src='../img/list.svg'/>
                <h2>Benefícios:</h2>
            </SpanFlex>
            
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><p>1. Brindes exclusivos</p></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><p>2. Materiais bônus de web</p></a>
            {id >= 2 && <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><p>3. Aulas bônus de tech</p></a>}
            {id ===3 && <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><p>4. Mentorias personalizadas</p></a>}
            
            <SpanFlex>
                <img src='../img/dollar.svg'/>
                <h2>Preço:</h2>
            </SpanFlex>
            
            <p>R$ {planPrice} cobrados mensalmente</p>
        </Container>
        </>
    )
}

const SpanFlex = styled.span`
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
`

const Container = styled.div`
    background-color: #0E0E13;
    width: 100%;
    display: block;
    img {
        display: flex;
    }
    p {
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        color: white;
    }
    h2{
        display: flex;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        color: white;
    }

    a {
        text-decoration: none;
        margin: none;
    }
`