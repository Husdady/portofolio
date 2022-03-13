// Components
import { Button } from "@common";

// Librarys
// import Fade from 'react-reveal/Fade';
import { Row, Col, Image, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faGlobe } from "@fortawesome/free-solid-svg-icons";

// JSON
import allMainProyects from '@assets/json/proyects/all-main-proyects.json';
import allPersonalProyects from '@assets/json/proyects/all-personal-proyects.json';

const styleImgForAppWeb = {
  objectFit: 'cover'
}

const styleImgForAppMobile = {
  objectFit: 'contain'
}

const renderProyectUrl = (proyectUrl) => {
  if (!proyectUrl) return;

  function goToProyect() {
    return window.open(proyectUrl, "_target")
  }

  return (
    <Button
      title="See website"
      onClick={goToProyect}
      className="proyect-url position-absolute rounded py-2 text-center text-decoration-none"
      icon={{
        name: faGlobe,
        className: "me-2"
      }}
    />
  )
}

const renderProyects = (proyects) => {
  const mq = window.innerWidth <= 600;
  
  return proyects.map((proyect, i) => (
    <Col key={i} className="proyect px-2">
      {/* Proyect Image */}
      <section className="proyect-img position-relative w-100">
        <div className="position-absolute top-0 start-0 bottom-0 end-0 wrap" />
        {renderProyectUrl(proyect.url)}

        <Image
          fluid
          alt={proyect.name}
          src={require('@assets/' + proyect.proyectImg).default}
          className="position-absolute top-0 start-0 bottom-0 w-100 h-100"
          style={mq || proyect.type === "app_mobile" ? styleImgForAppMobile : styleImgForAppWeb}
        />
      </section>

      {/* Proyect Name */}
      <section
        style={{ borderBottom: "1px solid var(--bs-gray-700)" }}
        className="d-flex justify-content-center text-muted pt-3 border-bottom-2 w-100 pb-2"
      >
        <FontAwesomeIcon icon={faFile} className="me-2" />
        <h6 className="mb-0">{proyect.name}</h6>
      </section>
    </Col>
  ))
}

const main_proyects = renderProyects(allMainProyects);
const personal_proyects = renderProyects(allPersonalProyects);

export default function Proyects({ defaultResponsiveGrids }) {
  return (
    <Container fluid className="text-white-50" as="article">
      <h2 className="text-danger">My projects done as a developer</h2>
      {/* Main proyects */}
      <h4 className="my-4 text-decoration-underline">Main Proyects:</h4>
      <Row as="section" className="proyects" {...defaultResponsiveGrids}>{main_proyects}</Row>

      {/* Personal proyects */}
      <h4 className="my-4 text-decoration-underline">Personal Proyects:</h4>
      <Row
        as="section"
        className="proyects" 
        {...defaultResponsiveGrids}
      >
        {personal_proyects}
      </Row>
    </Container>
  )
}

Proyects.defaultProps = {
  defaultResponsiveGrids: {
    xs: 1,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 3,
    xxl: 4,
  }
}