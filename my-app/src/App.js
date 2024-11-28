import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Garantir que a classe 'dark-mode' seja sempre aplicada no carregamento
    document.body.classList.add('dark-mode');
  }, []);

  function enviarDados(event) {

    // Coleta os dados do formulário
    const dados = {
        nome: document.getElementById('pacient').value,
        telefone: document.getElementById('number').value,
        hora: document.getElementById('hour').value,
        data: document.getElementById('day').value,
        descrição: document.getElementById('motivo').value,
    };

    const jsonDados = JSON.stringify(dados);
    console.log("Dados enviados:", jsonDados);

    fetch('http://localhost:8000/enviar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonDados,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na resposta do servidor');
        }
        return response.json();
    })
    .then(data => {
        console.log('Resposta do servidor:', data);
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
    });
}

  // Estados para os inputs
  const [pacient, setPacient] = useState('');
  const [motivo, setMotivo] = useState('');
  const [number, setNumber] = useState('');
  const [hour, setHour] = useState('');
  const [day, setDay] = useState('');

  

  return (
    <div className="App2">
      <form onSubmit={enviarDados}>
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
            id='motivo'
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
