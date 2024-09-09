import { styled } from "styled-components";

export const Container = styled.div`
    display: grid;
    align-items: center;
    align-content: center;
    gap: 7rem;

    height: 100vh;
    padding: 2.4rem 6rem;

    h1{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        
        font-size: 3.8rem;
        font-weight: 500;
        color: var(--light-light-100);
        > svg{
            height: 4rem;
            fill: var(--tints-cake-100);
            color: var(--tints-cake-100);
        }
    }
    >button:hover{
        cursor: pointer;
    }

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`
export const Form = styled.form`
    display: grid;
    align-items: center;
    align-content: center;
    gap: 3.2rem;
    >input{
        background-color: var(--dark-dark-500);
    }
    >label{
        font-size: 1.6rem;
        color: var(--light-light-100);
    }
    >a{
        text-align: center;
        font-size: 1.6rem;
    }
`