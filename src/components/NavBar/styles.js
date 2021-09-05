import styled from 'styled-components';

export const Component = styled.div`
    background-color: grey;
`;

export const Items = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
`;

export const Item = styled.li`
    a {
        color: #fff;
        text-decoration: none;
        padding: ${(p) => p.theme.gutter3};
        display: block;
    }
`;
