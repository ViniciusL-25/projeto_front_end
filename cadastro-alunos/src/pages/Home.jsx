import { useEffect, useState } from 'react';
import '../styles/Home.css';
import { useNavigate }from 'react-router-dom';




function Home() {
  const [alunos, setAlunos] = useState([]);
  console.log(alunos)

  const navigate = useNavigate();

  function logout(){
    localStorage.removeItem("usuarioLogado");
    navigate('/login');
  }

  async function excluirAluno(id){
    const response = await fetch (`http://localhost:3000/alunos/${id}`, {
        method: "DELETE",
    })
    await response.json
    if (response.ok){
        carregarAlunos();
    }
    }
  

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

    <button onClick={logout} className="btn-logout">
          Sair da Conta
        </button>

    <div className="card">
      {alunos.map((aluno) => (
        <div className="card-nei" key={aluno.id}>
          <h3>{aluno.nome}</h3>
          <p>{aluno.email}</p>
          <p>{aluno.idade}</p>

        <button onClick={() => excluirAluno(aluno.id)}>
            Excluir 
        </button>

        <button onClick={() => excluirAluno(aluno.id)}>
              Excluir 
            </button>

       

       

        </div>
      ))}
    </div>
  </>
);
  

}

export default Home;