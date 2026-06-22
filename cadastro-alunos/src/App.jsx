import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import ProtectedRoutes from './components/ProtectedRoute';



function App(){
  return (
  <>
  <Routes>
  <Route path="/" element={<Navigate to="/login" replace />} />

    <Route path="/login" element={<Login />} />
    <Route path="/cadastro" element={<Cadastro />} />
    <Route path="/home" element={
      <ProtectedRoutes>
        <Home />
      </ProtectedRoutes>
    }
    />
  </Routes>
  </>
);
}

export default App;