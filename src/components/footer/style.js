import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 2.3rem 4rem;
    margin: auto 0 0;
    width: 100%;
    color: var(--light-light-700);
    background-color: var(--dark-dark-600);
    >h3{
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.6rem;
        >svg{
            height: 2rem;
            fill:  var(--light-light-700);
        }
    }
    >span{
        font-size: 1.2rem;
        color: var(--light-light-100);
    }
`