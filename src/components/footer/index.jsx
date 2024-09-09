import { FiHexagon } from "react-icons/fi";
import { Container } from "./style";

export function Footer(){
    return(
        <Container>
            <h3>
                <FiHexagon />
                food explorer
            </h3>
            <span>© {new Date().getFullYear()} - Todos os direitos reservados.</span>
        </Container>
    )
}