import styled from "styled-components";
import viravira from "../assets/seta_virar.png";
import jogar from "../assets/seta_play.png";
import { useState } from "react";
import iconeCerto from "../assets/icone_certo.png";
import iconeErro from "../assets/icone_erro.png";
import iconeQuase from "../assets/icone_quase.png";

export default function Questions(props) {
  const [counts, setCounts] = useState(Array(props.cards.length).fill(0));

  function handleCard(index) {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  }

  return (
    <>
      {props.cards.map((card, index) => (
        <div key={card.id} data-test="flashcard">
          <Flashcard Resposta={card.Resposta} Counter={counts[index]} >
            {counts[index] === 0 && (
                      <span data-test="flashcard-text">
                          Pergunta {index+1}
                <img
                  src={jogar}
                  alt="jogar"
                              onClick={() => handleCard(index)}
                              data-test="play-btn"
                />
              </span>
            )}

            {counts[index] === 1 && (
              <span data-test="flashcard-text">
                {card.question}{" "}
                <img
                  src={viravira}
                  alt="viravira"
                  onClick={() => handleCard(index)}
                />
              </span>
                  )}
                  
                  {counts[index] === 2 && (
                      <span data-test="flashcard-text" className="teste">
                          <h1>
                              {card.answer}
                              <div>
                                  <button style={{ backgroundColor: '#FF3030' }} data-test="no-btn" onClick={() => handleCard(index)} >Não lembrei</button>
                                  <button style={{ backgroundColor: '#FF922E' }} data-test="partial-btn" onClick={() => handleCard(index)}>Quase não lembrei</button>
                                  <button style={{ backgroundColor: '#2FBE34' }} data-test="zap-btn" onClick={() => handleCard(index)}>Zap!</button>
                </div>
              </h1></span>
            )}
          </Flashcard>
        </div>
      ))}
    </>
  );
}

const Flashcard = styled.div`
  width: 300px;
  margin: 5px;
  height: ${(props) => {
    if (props.Counter === 0) {
      return "65px";
    } else {
      return "131px";
    }
  }};

  span {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;

  }

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
 /*  justify-content: ${(props) => {
    if (props.Counter !== 0) {
      return "end";
    } else {
      return "space-between";
    }
  }}; */
  align-items: ${(props) => {
    if (props.Counter === 0) {
      return "center";
    } else {
      return "flex-end";
    }
  }};
  
  img {
    height: 20px;
    width: 20px;
    margin-right: 15px;
  }
  
  font-family: "Righteous";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
h1{
    display:flex;
    flex-direction:column;
    div{
        display:flex;
        justify-content:center;
    }
}
button {
    width: 85.17px;
height: 37.17px;
border-radius: 5px;
margin-bottom: 5px;
color:white;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
}
`;
