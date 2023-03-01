import styled from "styled-components";
import viravira from "../assets/seta_virar.png";
import jogar from "../assets/seta_play.png";
import { useState } from "react";

export default function Questions(props) {
    const [Count, setCount] = useState(0);
    let contador = Count;
    function handleCard() {
        
        setCount(contador + 1);
        console.log(Count);
    }
    console.log(props);

    return (
        <>
          {props.cards.map((card) => (
            <div key={card.id}>
              <Flashcard Resposta={card.Resposta} Counter={Count}>
                      {Count !== 2 && <img src={Count === 0 ? jogar : viravira} alt="jogar" onClick={handleCard} />}
              </Flashcard>
            </div>
          ))}
        </>
      );
    }
  
  

const Flashcard = styled.div`
  width: 300px;
  margin: 5px;
  height: ${(Counter) => {
    if (Counter !== 0) {
      return "65px";
    } else {
      return "131px";
    }
  }};
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  justify-content: ${(Count) => {
    if (Count !== 0) {
      return "end";
    } else {
      return "space-between";
    }
  }};;
  align-items: ${(Count) => {
    if (Count !== 0) {
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
`;
