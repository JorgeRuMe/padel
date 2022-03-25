import { useEffect, useState } from 'react';
import { Contenedor, Titulo } from './Hora_styles'
import Formulario from '../../componentes/formulario/Formulario'
import Formulario2 from '../formulario_2/Formulario2'

const Hora = ({ hour, day, usuario, cargarDeNuevo }) => {
   const [apartado, setApartado] = useState(null)
   const [displayForm, setDisplayForm] = useState(false)
   const [formulario2, setFormulario2] = useState(false)
   const [formulario2Id, setFormulario2Id] = useState(null)
   const [number, setNumber] = useState(null)


   useEffect(() => {
      if (typeof hour === 'object') {
         if (hour.hora) {
            setApartado(true)
         } else {
            setApartado(false)
         }

         setNumber(hour.hora)
      } else {
         setNumber(hour)
         setApartado(false)
      }
   }, [hour])

   const abrirFormulario = () => {
      if (apartado) mostrarApartado()
      else setDisplayForm(true)
   }

   const cerrarFormulario = () => {
      setDisplayForm(false)
   }

   const mostrarApartado = () => {
      setFormulario2(hour)
   }

   const cerrarFormulario2 = () => {
      setFormulario2(false)
   }

    return (
      <>
      {formulario2 ? <Formulario2 cerrarFormulario2={() => cerrarFormulario2()} cargarDeNuevo={cargarDeNuevo} usuario={usuario} formulario2={formulario2} hour={hour}/> : null}
      {displayForm ? (<Formulario cerrarFormulario={() => cerrarFormulario()} cargarDeNuevo={cargarDeNuevo} usuario={usuario} hour={hour} day={day} />) : (null)}
      <Contenedor apartado={apartado} onClick={() => abrirFormulario()} >
         <Titulo>{number}</Titulo> 
      </Contenedor>
      </>
      )
}

export default Hora