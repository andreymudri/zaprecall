import cards from './cards';

export default function Answers(props) {

  const completedCount = props.length;
  const totalCount = cards.length;
  
  return (
    <>  
      {completedCount}/{totalCount} CONCLUÍDOS
    </>
  );
}
