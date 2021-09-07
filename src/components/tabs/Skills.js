/* Librarys */
import Flip from 'react-reveal/Flip';

/* JSON */
import all_main_technologies from '@assets/json/technologies/all_main_technologies';
import all_basic_technologies from '@assets/json/technologies/all_basic_technologies';
import all_technologies_in_process from '@assets/json/technologies/all_technologies_in_process';

/* CSS */
import '@css/information/skills.styles.css';

const showTechnologies = technologies => (
  <div className='technologies'>
    {
      technologies.map((item, i) => (
        <Flip key={i} bottom duration={3000} delay={(i + 1) * 200} cascade>
          <img title={item.name} key={item.name} src={require('@assets/' + item.path).default} alt={item.name} />
        </Flip>
      ))
    }
  </div>
)

const main_technologies = showTechnologies(all_main_technologies);
const basic_technologies = showTechnologies(all_basic_technologies);
const technologies_in_process = showTechnologies(all_technologies_in_process);

export default function Skills() {
  return (
    <div className="text-white-50">
      <h2 className="text-danger">Mis habilidades como desarrollador:</h2>

      <h4 className="mt-3 mb-2"><u>Tecnologías principales:</u></h4>
      {main_technologies}

      <h4 className="mt-3 mb-2"><u>Tecnologías básicas:</u></h4>
      {basic_technologies}

      <h4 className="mt-3 mb-4"><u>Tecnologías en proceso de aprendizaje:</u></h4>
      {technologies_in_process}
    </div>
  )
}