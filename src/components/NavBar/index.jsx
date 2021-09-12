import React from 'react';
import { Link } from 'react-router-dom';
import { Component, Items, Item } from './styles';

const NavBar = () => (
    <Component>
        <Items>
            <Item>
                <Link to="/">Home</Link>
            </Item>
            <Item>
                <Link to="/login">Login</Link>
            </Item>
        </Items>
    </Component>
);

export default NavBar;
