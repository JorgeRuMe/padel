import { useEffect, useState } from 'react';
import Dia from '../../componentes/dia/Dia'
import Usuario from '../../componentes/usuario/Usuario'

import { Titulo, Subtitulo, Contenedor, ContenedorTop, ContenedorIzq, Dias } from './Horario_styles'

function Horario({ usuario }) {
  const [arr, setArr] = useState([])

  const diasArr = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

  useEffect(() => {
    const date = new Date();
    let day = date.getDay();

    const diasSemana = []

    let cnt = 0;
    for (let i = day; i <= (day + 1); i++) {
      if (i > 6) {
        diasSemana.push(diasArr[cnt])
        cnt++
      } else {
        diasSemana.push(diasArr[i])
      }
    }

    setArr(diasSemana)

  }, [])

  return (
    <>
    <Contenedor>
      <ContenedorTop>
      <ContenedorIzq>
      <Titulo>Pádel</Titulo>
    <Subtitulo>Garambullo</Subtitulo>
      </ContenedorIzq>
    <Usuario usuario={usuario} />
      </ContenedorTop>
   <Dias>
   {arr.map(day => {
      return    <Dia day={day} usuario={usuario} />
    })}
     </Dias>  
    </Contenedor>
    </>
  );
}

export default Horario;
