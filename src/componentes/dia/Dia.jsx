import { useEffect, useState } from 'react';
import Hora from '../hora/Hora'
import { db } from '../../firebase/firebase';
import moment from 'moment'

import { Contenedor, Titulo, Horas } from './Dia_styles'


const Dia = ({ day, usuario }) => {
   const horasArr = ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
   const [localArr, setLocalArr] = useState([])

   const apartarHora = async () => {
      const hoursDocs = db.collection('apartados').doc(`semana-${moment().week()}`).collection(`semana-${moment().week()}-apartados`)
      try {
         await hoursDocs.get().then((docs) => {
            let docsLocal = []

            docs.forEach((doc) => {
               //docsLocal.push([doc.id, doc.data()])

               let hourDoc = {
                  ...doc.data(),
                  docId: doc.id,
               }

               if (day === hourDoc.dia) {
                  if (horasArr.includes(hourDoc.hora)) {
                     const i = horasArr.indexOf(hourDoc.hora)
                     horasArr[i] = hourDoc
                  }
               }
               
            })

            setLocalArr(horasArr)
         })

      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      apartarHora()
   }, [])

   const cargarDeNuevo = () => {
      apartarHora()
   }


    return (
      <>
      <Contenedor>
         <Titulo>{day}</Titulo> 
      </Contenedor>
      <Horas>
         {  
            localArr.map(hour => {
               return <Hora hour={hour} day={day} usuario={usuario}  cargarDeNuevo={() => cargarDeNuevo()}  />
            })
         }
       
      </Horas>
      </>
      )
}

export default Dia