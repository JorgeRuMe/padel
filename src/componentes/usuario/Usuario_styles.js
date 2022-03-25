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
background: #023047;
color: white;
text-transform: uppercase;
font-size: 0.8rem;
margin: 0rem 0rem 0.25rem 0rem;
`

export const Boton = styled.div`
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 0.8rem;
border: 1px solid #457b9d;
border-radius: 0.25rem;
background: #a8dadc;
padding: 0.15rem 0.3rem 0.15rem 0.3rem;
`