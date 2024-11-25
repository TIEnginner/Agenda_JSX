import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  <form>
    <div class="flex flex-col justify-center">
        <h1 class="text-gray-100 text-3xl">Agendamento de consultas</h1>
        <input class="text-gray-700 text-2xl" placeholder="Digite seu nome:"></input>
        <input class="text-gray-700 text-2xl" type='number' placeholder="Digite seu telefone:"></input>
        <input class="text-gray-700 text-2xl" type='time' placeholder="Hora da consulta:"></input>
      </div>
  </form>

  // Verifica o tema no localStorage ou usa 'false' como padrão
  const savedTheme = localStorage.getItem('darkMode') === 'true';
  const [isDarkMode, setIsDarkMode] = useState(savedTheme);

  // Função para alternar entre os modos
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode); // Salva a preferência no localStorage
  };

  // Adiciona ou remove a classe do tema no body da página
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="App">
      <button onClick={toggleDarkMode}>
        <span className="material-icons">
          {isDarkMode ? 'light_mode' : 'dark_mode'}
        </span>
        {isDarkMode ? ' Modo Claro' : ' Modo Escuro'}
      </button>
    </div>
  );
}
    
export default App;