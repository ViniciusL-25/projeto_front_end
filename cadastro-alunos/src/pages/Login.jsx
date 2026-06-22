import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import '../pages/Cadastro';



function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm()
    const entrar = data => {
        console.log("Dados enviados", data)
    }
    
    return(
<div className="login-container">
    <div className="body-card" >
        <div>
        
            <main>
                <div className="card-titulo" >

                    <h1>Login</h1>
                    <div className="line-titulo"></div>

                    <div className="body" >

                        <form onSubmit={handleSubmit(entrar)}>

                            <div className="fields-email">
                                <label>Email</label>
                                <input 
                                type="email" {...register ("email", {
                                    required: "O email é obrigatório",
                                    pattern: {
                                         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                         message: "Insira um formato de email válido"
                                    }
                                })}
                                />
                                 {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
                            </div>
                            
                             <div className="fields-senha">
                                <label>Senha</label>
                                <input 
                                type="password" {...register ("senha",{
                                    required: "A senha é obrigatória",
                                    minLength: {
                                        value: 6,
                                        message: "A senha deve ter no mínimo 6 caracteres"
                                    },
                                    pattern:{
                                        value: /^(?!\s*$).+/, 
                                        message: "A senha não pode conter apenas espaços em branco"
                                    }
                                })}
                                />
                                 {errors.senha && <span style={{ color: 'red' }}>{errors.senha.message}</span>}

                            </div>

                            <div className="btn-login">
                                <button type="submit">Entrar</button>
                            </div>

                            <p>
                                Não possui uma conta? <Link to="/cadastro">Cadastra-se</Link>

                            </p>
                            
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