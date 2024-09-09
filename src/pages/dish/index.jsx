import { FiChevronLeft, FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container, Main, Content, ContentSeparator } from "./style";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { ButtonIcon } from "../../components/buttonIcon";
import { Button } from "../../components/button";

export function Dish(){
    const data = {
        admin: true
    }
    return(
        <Container >
            <Header data={data}/>
            <Main>
                <Link to={"/"}><FiChevronLeft size={30}/>Voltar</Link>
                <Content>
                    <div className="dishImage">
                        <img src="src/assets/DishBig.png"/>
                    </div>
                    <ContentSeparator>
                        <div className="dishText">
                            <h2>Salada Ravanello</h2>
                            <p>
                                Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
                            </p>
                        </div>
                        <div className="dishTags">
                            <p>alface</p>
                            <p>cebola</p>
                            <p>pão naan</p>
                            <p>pepino</p>
                        </div>
                        <div className="dishController">
                            {
                                data.admin ? <Link to="/editDish">Editar Prato</Link> :
                                <>
                                    <div className="dishCounter">
                                        <ButtonIcon icon={FiMinus}/><p>02</p><ButtonIcon icon={FiPlus}/>
                                    </div>
                                    <Link type="button"><img src="src/assets/receipt.svg"/>pedir - R$ 47,40</Link>
                                </>
                            }
                        </div>
                    </ContentSeparator>
                </Content>
            </Main>
            <Footer/>
        </Container>
    )
}