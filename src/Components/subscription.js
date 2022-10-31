import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react';
import axios from 'axios'
import React from 'react'
import createHeaders from './auth';

export default function Subscription (){

    const [data, setData] = useState([])
    const config = createHeaders();

    useEffect(() => {
        const MembershipPlans = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships`, config)

        MembershipPlans.then(response => {
            setData(response.data)
        })
        MembershipPlans.catch(error => console.log(error))
    }, [])

    

    if (data.lenght === 0){
        return (
            <div>
                <h1>Loading</h1>
            </div>
        );
    }

    return (
        <Container>
            <h1>Escolha seu Plano</h1>
            <Link to={`/subscription/${1}`}>
                <Offer >
                    <img src="./img/vector1.png"/>
                    <h2>R$ 39,99</h2>
                </Offer>
            </Link>
            <Link to={`/subscription/${2}`}>
                <Offer >
                    <img src="./img/vector2.png"/>
                    <h2>R$ 69,99</h2>
                </Offer>
            </Link>
            <Link to={`/subscription/${3}`}>
                <Offer >
                    <img src="./img/vector3.png"/>
                    <h2>R$ 99,99</h2>
                </Offer>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    background-color: #0E0E13;
    width: 100%;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
    div {
    display: flex;
    justify-content: center;
    align-items: center;
    }
    h1 {
    padding-top: 30px;
    font-family: Roboto;
    font-size: 32px;
    font-weight: 700;
    color: white;
    margin-bottom: 14px;
    margin-left: 10px;
    }
    h2 {
    padding-top: 30px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    color: white;
    margin-bottom: 14px;
    margin-left: 10px;
    }
`
const Offer = styled.div`
    width: 290px;
    height: 180px;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`