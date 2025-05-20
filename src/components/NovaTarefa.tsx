import './NovaTarefa.css';
import type { FormEvent, ChangeEvent } from 'react';
import { useState } from 'react';

interface Tarefa {
  descricao: string;
  horario: string;
}

type Props = {
  concluidas : number;
};

function NovaTarefa(props: Props) {
  const [descricao, setDescricao] = useState<string>('');
  const [horario, setHorario] = useState<string>('');
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!descricao || !horario) {
      alert("Preencha todos os campos");
      return;
    }

    const novaTarefa: Tarefa = { descricao, horario };
    setTarefas([...tarefas, novaTarefa]);
    setDescricao('');
    setHorario('');
    alert("Tarefa adicionada com sucesso!");
  };

  return (
    <div className='Container-listas'>
      <div className='Formulario'>
        <form className="nova-tarefa" onSubmit={handleSubmit}>
          <textarea
            name="descricao"
            id="descricao"
            cols={30}
            rows={5}
            value={descricao}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescricao(e.target.value)}
            placeholder="Descreva sua tarefa..."
          ></textarea>
          <br />
          

          <select
            className="horarios"
            value={horario}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setHorario(e.target.value)}
          >
            <option value="" disabled hidden>Escolha um horário</option>
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
          </select>

          <button type="submit">Adicionar</button>
        </form>
      </div>

      <div className='Listas'>
        <div className="listas-grid">
          <ul className="lista-tarefas manha">
            <h3>Manhã</h3>
            {tarefas.filter(t => t.horario === 'Manhã').map((tarefa, index) => (
              <li key={`manha-${index}`}>
                 {tarefa.descricao}
              </li>
            ))}
          </ul>

          <ul className="lista-tarefas tarde">
            <h3>Tarde</h3>
            {tarefas.filter(t => t.horario === 'Tarde').map((tarefa, index) => (
              <li key={`tarde-${index}`}>
                 {tarefa.descricao}
              </li>
            ))}
          </ul>

          <ul className="lista-tarefas noite">
            <h3>Noite</h3>
            {tarefas.filter(t => t.horario === 'Noite').map((tarefa, index) => (
              <li key={`noite-${index}`}>
                {tarefa.descricao}
              </li>
            ))}
          </ul>
        <p> <strong>Tarefas Concluidas: {props.concluidas} </strong> </p>
        </div>
      </div>

    </div>
  );
}

export default NovaTarefa;
