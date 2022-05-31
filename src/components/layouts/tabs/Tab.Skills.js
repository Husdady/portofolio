// React
import { Fragment } from 'react'

// Components
import Skill from '@layouts/common/Skill'

// Librarys
import { Container } from 'react-bootstrap'

// JSON
import allMainTechnologies from '@assets/json/technologies/all-main-technologies'
import allBasicTechnologies from '@assets/json/technologies/all-basic-technologies'

const renderSkills = (skills) => {
  return skills.map((skill, i) => (
    <Fragment key={i}>
      <h6 className="mb-1">{skill.name}</h6>
      <Skill level={skill.level} height="2.75em" barColor="danger" />
    </Fragment>
  ))
}

const mainSkills = renderSkills(allMainTechnologies)
const basicSkills = renderSkills(allBasicTechnologies)

const Skills = () => {
  const mq = window.innerWidth <= 900

  const style = {
    maxHeight: mq ? 'initial' : 300,
    overflowY: mq ? 'none' : 'auto',
  }

  return (
    <div className="text-white-50">
      <h2 className="text-danger">My skills as a developer:</h2>

      <h4 className="mt-3 mb-2 ms-xl-3">
        <u>Main Technologies:</u>
      </h4>
      <Container as="section" style={style} className="py-3 px-1 px-sm-0 px-md-0 px-lg-0 px-xl-5">
        {mainSkills}
      </Container>

      <h4 className="mt-3 mb-2 ms-xl-3">
        <u>Basic Technologies:</u>
      </h4>
      <Container as="section" style={style} className="py-3 px-1 px-md-0 px-sm-0 px-lg-0 px-xl-5">
        {basicSkills}
      </Container>
    </div>
  )
}

export default Skills
