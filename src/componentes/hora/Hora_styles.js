import styled from 'styled-components'

export const Contenedor = styled.div`
text-align: center;
width: 80%;
background: ${({ apartado }) => apartado ? '#e5383b' : null};
padding: 1rem 0rem 1rem 0rem;
color: ${({ apartado }) => apartado ? 'white' : 'black'};
margin: 0rem 0rem 0.4rem 0rem;
border: ${({ apartado }) => apartado ? null : '2px solid #80ed99'};
border-radius: 999px;
`

export const Titulo = styled.div`
font-family: 'Roboto', sans-serif;
font-weight: 400;

`