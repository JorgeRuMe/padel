import { useState } from 'react';
import { Background, Contenedor, Titulo, Subtitulo, Input, Boton, Cerrar } from './Formulario_styles'
import { db } from '../../firebase/firebase';
import moment from 'moment'

const Formulario = ({ usuario, hour, day, cerrarFormulario }) => {
    const [nombre, setNombre] = useState('')
    const [casa, setCasa] = useState('')

    const handleNombre = (text) => {
        setNombre(text)
    }

    const handleCasa = (text) => {
        setCasa(text)
    }

    
   const apartarHora = () => {
 db.collection('apartados').doc(`semana-${moment().week()}`).collection(`semana-${moment().week()}-apartados`).doc().set({
    usuario: usuario.uid,
    nombre,
    casa,
    hora: hour,
    dia: day,
  })



  setNombre('')
  setCasa('')

  cerrarFormulario()
 }

 const cerrarFormularioFn = () => {
  cerrarFormulario()
 }

    return (
      <>
      <Background>
      <Contenedor>
        <Cerrar onClick={() => cerrarFormularioFn()}>Cerrar</Cerrar>
        <Titulo>Apartar</Titulo>
        <Subtitulo>Nombre</Subtitulo>
        <Input value={nombre} onChange={(e) => handleNombre(e.target.value)} placeholder={'Introduce tu nombre'} />
        <Subtitulo>Casa</Subtitulo>
        <Input value={casa} onChange={(e) => handleCasa(e.target.value)} placeholder={'Introduce tu número de casa'} />
        <Boton onClick={() => apartarHora()}>Enviar</Boton>
      </Contenedor>
      </Background>
      </>
      )
}

export default Formulario