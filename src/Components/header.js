import styled from 'styled-components';

export default function Header (){
    return (
        <Driven>
            <img src='./img/drivenlogo.png' />
        </Driven>
    )
}

const Driven = styled.div`
    background-color: #0E0E13;
    padding-top: 100px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`