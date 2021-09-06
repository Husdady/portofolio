/* React components */
import { Fragment, Component } from 'react';

/* Components */
import Picture from '@elements/Picture';

/* Librarys */
import Typist from 'react-typist';

/* JSON */
import hashtags from '@assets/json/hashtags';

/* CSS */
import '@css/profile/styles.css';

export default class Profile extends Component {
  render() {
    return (
      <div className="tm-profile bg-opacity pt-4 pt-md-5 pb-4 px-3 mb-lg-0">
        <Picture className="mx-auto" />
        <Info />
      </div>
    )
  }
}

const yyyy = new Date().getFullYear();
const developingTime = String(yyyy - 2019);
const styleIcon = { marginRight: 3 }

class Info extends Component {
  render() {
    return (
      <Fragment>
        <h3 className="tm-profile-title mt-2 mb-1 text-center">Imanol Enrique</h3>

        <div className="mb-3 text-muted text-center">
          <i className="fas fa-map-marker-alt" style={styleIcon} />
          <span>Piura, Perú</span>
        </div>

        <div className="mb-1 d-flex flex-wrap justify-content-between text-muted">
          <Typist className="d-flex" startDelay={500}>
            <h5>@Husdady</h5>
          </Typist>

          <Typist className="d-flex" startDelay={2000} avgTypingDelay={100}>
            {
              hashtags.map((hash, i) => (
                <div key={i}>
                  <h5>{hash.name}</h5>
                  <Typist.Backspace count={hash.count} delay={hash.delay} />
                </div>
              ))
            }
          </Typist>
        </div>

        <span className="tm-profile-description">Hola <span className="emoticon">&#9996;</span>, Soy Desarrollador Frontend, empecé a desarrollar aplicaciones desde hace {developingTime} años , mi principal lenguaje es Javascript &#128584;, mi interés por el mundo del desarrollo comenzó cuando aprendí HTML mediante el curso dado por Google: <a href="https://learndigital.withgoogle.com/activate/course/web-development-I" target="_blank" rel="noreferrer">Desarrollo Web I</a> y <a href="https://learndigital.withgoogle.com/activate/course/web-development-I" target="_blank" rel="noreferrer">Desarrollo Web II</a>.</span>

        <br /><br />

        <span>Empecé a expandir mis conocimientos aprendiendo otras tecnologías como React y React native &#128523;. En mis tiempos libres me gusta desarrollar aplicaciones web y móviles &#128154;</span>

        <br /><br />
        <i className="fas fa-quote-left quote" />
        <blockquote className="text-center">
          <i>Controlar la complejidad es la esencia de la programación</i>
        </blockquote>
        <i className="fas fa-quote-right quote text-right" />

        <cite className="d-block mt-3 text-right">- Brian Kernigan -</cite>
      </Fragment>
    )
  }
}