import './App.css';
import NovaTarefa from './components/NovaTarefa';
import Percentual from './components/Percentual';
import { useState } from 'react';

interface Tarefa {
  descricao: string;
  horario: string;
  concluida?: boolean;
}

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const totalTarefas = tarefas.length;
  const tarefasCompletas = tarefas.filter(t => t.concluida).length;
  return (
    <div className='Container'>
      <div className='NovaTarefa'>
        <NovaTarefa tarefas={tarefas} setTarefas={setTarefas} />
      </div>
      <div className='Percentual'>
        <Percentual totalTarefas={totalTarefas} tarefasCompletas={tarefasCompletas} />
      </div>
    </div>
  );
}

export default App;
