import { FiSearch, FiX, FiHexagon, FiMenu, FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navigate, Search } from "./style";
import { Input } from "../input";
import { ButtonIcon } from "../buttonIcon";
import { useAuth } from "../../hooks/auth";

export function Header({handleSearch}){
    const [ menu, setMenu ] = useState(false);
    const [ receipt, setReceipt ] = useState("0");
    const { signOut, user } = useAuth();

    async function handleSignOut() {
        await signOut();
    }
    return(
        <Container>
                {   
                    menu ?
                        <>
                        <Navigate>
                            <ButtonIcon icon={FiX} onClick={e => setMenu(false)}/>
                            <h2>Menu</h2>
                            <ButtonIcon icon={FiLogOut}/>
                        </Navigate>
                        <Search>
                            <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes" onChange={e => {handleSearch(e.target.value)}}/>
                            { user.role == "admin" && <Link to="/addDish">Novo prato</Link> }
                            <Link to="/">Sair</Link>
                        </Search>
                        </>
                        :
                        <Navigate>
                            <ButtonIcon icon={FiMenu} onClick={e => setMenu(true)}/>
                            <h2><FiHexagon /> food explorer { user.role == "admin" && <span>admin</span>}</h2>
                            <Input icon={FiSearch} placeholder=" Busque por pratos ou ingredientes" onChange={e => {handleSearch(e.target.value)}}/>
                            {
                                user.role == "admin" ?
                                    <Link type="button" className="desktop" to="/addDish"><p>Novo Prato</p></Link>
                                :
                                <>
                                    <Link type="button" className="mobile"><img src="src/assets/receipt.svg"/><span>{receipt}</span></Link>
                                    <Link type="button" className="desktop"><img src="src/assets/receipt.svg"/><span>Pedido {receipt}</span></Link>
                                </>
                            }
                            <ButtonIcon icon={FiLogOut} size={34} onClick={handleSignOut}/>
                        </Navigate>
                }
        </Container>
    )
}