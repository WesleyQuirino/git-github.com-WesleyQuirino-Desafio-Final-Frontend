import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    justify-items: center;
    gap: 1rem;
    min-width: 26rem;
    padding: 2rem;

    border-radius: 0.8rem;
    border: 1px solid var(--dark-dark-300);
    background-color: var(--dark-dark-200);

    text-align: center;
    color: var(--light-light-700);
    >.dishImage{
        display: grid;
        align-items: flex-start;
        justify-content: space-between;
        width: 16rem;
        grid-template-columns: 2rem auto 2rem;
        >.uploadImage{
            font-size: 10rem;
            color: var(--tints-cake-200);
        }
        >img{
            width:100%;
            background-color: var(--dark-dark-200);
        }
    }
    >h3{
        font-size: 1.6rem;
        font-weight: 400;
        color: var(--tints-cake-200);
    }
    >a{
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        font-weight: 400;
        color: var(--light-light-300);
    }
    >span{
        font-size: 1.2rem;
        color: var(--light-light-100);
    }
    >.dishCounter{
        display: flex;
        align-items: center;
        gap: 1.4rem;
        font-size: 1.6rem;
        color: var(--light-light-300);
        & button{
            color: var(--light-light-100);
        }
    }
`