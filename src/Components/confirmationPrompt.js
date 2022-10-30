import styled from 'styled-components';

export default function ConfirmationPrompt (){
    return (
    <Container>
        <UpperIcons>
            <img src='./img/promptcancel.png' />
            <img src='./img/promptcancel.png' />
            <img src='./img/promptcancel.png' />
            <img src='./img/promptcancel.png' />
        </UpperIcons>
    </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 30px;
    display: block;
    p {
        color: white;
    }

`

const UpperIcons = styled.div`
    width: 100%;
    height: 100px;
`