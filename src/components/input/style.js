import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    gap: 1.4rem;
    padding: 0 1.6rem;
    height: fit-content;
    width: 100%;

    border-radius: 0.8rem;
    background-color: var(--dark-dark-900);
    > input{
        padding: 1.6rem;
        width: 100%;
        color: var(--light-light-400);
        background-color: var(--dark-dark-900);
        outline: none;
        &::placeholder{
            color: var(--light-light-500);
        }
    }
`