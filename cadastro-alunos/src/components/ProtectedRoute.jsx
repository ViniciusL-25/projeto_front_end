import { Navigate } from 'react-router-dom';

function ProtectedRoutes({ children }) {
    const usuario = localStorage.getItem('usuarioLogado');

    if (!usuario) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default ProtectedRoutes;