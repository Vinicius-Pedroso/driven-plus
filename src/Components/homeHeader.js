import styled from 'styled-components';

export default function HomeHeader({id}) {

    const idvec = id;

    return (
        <Container>
            <UpperHeader>
                <img src={`./img/vector${idvec}.png`} />
                <img src='./img/UserIcon.png' style={{"height": "32px", "width": "32px"}}/>
            </UpperHeader>
            <p>Olá Nome!</p>
        </Container>
    )
}

const Container = styled.div`
    background-color: #0E0E13;
    width: 100%;
    height: 174px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    p{
        color: white;
        font-family: Roboto;
        font-size: 24px;
        font-weight: 700;
    }
`

const UpperHeader = styled.div`
    width: 100%;
    padding-top: 32px;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    justify-content: space-between;
    img {
        height: 70px;
        width: 70px;
    }
`