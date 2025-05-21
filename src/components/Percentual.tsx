import './NovaTarefa.css';

interface Props {
  totalTarefas: number;
  tarefasCompletas: number;
}

const Percentual = ({ totalTarefas, tarefasCompletas }: Props) => {
  const progresso = totalTarefas > 0
    ? Math.round((tarefasCompletas / totalTarefas) * 100)
    : 0;

  return (
    <div className="container-percentual">
      
      <div className=' concluidas'>
      <p> <strong>{progresso}%</strong> das tarefas foram concluídas</p>
      </div>
      <div className='Total'>
      <p>Total de tarefas  <strong>{totalTarefas}</strong></p>
      </div>
     
    </div>
   
  );
};

export default Percentual;