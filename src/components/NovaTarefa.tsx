import './NovaTarefa.css';
import type { FormEvent, ChangeEvent } from 'react';
import { useState } from 'react';

interface Tarefa {
  descricao: string;
  horario: string;
}

function NovaTarefa() {
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
    <>
      <form className="nova-tarefa" onSubmit={handleSubmit}>
        <textarea name="descricao"  id="descricao"  cols={30}  rows={10}  value={descricao}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescricao(e.target.value)}  placeholder="Descreva sua tarefa...">

        </textarea>
        <br />

        <select className="horarios" value={horario} onChange={(e: ChangeEvent<HTMLSelectElement>) => setHorario(e.target.value)} >
          <option value="" disabled hidden>Escolha um horário</option>
          <option value="Manhã">Manhã</option>
          <option value="Tarde">Tarde</option>
          <option value="Noite">Noite</option>
        </select>

        <button type="submit">Adicionar</button>
      </form>

      <ul className="lista-tarefas">
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            <strong>{tarefa.horario}</strong>: {tarefa.descricao}
          </li>
        ))}
      </ul>
    </>
  );
}

export default NovaTarefa;