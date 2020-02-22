import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const NavbarSection = styled.div`
    padding: 5px 0;
    background-color: #fff;
    border-bottom: 1px solid #000;
`

export const Container = styled.div`
    display: flex;
    width: 85%;
    margin: auto;
`

export const Logo = styled.div`
    width: 50%;
`

export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold;
`

export const UlList = styled.ul`
    width: 50%;
    list-style: none;
`

export const ListItem = styled.li`
    display: inline-block;
`

export const Anchor = styled.a`
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    color: #222;
    font-weight: bold;
    transition: 0.5s;
    &:hover {
        color: #eb5424;
    }
`

export const NLink = styled(NavLink)`
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    color: #222;
    font-weight: bold;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
        color: #eb5424;
    };
`


