import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/Login.css';



function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm()
    
    return(
<div className="login-container">
    <div className="body-card" >
        <div>
        
            <main>
                <div className="card-titulo" >

                    <h1>Login</h1>
                    <div className="line-titulo"></div>

                    <div className="body" >

                        <form>
                            <div className="fields">
                                <label>Email</label>
                                <input type="email" />
                            </div>
                            
                             <div className="fields">
                                <label>Senha</label>
                                <input type="password" />
                            </div>

                            <div className="btn-login">
                                <button type="submit">Entrar</button>
                            </div>
                            
                        </form>

                    </div>

                </div>
            </main>
        </div>
    
    </div>
</div>
    )
}

export default Login;