import { FiHeart, FiChevronRight, FiMinus, FiPlus, FiEdit2, FiUploadCloud } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import { ButtonIcon } from "../buttonIcon";
import { Button } from "../button";
import { useAuth } from '../../hooks/auth';
import { api } from "../../services/api";

export function Dish( {data} ){
    const {user} = useAuth();
    const dishImage =  data.img ? `${ api.defaults.baseURL }/files/${ data.img }` : "";

    async function handleFav(id){
        await api.post(`/favorite/${id}`);
    }
    return(
        <Container
            key={data.id}
        >
            <div className="dishImage">
                <div></div>
                {
                    !data.img ? 
                    <FiUploadCloud className="uploadImage"/>
                    :
                    <img src={dishImage}/>
                }
                {
                    user.role == "admin" ? 
                    <Link to={`/editDish/${data.id}`}><ButtonIcon icon={FiEdit2}/></Link> 
                    : 
                    (data.favorite ? <ButtonIcon fav icon={FiHeart}/> : <ButtonIcon icon={FiHeart} onClick={() => handleFav(data.id)}/>)
                }
            </div>
            <Link to={`/dish/${data.value}`}>{data.name}<FiChevronRight/></Link>
            <h3>R$ {data.value}</h3>
            {
                user.role == "admin" ? <></>: 
                <>
                    <div className="dishCounter"><ButtonIcon icon={FiMinus}/><p> 1 </p><ButtonIcon icon={FiPlus}/></div>
                    <Button title="Incluir"/>
                </>
            }
        </Container>
    )
}