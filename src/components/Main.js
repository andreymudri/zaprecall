import styled from 'styled-components';
import { useState } from "react";
import cards from './cards'
import logo from '../assets/logo.png'
import Questions from './Questions';

export default function Main() {

    const [Resposta, setResposta] = useState(false);
    



    return (
        <ScreenBody>
            <header><img src={logo} alt ="logo"/> ZapRecall</header>        
            <Questions
                cards={cards}
                Resposta={Resposta}
            />
            <Footer>

            </Footer>
        </ScreenBody>
    )
}

const ScreenBody = styled.div`
    background-color: #FB6B6B;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
        display:flex;
        font-family:'Righteous'; 
        align-items: center;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        align-items: center;
        text-align: center;
        letter-spacing: -0.012em;
        margin-bottom:50px;
        img{
        width: 52px;
        height: 60px;
    }
    }

`;




const Footer = styled.div`
display:flex;
position:absolute;
bottom:0px;
width: 100vw;
height: 50px;
background-color:white;
`;