import React, {useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Garantir que a classe 'dark-mode' seja sempre aplicada no carregamento
    document.body.classList.add('dark-mode');
  }, []);


  return (
    <div className="App2">
      {/* Formulário */}
      <form>
          <h1 id='01' className="flex flex-row justify-center text-blue-600 text-5xl">Agendamento de consultas</h1>
          <p className='flex flex row justify-center text-red-500'>\!/
          </p>
          <div className="flex flex-col justify-center container">
          <input className="bg-blue-600 text-gray-900 text-2xl" placeholder="Digite seu nome:" />
          <p>\!/
          </p>
          <input className="bg-blue-600 text-gray-900 text-2xl" type="number" placeholder="Digite seu telefone:" />
          <p>\!/
          </p>
          <input className="bg-blue-600 text-gray-900 text-2xl" type="time" placeholder="Data da consulta:" />
          <p>\!/
          </p>
          <input type='date' className='bg-blue-600' placeholder='Data da consulta:' />
          <p>\!/
          </p>
          <button type='submit' className="bg-blue-500 hover:bg-blue-700 justify-center">
            Send
          </button>
          </div>
      </form>
    </div>
  );
}

export default App;
