import { FiHexagon } from "react-icons/fi";
import { Container, Form } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { useState } from "react";
import { api } from "../../services/api";

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSignUp() {
        if ( !name || !email || !password ){
            return alert("Nome , senha e email são obrigatórios!");
        }
        
        api.post("users", { name, email, password })
        .then(() => {
            alert("usuário cadastrado com sucesso!");
            navigate("/");
        }).catch( error => {
            const message = error.response.data.message;
            if( message ){
                alert( message );
            } else {
                alert( "Não foi possível cadastrar!" );
            }
        })
    }
    return(
        <Container >
            <h1><FiHexagon /> food explorer</h1>
            <Form>
                <label>Seu nome
                    <Input 
                        name="name"
                        placeholder="Exemplo: Maria da Silva"
                        type="text"
                        required
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label>Email
                    <Input 
                        name="email"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="text"
                        required
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                
                <label>Senha
                    <Input 
                        name="password"
                        placeholder="No mínimo 6 caracteres"
                        type="password"
                        required
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <Button title="Criar conta" onClick={handleSignUp}/>
                <Link to="/">Já tenho uma conta</Link>
            </Form>
        </Container>
    )
}