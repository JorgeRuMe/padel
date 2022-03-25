import styled from 'styled-components'

export const Titulo = styled.div`
font-size: 2rem;
color: #2b2d42;
font-family: 'Roboto', sans-serif;
font-weight: 900;
`

export const Subtitulo = styled.div`
font-size: 1.3rem;
color: #8d99ae;
font-family: 'Roboto', sans-serif;
font-weight: 700;
`

export const Contenedor = styled.div`
@media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    overflow-y: auto;
  }

`

export const ContenedorTop = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0rem 0rem 2rem 0rem;
`

export const ContenedorIzq = styled.div`
`

export const Dias = styled.div`
width: 100%;
height: 15rem;
`