import { useEffect, useState } from 'react';
import Hora from '../hora/Hora'
import { db } from '../../firebase/firebase';
import moment from 'moment'

import { onSnapshot } from "firebase/firestore";

import { Contenedor, Titulo, Horas } from './Dia_styles'


const Dia = ({ day, usuario }) => {
   const [citas, setCitas] = useState([])
   const [localArr, setLocalArr] = useState(['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])

   useEffect(()  => {
      const ref = db.collection('apartados').doc(`semana-${moment().week()}`).collection(`semana-${moment().week()}-apartados`)
      let subscription = onSnapshot(ref, (querySnapshot) => {
         const citasLocal = []
         querySnapshot.forEach((doc) => {
            citasLocal.push([doc.data(), doc.id])
         })

         setCitas(citasLocal)
      })

   }, [])

   useEffect(() => {
      if (citas.length) {
         const horasLocal = ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
         citas.forEach((cita) => {
            if (horasLocal.includes(cita[0].hora) && cita[0].dia === day) {
               const i = horasLocal.indexOf(cita[0].hora)
               horasLocal[i] = {
                  ...cita[0],
                  docId: cita[1]
               }
            }
         })

         setLocalArr(horasLocal)
      }
   },[citas])

    return (
      <>
      <Contenedor>
         <Titulo>{day}</Titulo> 
      </Contenedor>
      <Horas>
         {  
            localArr.map(hour => {
               return <Hora hour={hour} day={day} usuario={usuario}   />
            })
         }
       
      </Horas>
      </>
      )
}

export default Dia