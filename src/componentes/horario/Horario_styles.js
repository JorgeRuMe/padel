import styled from 'styled-components'

export const Titulo = styled.div`
font-size: 2rem;
color: #023047;
`

export const Subtitulo = styled.div`
font-size: 1rem;
color: #457b9d;
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