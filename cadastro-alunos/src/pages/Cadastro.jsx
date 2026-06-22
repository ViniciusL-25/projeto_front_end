import { useState } from 'react';
import '../styles/Cadastro.css';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    idade: '',
    senha: ''
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 🔎 verifica se email já existe
  const checkEmailExists = async (email) => {
    try {
      const res = await fetch(`http://localhost:3000/alunos?email=${email}`);
      const data = await res.json();
      return data.length > 0;
    } catch (error) {
      console.error('Erro ao verificar email:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // 🔒 validação de email duplicado
    const emailExiste = await checkEmailExists(formData.email);

    if (emailExiste) {
      alert('Esse e-mail já está cadastrado!');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/alunos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        navigate('/login');
      } else {
        alert('Erro ao cadastrar usuário');
      }
    } catch (error) {
      console.error('Erro no cadastro:', error);
      alert('Erro de conexão com o servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro de Alunos</h2>

      <form onSubmit={handleSubmit} className="cadastro-form">
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Idade:</label>
          <input
            type="number"
            name="idade"
            value={formData.idade}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-enviar" disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}