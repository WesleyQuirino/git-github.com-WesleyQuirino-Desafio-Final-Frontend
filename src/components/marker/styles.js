import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding-right: .8rem;

    color: var(--light-light-100);
    font-size: 1rem;
    border-radius: 10px;

    > input {
        width: 100%;
        padding: 1rem;
        color: var(--light-light-100);
        background: transparent;

        border: none;

        &::placeholder {
            color: var(--light-light-100);
        }
    }

    > button {
        display: flex;
        align-items: center;
        border: none;
        background: none;
        
        svg {
            color: var(--light-light-100);
        }
    }

`;