import { Container, Sumary, Main, Section, Dishes } from "./style";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Dish } from "../../components/dish";
import { useAuth } from '../../hooks/auth';
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function Home(){
    const {user} = useAuth();
    const [dishes, setDishes] = useState([]);
    const [userDishes, setUserDishes] = useState([]);
    const [filteredDishes, setFilteredDishes] = useState([]);
    const [search, setSearch] = useState("");
    const [userFavoriteDishes, setUserFavoriteDishes] = useState([]);

    async function getDishes(){
        const response = await api.get("/dishes");
        setDishes(response.data);
        getUserDishes(dishes);
        getUserFavoriteDishes(dishes);
        
    }

    function getUserDishes(data) {
        const dataUserDishes = data.filter(dish => dish.user_id === user.id);
        if (dataUserDishes.length > 0) {
            setUserDishes(dataUserDishes);
        }
    }
    
    function getUserFavoriteDishes(data) {
        const dataUserFavoriteDishes = data.filter(dish => dish.favorite == true);
        if (dataUserFavoriteDishes.length > 0) {
            setUserFavoriteDishes(dataUserFavoriteDishes);
        }
    }
    useEffect(() => {
        getDishes();
    }, []);

    useEffect(() => {
        if (search) {
            const lowerCaseSearch = search.toLowerCase();
            
            const filteredDishes = dishes.filter(dish => 
                dish.name.toLowerCase().includes(lowerCaseSearch) ||
                (
                    dish.ingredients && dish.ingredients.some(ingredient => 
                    ingredient.toLowerCase().includes(lowerCaseSearch))
                )
            );
    
            if (filteredDishes.length === 0) {
                alert("Prato não encontrado!");
            } else {
                setFilteredDishes(filteredDishes);
            }
        } else {
            setFilteredDishes([]);
            getDishes();
        }
    }, [search, dishes]);
    
    return(
        <Container >
            <Header handleSearch={ setSearch }/>
            <Main>
                <Sumary>
                    <div className="home-img"><div></div></div>
                    <div className="home-sub">
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </Sumary>
                <Section>
                    {
                        filteredDishes.length > 0 && 
                        <>
                            <h2>Busca</h2>
                            <Dishes>
                                {
                                    filteredDishes.map( dish => {
                                        return (
                                            <Dish key={dish.id} data={dish}/>
                                        )
                                    })
                                }
                            </Dishes>
                        </>
                    }
                    {
                        userDishes.length > 0 && 
                        <>
                            <h2>Meus Pratos</h2>
                            <Dishes>
                                {
                                    userDishes.map( dish => {
                                        if(dish.user_id == user.id){
                                            return (
                                                <Dish key={dish.id} data={dish}/>
                                            )
                                        }
                                    })
                                }
                            </Dishes>
                        </>
                    }
                    {
                        userFavoriteDishes.length > 0 && 
                        <>
                            <h2>Favoritos</h2>
                            <Dishes>
                                {
                                    userFavoriteDishes.map( dish => (
                                        <Dish key={dish.id} data={dish}/>
                                    ))
                                }
                            </Dishes>
                        </>
                    }
                    <h2>Refeições</h2>
                    <Dishes>
                        {
                            dishes &&
                            dishes.map( dish => {
                                if(dish.category_id == "refeição"){
                                    return (
                                        <Dish key={dish.id} data={dish}/>
                                    )
                                }
                            })
                        }
                    </Dishes>
                    <h2>Sobremesa</h2>
                    <Dishes>
                        {
                            dishes &&
                            dishes.map( dish => {
                                if(dish.category_id == "sobremesa"){
                                    return (
                                        <Dish key={dish.id} data={dish}/>
                                    )
                                }
                            })
                        }
                    </Dishes>
                    <h2>Bebidas</h2>
                    <Dishes>
                        {
                            dishes &&
                            dishes.map( dish => {
                                if(dish.category_id == "bebida"){
                                    return (
                                        <Dish key={dish.id} data={dish}/>
                                    )
                                }
                            })
                        }
                    </Dishes>
                </Section>
            </Main>
            <Footer />
        </Container>
    )
}