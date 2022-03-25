import styled from 'styled-components'

export const Contenedor = styled.div`
text-align: center;
width: 80%;
background: ${({ apartado }) => apartado ? 'red' : null};
padding: 1rem 0rem 1rem 0rem;
border: 1px solid #e63946;
color: black;
margin: 0rem 0rem 0.25rem 0rem;
border: 1px solid #a8dadc;
border-radius: 999px;
`

export const Titulo = styled.div`
font-family: 'Roboto', sans-serif;
font-weight: 400;

`