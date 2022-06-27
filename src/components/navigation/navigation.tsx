import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavBar = styled.nav`
        display: flex;
    `;
const StyledLink = styled(Link)`
        border: 1px solid black;
        flex: 1;
        text-decoration: none;
        color: black;
    `;

export default function Navigation() {
    return <>
        <NavBar>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/data">Data Entry</StyledLink>
            <StyledLink to="/seating">Seating View</StyledLink>
        </NavBar>
    </>;
}