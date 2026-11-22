import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import Timer from './components/Timer';

export default function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Estudar Lifting State Up no React' },
    { id: 2, titulo: 'Praticar useEffect com função de cleanup' },
  ]);

  // Atualiza o título da aba do navegador sempre que a lista de tarefas mudar
  useEffect(() => {
    document.title = `${tarefas.length} tarefas pendentes`;
  }, [tarefas]);

  function adicionarTarefa(titulo) {
    setTarefas([...tarefas, { id: Date.now(), titulo }]);
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((t) => t.id !== id));
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Gerenciador de Tarefas</h1>
      <p className="text-slate-600 mb-6">Semana 11 - Lifting State Up e useEffect ({tarefas.length} tarefas pendentes)</p>

      <Timer />

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <Formulario onAdicionarTarefa={adicionarTarefa} />
        <Lista tarefas={tarefas} onRemoverTarefa={removerTarefa} />
      </div>
    </div>
  );
}
