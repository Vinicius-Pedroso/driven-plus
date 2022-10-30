import styled from 'styled-components'

export default function HomeFooter() {
    return (
        <Container>            
            
            <ButtonFooter><p>Mudar plano</p></ButtonFooter>
            <ButtonFooter2><p>Mentorias personalizadas</p></ButtonFooter2>

        </Container>
    )
}

const Container = styled.div`
background-color: #0E0E13;
width: 100%;
height: 170px;
display: block;
bottom: 0px;
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
margin-top: 26px;
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