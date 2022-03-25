import { useEffect, useState } from 'react';
import './App.css';

import Horario from './componentes/horario/Horario'

import { auth } from './firebase/firebase'

function App() {
  let firebaseObserver;
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    firebaseObserver = auth.onAuthStateChanged((user) => {
      if (user) {
        setUsuario(user)
      } else {
        setUsuario(null)
      }
    })
  }, [])

  return (
    <>
    <div className='main-container'>
    <Horario usuario={usuario} />
    </div>
    </>
  );
}

export default App;
