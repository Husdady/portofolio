/* Librarys */
import Fade from 'react-reveal/Fade';

/* JSON */
import all_main_proyects from '@assets/json/proyects/all_main_proyects.json';
import all_personal_proyects from '@assets/json/proyects/all_personal_proyects.json';

/* CSS */
import '@css/information/proyects.styles.css';

const getProyects = proyects => (
  <div className="proyects">
    {
      proyects.map((proyect, i) => (
        <Fade className="d-table" key={i} bottom delay={(i + 1) * 200} duration={3000} collapse>
          <div className="proyect">

            <div className="proyect_img">
              <div className="absolute wrap" title={proyect.name} />
              <a href={proyect.url} className="rounded py-2 text-center text-decoration-none">
                <i className="fas fa-globe" />Ver sitio web
              </a>
              <img className="absolute" src={require('@assets/' + proyect.proyectImg).default} alt={proyect.name.toString()} />
            </div>

            <div className="text-muted pt-3 border-bottom-2">
              <h6 className="d-flex justify-content-center pb-2">
                <i className="fas fa-file" />{proyect.name}
              </h6>
            </div>

          </div>
        </Fade>
      ))
    }
  </div>
)

const main_proyects = getProyects(all_main_proyects);
const personal_proyects = getProyects(all_personal_proyects);

export default function Proyects() {
  console.log('maita')
  return (
    <div className="text-white-50">
      <h2 className="text-danger">Mis proyectos realizados como desarrollador</h2>
      <h4 className="my-4 text-decoration-underline">Proyectos principales</h4>
      {main_proyects}
      <h4 className="my-4 text-decoration-underline">Proyectos personales</h4>
      {personal_proyects}
    </div>
  )
}