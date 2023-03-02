import styled from "styled-components";
import { useState } from "react";
import cards from "./cards";
import logo from "../assets/logo.png";
import Questions from "./Questions";

export default function Main() {
  const [Count, setCount] = useState(0);

  return (
    <ScreenBody>
      <header>
        <img src={logo} alt="logo" /> ZapRecall
      </header>
      <Questions Count={Count} setCount={setCount} cards={cards} />

    </ScreenBody>
  );
}

const ScreenBody = styled.div`
  background-color: #fb6b6b;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  header {
    display: flex;
    font-family: "Righteous";
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    margin-bottom: 50px;
    color: #ffffff;
    img {
      width: 52px;
      height: 60px;
    }
  }
`;
