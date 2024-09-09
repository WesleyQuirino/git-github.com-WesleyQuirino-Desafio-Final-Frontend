import styled from "styled-components";

export const Container = styled.button`
    padding: 5px 16px;
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE2};
    background: ${({ theme, $pink }) => $pink ? theme.COLORS.BACKGROUND4 : theme.COLORS.BACKGROUND2};
    border-radius: 8px;
    border: none;
`;