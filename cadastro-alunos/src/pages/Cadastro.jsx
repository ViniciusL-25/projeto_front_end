import { useState } from 'react';
import './Cadastro.css'

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    idade: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados para o backend:', formData);
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro de Alunos</h2>
      <form onSubmit={handleSubmit} className="cadastro-form">
        <div className="form-group">
          <label>Nome:</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Idade:</label>
          <input type="number" name="idade" value={formData.idade} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Senha:</label>
          <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn-enviar">Cadastrar</button>
      </form>
    </div>
  );
}