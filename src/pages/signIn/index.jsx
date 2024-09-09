import { FiHexagon } from "react-icons/fi";
import { Container, Form } from "./style";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn(){
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const { signIn } = useAuth();

    async function handleSignIn(){
        await signIn({email, password});
    }

    return(
        <Container >
            <h1><FiHexagon /> food explorer</h1>
            <Form>
                <label>Email
                    <Input 
                        name="email"
                        placeholder="E-mail"
                        type="text"
                        id="email"
                        onChange={e=> setEmail(e.target.value)}
                    />
                </label>
                <label>Senha
                    <Input 
                        name="password"
                        placeholder="Senha"
                        type="password"
                        id="password"
                        onChange={e=> setPassword(e.target.value)}
                    />
                </label>
                <Button title="Entrar" onClick={ handleSignIn } />
                <Link to="/register">Criar uma conta</Link>
            </Form>
        </Container>
    )
}