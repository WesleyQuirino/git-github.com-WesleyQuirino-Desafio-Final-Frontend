import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    > h2{
        padding: 3rem 3rem 0;
        font-size: 2.4rem;
        font-weight: 400;
        color: var(--light-light-300);
    }
`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 3rem 3rem 0;
    color: var(--light-light-300);

    >a{
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        font-weight: 400;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 3rem;
    gap: 2rem;
    color: var(--light-light-300);
    
    >label div{
        background-color: var(--dark-dark-800);
    }
    >label div input, label textarea{
        width: 100%;
        font-size: 1.6rem;
        color: var(--light-light-400);

        background-color: var(--dark-dark-800);
        border-radius: 0.8rem;
        &::placeholder{
            color: var(--light-light-500);
        }
        resize: none;
    }
    > label p{
        font-size: 1.6rem;
        padding: 0.5rem 0;
    }

    >#dishImg {
        align-items: center;
        font-size: 1.6rem;
        gap: 1.4rem;
        width: 100%;
        color: var(--light-light-400);
    }

    >#dishImg #dishFile{
        display: none;
    }

    >#dishImg{
        >p:first-of-type{
            display: none;
        }
        >#p-input{
            padding: 1.6rem;
            height: 5.7rem;
            width: 100%;
            border-radius: 0.8rem;
            background-color: var(--dark-dark-800);
            color: var(--light-light-100);
        }
    }

    >label select{
        font-size: 1.6rem;
        height: 5.7rem;
        padding: 1.6rem;
        width: 100%;

        border-radius: 0.8rem;
        background-color: var(--dark-dark-900);
        color: var(--light-light-400);
    }
    
    >.salvar{
        background-color: var(--dark-dark-900);
    }

    >label textarea{
        padding: 1.6rem;
    }

    @media (min-width: 768px) {
        display: grid;
        grid-template-areas: 'image dishName dishName category'
                             'ingridient ingridient ingridient preco'
                             'descricao descricao descricao descricao'
                             'area area excluir salvar';
        
        >#dishImg{
            >p:first-of-type{
                display: flex;
            }
        }
        >label:nth-child(2){
            grid-area: dishName;
        }
        >label:nth-child(4){
            grid-area: ingridient;
        }
        >label:nth-child(6){
            grid-area: descricao;
        }
        >.excluir{
            grid-area: excluir;
        }
        >.salvar{
            grid-area: salvar;
        }
    }
`
export const Markers = styled.div` 
    border-radius: 0.8rem;
`

export const MarkersList = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: .5rem 1.6rem;
    border-radius: 0.8rem;
    gap: 1rem;
    background-color: var(--dark-dark-800);
    
    >.novo{
        border: 1px dashed var(--light-light-600);
        >input{
            background-color: transparent;
        }
    }
    >.excluir{
        background: var(--light-light-600);
        border: none;
        >input{
            background-color: transparent;
        }
    }
`