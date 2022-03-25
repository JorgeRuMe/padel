import { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase';
import moment from 'moment'

import { Contenedor, Background, Titulo, Cerrar, Boton, Span } from './Formulario2_styles'

const Formulario2 = ({ hour, cerrarFormulario2, formulario2, usuario }) => {

  const [mostrarBoton, setMostrarBoton] = useState(false)

  useEffect(() => {
    if (formulario2.usuario === usuario.uid) {
      setMostrarBoton(true)
    }
  }, [formulario2])

  const cancelarReservacion = () => {
    db.collection('apartados').doc(`semana-${moment().week()}`).collection(`semana-${moment().week()}-apartados`).doc(hour.docId).delete()
    cerrarFormulario2()
  }


    return (
      <>
      <Background>
      <Contenedor>
          <Cerrar onClick={cerrarFormulario2}>Cerrar</Cerrar>
<Titulo>Nombre: <Span>{formulario2.nombre}</Span></Titulo>
<Titulo>Casa: <Span>{formulario2.casa}</Span></Titulo>
{mostrarBoton ? <Boton onClick={() => cancelarReservacion()}>Cancelar Reservacion</Boton> : null}
</Contenedor>
      </Background>
      </>
      )
}

export default Formulario2