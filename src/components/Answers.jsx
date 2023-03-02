export default function Answers(props) {

  const { completedCount, totalCount } = props;
  return (
    <>  
      {completedCount}/{totalCount} CONCLUÍDOS
    </>
  );
}
