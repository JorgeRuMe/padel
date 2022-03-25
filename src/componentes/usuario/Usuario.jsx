import { Contenedor, Letra, Boton } from './Usuario_styles'

import { auth, googleProvider } from '../../firebase/firebase'

function Usuario({ usuario }) {

    const solicitarUsuario = () => {
        auth.signInWithPopup(googleProvider)
    }

    const cerrarSesion = () => {
      auth.signOut()
    }


  return (
    <>
    <Contenedor onClick={() => solicitarUsuario()}>
    {usuario ?   <Letra>{usuario.email[0]}</Letra> : <Boton>Iniciar Sesión</Boton>}
    {usuario ? <Boton onClick={() => cerrarSesion()}>cerrar sesion</Boton> : null}
    </Contenedor>
    </>
  );
}

export default Usuario;
