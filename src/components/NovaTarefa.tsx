import './NovaTarefa.css';
import type { FormEvent, ChangeEvent } from 'react';
import { useState } from 'react';

interface Tarefa {
  descricao: string;
  horario: string;
  concluida?: boolean;
}

interface Props {
  tarefas: Tarefa[];
  setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>;
}

function NovaTarefa({ tarefas, setTarefas }: Props) {
  const [descricao, setDescricao] = useState<string>('');
  const [horario, setHorario] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!descricao || !horario) {
      alert("Preencha todos os campos");
      return;
    }

    const novaTarefa: Tarefa = { descricao, horario, concluida: false };
    setTarefas([...tarefas, novaTarefa]);
    setDescricao('');
    setHorario('');
    alert("Tarefa adicionada com sucesso!");
  };

  const handleCheckboxChange = (index: number) => {
    const novasTarefas = tarefas.map((tarefa, i) =>
      i === index ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    setTarefas(novasTarefas);
  };

  const contarConcluidas = (horario: string) => {
    return tarefas.filter(t => t.horario === horario && t.concluida).length;
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
            {tarefas.map((tarefa, index) =>
              tarefa.horario === 'Manhã' && (
                <li key={`manha-${index}`}>
                   <span className={tarefa.concluida ? 'concluida' : ''}>
                   {tarefa.descricao}
                   </span>
                  <input
                    type='checkbox'
                    checked={tarefa.concluida || false}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </li>
              )
            )}
            <p><strong>Tarefas Concluídas: {contarConcluidas('Manhã')}</strong></p>
          </ul>

         
          <ul className="lista-tarefas tarde">
            <h3>Tarde</h3>
            {tarefas.map((tarefa, index) =>
              tarefa.horario === 'Tarde' && (
                <li key={`tarde-${index}`}>
                 <span className={tarefa.concluida ? 'concluida' : ''}>
                   {tarefa.descricao}
                </span>
                  <input
                    type='checkbox'
                    checked={tarefa.concluida || false}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </li>
              )
            )}
            <p><strong>Tarefas Concluídas: {contarConcluidas('Tarde')}</strong></p>
          </ul>

          
          <ul className="lista-tarefas noite">
            <h3>Noite</h3>
            {tarefas.map((tarefa, index) =>
              tarefa.horario === 'Noite' && (
                <li key={`noite-${index}`}>
                  <span className={tarefa.concluida ? 'concluida' : ''}>
                   {tarefa.descricao}
                  </span>
                  <input
                    type='checkbox'
                    checked={tarefa.concluida || false}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </li>
              )
            )}
            <p><strong>Tarefas Concluídas: {contarConcluidas('Noite')}</strong></p>
          </ul>

        </div>
      </div>
    </div>
  );
}

export default NovaTarefa;

