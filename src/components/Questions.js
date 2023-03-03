import styled from "styled-components";
import viravira from "../assets/seta_virar.png";
import jogar from "../assets/seta_play.png";
import { useState } from "react";
import iconeCerto from "../assets/icone_certo.png";
import iconeErro from "../assets/icone_erro.png";
import iconeQuase from "../assets/icone_quase.png";
import Answers from "./Answers";
export default function Questions(props) {
  const [counts, setCounts] = useState(Array(props.cards.length).fill(0));
  const [icons, setIcons] = useState(Array(props.cards.length).fill(null));
  const [array, setArray] = useState([]);
  function handleAnswer(answer) {
    setArray((prevArray) => [...prevArray, answer]);
    Answers(array);
    console.log(array)
  }

  function handleCard(index, answer) {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
    setIcons((prevIcons) => {
      const newIcons = [...prevIcons];
      switch (answer) {
        case "certo":
          newIcons[index] = iconeCerto;
          break;
        case "errado":
          newIcons[index] = iconeErro;
          break;
        case "quase":
          newIcons[index] = iconeQuase;
          break;
        default:
          break;
      }
      return newIcons;
    });
    ;
  }

  return (
    <>
      {props.cards.map((card, index) => (
        <div key={card.id} data-test="flashcard">
          <Flashcard Resposta={card.Resposta} Counter={counts[index]}>
            {counts[index] === 0 && (
              <span data-test="flashcard-text">
                Pergunta {index + 1}
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
                  data-test="turn-btn"
                />
              </span>
            )}

            {counts[index] === 2 && (
              <p data-test="flashcard-text" className="teste">
                <h1>
                  {card.answer}
                  </h1>
                  <h4>
                    <button
                      style={{ backgroundColor: "#FF3030" }}
                      data-test="no-btn"
                      onClick={() => {
                        handleAnswer('errado');
                        handleCard(index, "errado");
                      }}
                    >
                      Não lembrei
                    </button>
                    <button
                      style={{ backgroundColor: "#FF922E" }}
                      data-test="partial-btn"
                      onClick={() => {
                        handleAnswer('quase');
                        handleCard(index, "quase");
                      }}
                    >
                      Quase não lembrei
                    </button>
                    <button
                      style={{ backgroundColor: "#2FBE34" }}
                      data-test="zap-btn"
                      onClick={() => {
                        handleAnswer('certo');
                        handleCard(index, "certo");
                      }}
                    >
                      Zap!
                    </button>
                  </h4>

              </p>
            )}

            {counts[index] === 3 && (
              <span data-test="flashcard-text">
                <h2>
               <div> Pergunta {index + 1}</div>
                {icons[index] === iconeErro ? (
                  <img src={iconeErro} alt="Erro" data-test="no-icon" />
                ) : (
                  ""
                )}
                {icons[index] === iconeQuase ? (
                  <img src={iconeQuase} alt="Quase" data-test="partial-icon" />
                ) : (
                  ""
                )}
                {icons[index] === iconeCerto ? (
                  <img src={iconeCerto} alt="Certo" data-test="zap-icon" />
                ) : (
                  ""
                  )}
                  </h2>
              </span>
            )}
          </Flashcard>
          <Footer data-test="footer">
          <Answers completedCount={array.length} totalCount={props.cards.length} />
      </Footer>
        </div>
      ))}
    </>
  );
}

const Flashcard = styled.div`
  width: 300px;
  margin: 5px;
  height: ${(props) => {
  switch(props.Counter) {
    case 0:
      return "65px";
    case 1:
      return "131px";
    case 2:
      return "131px";
    default:
      return "65px";
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
  h1 {
    display: flex;
    flex-direction: column;
    align-items:center;

    div {
      display: flex;
      justify-content: center;
    }
  }
  h2 {  
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;    
margin-bottom:${(props) => (props.Counter === 3 && "20px")}  
  }

h4 {
  display:flex;
  justify-content:center;
}

  button {
    width: 85.17px;
    height: 37.17px;
    border-radius: 5px;
    margin-bottom: 5px;
    color: white;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  
  }
  
`;

const Footer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  height: 50px;
  background-color: white;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
`;
