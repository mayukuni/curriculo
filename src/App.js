import React from 'react';
import './App.css';

function App() {
  return (  
    <div className="bg-slate-100 md:bg-slate-200 lg:bg-slate-300">
      <header className="lg:flex">
        <div className="text-sm">
          <p className="text-gray-500">São Paulo, SP - Brasil</p>
          <p className="text-red-400">cinthya.m.kuniyoshi@gmail.com</p>
        </div>

        <div className="font-['Source Code Pro'] mt-3 font-mono">
          <h1 className="text-3xl text-gray-700">Cinthya Mayumi Kuniyoshi</h1>
          <h2 className="text-gray-500">Desenvolvedora Web Full Stack</h2>
        </div>
        <hr className="h-1 bg-gray-700 border-0 "></hr>

        <div className="text-gray-500 flex flex-row justify-around font-mono text-sm m-1 underline">
          <a href="https://www.linkedin.com/in/mayumikuniyoshi/">Linkedin</a>
          <a href="https://github.com/mayukuni">Github</a>
        </div>
      </header>

      <div>
        <h1>Objetivo Profissional</h1>
        <p>Atualmente concluindo o curso de Desenvolvimento Web na Trybe e iniciando o curso de Ciência da Computação na faculdade Impacta. Apaixonada por tecnologia desde criança, estou em busca de uma oportunidade em uma empresa que preza pelo bom ambiente de trabalho e que apoia a diversidade, um lugar em que eu possa aprimorar minhas hardskills e também minhas habilidades de comunicação e trabalho em equipe.</p>
      </div>

      <div>
        <h1>Formação</h1>
        <p>Desenvolvimento Web Full Stack - Trybe - conclusão em Fevereiro de 2023</p>
        <p>Ciência da Computação - Impacta - Em andamento</p>
      </div>

      <div>
        <h1>Principais tecnologias</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>React</li>
          <li>NodeJS</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Sequelize</li>
          <li>Docker</li>
          <li>Git</li>
        </ul>
      </div>

      <div>
        <h1>Idiomas</h1>
        <ul>
          <li>Inglês avançado</li>
          <li>Espanhol básico</li>
          <li>Japonês básico</li>
        </ul>
      </div>

      <div>
        <h1>Principais projetos</h1>
        <ul>
          <li>Pixels Art
            <ul>
              <li>https://github.com/mayukuni/pixels-art</li>
              <li>Tecnologias utilizadas</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
