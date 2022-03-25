import styled from 'styled-components'

export const Background = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
backdrop-filter: blur(1px);
`

export const Contenedor = styled.section`
position: relative;
width: 80%;
height: fit-content;
background: #f1faee;
border-radius: 0.5rem;
font-family: 'Roboto', sans-serif;
font-weight: 700;
border: 1px solid #457b9d;
overflow: hidden;
padding: 1rem 1rem 1rem 1rem;
`

export const Titulo = styled.div`
font-size: 1rem;
margin: 0rem 0rem 1rem 0rem;
`
export const Cerrar = styled.div`
position: absolute;
top: 0;
right: 0;
margin: 0.2rem 0.2rem 0rem 0rem;
z-index: 20;
font-family: 'Roboto', sans-serif;
font-weight: 400;
background: #1d3557;
border-radius: 0.2rem;
font-size: 0.85rem;
color: white;
padding: 0.2rem 0.4rem 0.2rem 0.4rem;
`

export const Boton = styled.div`
width: fit-content;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 0.8rem;
border: 1px solid #457b9d;
border-radius: 0.25rem;
background: #a8dadc;
padding: 0.4rem 0.3rem 0.4rem 0.3rem;
`