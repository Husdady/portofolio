// React
import { Fragment, useCallback } from 'react';

// Components
import { HusdadyPhoto } from '@common';

// Librarys
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

// JSON
import hashtags from '@assets/json/common/hashtags';

const Profile = () => {
  return (
    <section className="tm-profile bg-opacity p-4 p-md-5 p-xl-4">
      <HusdadyPhoto />
      <AboutMe />
    </section>
  )
}

export default Profile;

const AboutMe = () => {
  const yyyy = new Date().getFullYear();
  const developingTime = String(yyyy - 2019);

  const renderHashTags = useCallback(() => {
    return hashtags.map((hash, i, totalHashTags) => {
      const count = i !== totalHashTags.length - 1 ? hash.name.length : 0;

      return (
        <article key={i}>
          <h5>{hash.name}</h5>
          <Typist.Backspace count={count} delay={hash.delay} />
        </article>
      )
    })
  }, []);

  return (
    <Fragment>
      <h3 className="tm-profile-title mt-2 mb-1 text-center text-danger">Imanol Enrique</h3>

      <div className="mb-3 text-muted text-center">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" />
        <span>Piura, Perú</span>
      </div>

      <div className="mb-1 d-flex flex-wrap justify-content-between text-muted">
        <Typist className="d-flex" startDelay={500}>
          <h5>@Husdady</h5>
        </Typist>

        <Typist className="d-flex" startDelay={2000} avgTypingDelay={100}>
          {renderHashTags()}
        </Typist>
      </div>

      <span className="tm-profile-description">Hi there <span className="emoticon">&#9996;</span>, I'm Frontend Developer, i started developing applications {developingTime} years ago, my main skill is Javascript &#128584;, my interest in the world of development began when i learned HTML through the course given by google: <a href="https://learndigital.withgoogle.com/activate/course/web-development-I" target="_blank" rel="noreferrer">Web Development I</a> and <a href="https://learndigital.withgoogle.com/activate/course/web-development-I" target="_blank" rel="noreferrer">Web Development II</a>.</span>

      <br /><br />

      <span>I started to expand my knowledge by learning other technologies like React and React native &#128523;. In my free time I like to develop web and mobile applications &#128154;</span>

      <br /><br />

      <FontAwesomeIcon icon={faQuoteLeft} size="lg" className="quote" />

      <blockquote className="text-center">
        <i>Controlling complexity is the essence of programming</i>
      </blockquote>

      <div className="text-end">
        <FontAwesomeIcon icon={faQuoteRight} size="lg" className="quote" />
      </div>

      <cite className="d-block mt-3 text-end">- Brian Kernigan -</cite>
    </Fragment>
  )
}