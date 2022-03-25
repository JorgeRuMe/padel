import { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase';
import moment from 'moment'

import { Contenedor, Background, Titulo, Cerrar, Boton } from './Formulario2_styles'

const Formulario2 = ({ hour, cerrarFormulario2, cargarDeNuevo, formulario2, usuario }) => {

  const [mostrarBoton, setMostrarBoton] = useState(false)

  useEffect(() => {
    if (formulario2.usuario === usuario.uid) {
      setMostrarBoton(true)
    }
  }, [formulario2])

  const cancelarReservacion = () => {
    db.collection('apartados').doc(`semana-${moment().week()}`).collection(`semana-${moment().week()}-apartados`).doc(hour.docId).delete()
    cerrarFormulario2()

    setTimeout(() => {
      cargarDeNuevo()
  }, 1000);
  }


    return (
      <>
      <Background>
      <Contenedor>
          <Cerrar onClick={cerrarFormulario2}>Cerrar</Cerrar>
<Titulo>Nombre: {formulario2.nombre}</Titulo>
<Titulo>Casa: {formulario2.casa}</Titulo>
{mostrarBoton ? <Boton onClick={() => cancelarReservacion()}>Cancelar Reservacion</Boton> : null}
</Contenedor>
      </Background>
      </>
      )
}

export default Formulario2