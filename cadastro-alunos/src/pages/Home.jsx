import { useEffect, useState } from 'react';
import '../styles/Home.css';



function Home() {
  const [alunos, setAlunos] = useState([]);
  console.log(alunos)

  async function carregarAlunos() {
     const response = await fetch('http://localhost:3000/alunos', {
  
  });
   
  const dados = await response.json();
  setAlunos(dados);
  }

  useEffect(() => {
    carregarAlunos();
  }, []);
  
  
    return (
  <>
    <h1>Lista de Alunos</h1>

    <div className="card">
      {alunos.map((aluno) => (
        <div className="card-nei" key={aluno.id}>
          <h3>{aluno.nome}</h3>
          <p>{aluno.email}</p>
          <p>{aluno.idade}</p>
        </div>
      ))}
    </div>
  </>
);
  

}

export default Home;