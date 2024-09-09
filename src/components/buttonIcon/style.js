import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: var(--light-light-100);
    width: 100%;
    border: none;
    background-color: transparent;
    >:hover{
        cursor: pointer;
    }
    >svg{
        color: ${({ theme, $fav }) => $fav ? theme.COLORS.tintscake200 : theme.COLORS.lightlight100};
        fill: ${({ theme, $fav }) => $fav ? theme.COLORS.tintscake200 : "transparent"};
    }
`