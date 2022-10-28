import styled from "styled-components";

export default function buttoninput ({text}){
    return (
        <Center>
            <Buttonregistry type='text' placeholder={text}>
            </Buttonregistry>
        </Center>
    );
}

const Center = styled.div`
    display: flex;
    justify-content: center;
`
const Buttonregistry = styled.input`
    width: 299px;
    height: 52px;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-top: 15px;
    font-size: 18px;
    font-family: 'Roboto';
    ::placeholder {
        padding-left: 15px;
        color: #7E7E7E;
        font-size: 14px;
        font-family: 'Roboto';
        font-weight: 400;
    }
`