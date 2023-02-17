import { Link } from "react-router-dom";
import styled from "styled-components";

export const SSidebar = styled.div`
    background: ${({ theme }) => theme.bg};
    height: 100vh;

    position: relative;
`;

export const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
`;

export const SLinkContainer = styled.div`
`;

export const SLink = styled(Link)`

`;

