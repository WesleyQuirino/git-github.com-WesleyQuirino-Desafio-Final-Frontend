import { Container, Main, Form, Markers, MarkersList } from "./style";
import { FiChevronLeft, FiUpload} from "react-icons/fi";
import { Link, Navigate } from "react-router-dom";
import { Input } from "../../components/input";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Marker } from "../../components/marker";
import { Button } from "../../components/button";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { api } from "../../services/api";

export function AddDish(){
    const { user } = useAuth();
    const [ name, setName ] = useState();
    const [ description, setDescription ] = useState();
    const [ category_id, setCategory_id ] = useState();
    const [ img, setImg ] = useState();
    const [ value, setValue ] = useState();
    const [ ingredients, setIngredients ] = useState([]);
    const [ newIngredient, setNewIngredient ] = useState("");

    async function handleNewDish() {
        try {
            const response = await api.post("/dishes", {
                name, description, value, category_id, ingredients
            });

            const dishId = response.data.id; 

            if (img) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("dishImage", img);
                await api.patch(`/dishes/dishImage/${dishId}`, fileUploadForm);
            }
            
            alert("Prato criado com sucesso!");
    
        } catch (error) {
            if (error.response && error.response.data) {
                alert(error.response.data.message);
            } else {
                alert("Algo deu errado");
            }
        }
    }
    
    function handleDishImg(event){
        const file = event.target.files[0];
        setImg(file);
    }

    function handleIngredients() {
        const trimmedIngredient = newIngredient.trim();
        if (!trimmedIngredient || ingredients.includes(trimmedIngredient)) {
            return false;
        }
        setIngredients(prev => [...prev, trimmedIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngridients(ingredientToRemove) {
        setIngredients(prev => prev.filter(ingredient => ingredient != ingredientToRemove));
    }
    return(
        <Container >
            <Header/>
            <Main><Link to={"/"}><FiChevronLeft size={24}/>Voltar</Link></Main>
            <h2>Novo Prato</h2>
            <Form>
                <label
                    htmlFor="dishFile"
                    id="dishImg"
                >
                    <p>Imagem do prato</p>
                    <p id="p-input"><FiUpload/> Selecione imagem</p>
                    <input 
                        type="file" 
                        name="dishFile"
                        id="dishFile"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleDishImg}
                    />
                </label>
                <label htmlFor="dishName">
                    <p>Nome</p>
                    <Input 
                        name="dishName"
                        type="text"
                        id="dishName"
                        placeholder="Ex: Salada Ceasar"
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label htmlFor="dishCategory">
                    <p>Categoria</p>
                    <select name="dishCategory" id="dishCategory" onChange={e => setCategory_id(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="refeição">Refeição</option>
                        <option value="bebida">Bebidas</option>
                        <option value="sobremesa">Sobremesa</option>
                    </select>
                </label>
                <label>
                    <p>Ingredientes</p>
                    <Markers>
                        <MarkersList>
                            {
                                ingredients &&
                                ingredients.map((ingredient, index) => (
                                    <Marker key={String(index)} value={ingredient} onClick={e => handleRemoveIngridients(ingredient)}/>
                                ))
                            }
                            <Marker 
                                placeholder="Novo marcador" 
                                isNew 
                                value={newIngredient} 
                                onChange={e => setNewIngredient(e.target.value)} 
                                onClick={handleIngredients}
                                onKeyDown={e => e.key === 'Enter' && handleIngridients()}
                            />
                        </MarkersList>
                    </Markers>
                </label>
                <label htmlFor="dishPrice">
                    <p>Preço</p>
                    <Input 
                        name="dishPrice"
                        type="number"
                        id="dishPrice"
                        placeholder="R$ 00,00"
                        onChange={e => setValue(e.target.value)}
                    />
                </label>
                <label htmlFor="dishDesc">
                    <p>Descrição</p>
                    <textarea name="dishDesc" id="dishDesc" onChange={e => setDescription(e.target.value)}></textarea>
                </label>
                <div className="buttons">
                    <Button title="Salvar Alterações" onClick={ handleNewDish }/>
                </div>
            </Form>
            <Footer/>
        </Container>
    )
}