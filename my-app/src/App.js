import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Garantir que a classe 'dark-mode' seja sempre aplicada no carregamento
    document.body.classList.add('dark-mode');
  }, []);

  // Estados para os inputs
  const [pacient, setPacient] = useState('');
  const [motivo, setMotivo] = useState('');
  const [number, setNumber] = useState('');
  const [hour, setHour] = useState('');
  const [day, setDay] = useState('');

  // Função para lidar com o envio do formulário
  function handleSubmit(event) {
    event.preventDefault();  // Impede o comportamento padrão do form (evita recarregar a página)
    
    // Exemplo de como acessar os dados do formulário
    console.log(`Dados inseridos: \nNome: ${pacient} \nMotivo: ${motivo} \nTelefone: ${number} \nHora: ${hour} \nData: ${day}`);
    alert(`Dados inseridos: \nNome: ${pacient} \nMotivo: ${motivo} \nTelefone: ${number} \nHora: ${hour} \nData: ${day}`);
    
    // Limpa os campos após envio (opcional)
    setPacient('');
    setMotivo('');
    setNumber('');
    setHour('');
    setDay('');
  }

  return (
    <div className="App2">
      <form onSubmit={handleSubmit}>
        <h1 id='01' className="flex flex-row justify-center text-blue-600 text-5xl">
          Agendamento de consultas
        </h1>
        <p className='flex flex-row justify-center text-red-500'>\!/</p>

        <div className="flex flex-col justify-center container">
          <input
            type='text'
            id='pacient'
            className="bg-blue-600 text-gray-900 text-2xl"
            placeholder="Digite seu nome:"
            value={pacient}
            onChange={(e) => setPacient(e.target.value)}
          />
          <p>\!/</p>

          <input
            type='text'
            className='bg-blue-600 text-gray-900 text-2xl'
            placeholder='Motivo da consulta:'
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
          />
          <p>\!/</p>

          <input
            id='number'
            className="bg-blue-600 text-gray-900 text-2xl"
            type="number"
            placeholder="Digite seu telefone:"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <p>\!/</p>

          <input
            id='hour'
            className="bg-blue-600 text-gray-900 text-2xl"
            type="time"
            placeholder="Hora da consulta:"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          />
          <p>\!/</p>

          <input
            id='day'
            type='date'
            className='bg-blue-600 text-gray-900'
            placeholder='Data da consulta:'
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
          <p>\!/</p>

          <button type='submit' className="bg-blue-500 hover:bg-blue-700 justify-center">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
