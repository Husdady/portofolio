/* Librarys */
import { useHistory } from 'react-router-dom';
/* CSS */
import '@css/styles.page404.css';

const page404 = require('@assets/img/404.png').default;
const styleImg = {
  width: '15%',
  maxWidth: 350,
  minWidth: 200,
  height: 'auto',
  marginBottom: -10,
  objectFit: 'cover'
}

const Page404 = () => {
  const history = useHistory();
  const handleGoToHome = () => history.push('/');
  return (
    <div className="tm-page404 container text-white text-center">
      <img src={page404} style={styleImg} alt="not-found-page" />
      <h1>404</h1>
      <h1>Página no encontrada</h1>
      <span>No pudimos encontrar la página, ¿Estás seguro o segura que la url está bien escrita?. Asegúrate que la página existe.</span>
      <button onClick={handleGoToHome} className="mt-3 py-2 px-4 rounded"><i className="fas fa-home" />&nbsp;Volver al inicio</button>
    </div>
  );
}

export default Page404;