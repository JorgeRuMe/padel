import styled from 'styled-components'

export const Contenedor = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;

`

export const Letra = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-family: 'Roboto', sans-serif;
font-weight: 700;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
background: #2b2d42;
color: #edf2f4;
text-transform: uppercase;
font-size: 0.8rem;
margin: 0rem 0rem 0.25rem 0rem;
`

export const Boton = styled.div`
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 0.8rem;
border: 1px solid #2b2d42;
border-radius: 0.25rem;
background: #2b2d42;
color: #edf2f4;
padding: 0.4rem 0.5rem 0.4rem 0.5rem;
`