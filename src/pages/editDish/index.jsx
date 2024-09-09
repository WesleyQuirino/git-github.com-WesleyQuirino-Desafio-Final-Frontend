import { Container, Main, Form, Markers, MarkersList } from "./style";
import { useNavigate, useParams } from 'react-router-dom';
import { FiChevronLeft, FiUpload} from "react-icons/fi";
import { Link } from "react-router-dom";
import { Input } from "../../components/input";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Marker } from "../../components/marker";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function EditDish(){
    const { id } = useParams();
    const [ dish, setDish ] = useState();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [ name, setName ] = useState();
    const [ description, setDescription ] = useState();
    const [ category_id, setCategory_id ] = useState();
    const [ img, setImg ] = useState();
    const [ value, setValue ] = useState();
    const [ ingredients, setIngredients ] = useState([]);
    const [ newIngredient, setNewIngredient ] = useState("");

    async function handleDishUpdate() {
        try {
            await api.put(`/dishes/${id}`, {
                name, description, value, category_id, ingredients
            });

            if (img) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("dishImage", img);
                await api.patch(`/dishes/dishImage/${id}`, fileUploadForm);
            }
            
            alert("Prato Atualizado com sucesso!");
    
        } catch (error) {
            if (error.response && error.response.data) {
                alert(error.response.data.message);
            } else {
                alert("Algo deu errado");
            }
        }
    }
    
    async function getDish() {
        const response = await api.get(`/dishes/${id}`);
        if (user.id !== response.data.user_id) {
            navigate(`/dish/${id}`);
        } else {
            setDish(response.data);
            setIngredients(response.data.ingredients);
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

    function handleRemoveIngredient(ingredientToRemove) {
        setIngredients(prev => prev.filter( ingredient => ingredient!= ingredientToRemove))
    }

    async function handleDeleteDish(){
        try{
            await api.delete(`/dishes/${id}`);
            navigate("/");
            alert("Prato deletado com sucesso!");
        } catch(error){
            if(error){
                alert(error.response.data.message);
            }
            alert("Algo deu errado!");
        }
    }

    useEffect(() => {
        getDish();
    }, [id]);

    useEffect(() => {
        if (dish?.description) {
            setDescription(dish.description);
        }
    }, [dish?.description]);
    return(
        <Container >
            <Header/>
            <Main>
                <Link to={"/"}><FiChevronLeft size={24}/>Voltar</Link>
            </Main>
            <h2>Editar Prato</h2>
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
                        accept="image/png, image/jpeg"
                        onChange={handleDishImg}
                    />
                </label>
                <label htmlFor="dishName">
                    <p>Nome</p>
                    <Input 
                        name="dishName"
                        type="text"
                        id="dishName"
                        placeholder={dish?.name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label htmlFor="dishCategory">
                    <p>Categoria</p>
                    <select name="dishCategory" id="dishCategory" value={dish?.category_id || ""} onChange={e => setCategory_id(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="refeição">Refeição</option>
                        <option value="bebida">Bebida</option>
                        <option value="sobremesa">Sobremesa</option>
                    </select>
                </label>
                <label>
                    <p>Ingredientes</p>
                    <Markers>
                        <MarkersList>
                        {
                            ingredients.map((ingredient, index) => (
                                <Marker key={index} value={ingredient} onClick={e => handleRemoveIngredient(ingredient)}/>
                            ))
                        }
                            <Marker 
                                placeholder="Novo marcador" 
                                isNew  
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
                        type="text"
                        id="dishPrice"
                        placeholder={dish?.value}
                        onChange={e=> setValue(e.target.value)}
                    />
                </label>
                <label htmlFor="dishDesc">
                    <p>Descrição</p>
                    <textarea 
                        name="dishDesc" 
                        id="dishDesc" 
                        value={description} 
                        onChange={(e) => setDescription( e.target.value )}
                    ></textarea>
                </label>
                <Button title="Excluir" className="excluir" onClick={handleDeleteDish}/>
                <Button title="Salvar Alterações" className="salvar" onClick={handleDishUpdate}/>
            </Form>
            <Footer/>
        </Container>
    )
}