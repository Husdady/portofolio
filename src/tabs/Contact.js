// React
import { Fragment, useRef, useCallback } from 'react';

// Components
import { Alert, renderError, Button } from '@common';

// Librarys
import { Container, Badge } from "react-bootstrap";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Services
import sendEmailMessage from "@services/sendEmailMessage";

// Hooks
import { useForm } from '@hooks';

// JSON
import all_social_networks from '@assets/json/contact/all-social-networks';

export default function Contact() {
  return (
    <Fragment>
      <ContactForm />
      <SocialNetworks />
    </Fragment>
  )
}

const validateContactForm = {
  name: {
    required: 'Please enter your fullname'
  },
  email: {
    isEmail: true,
    required: 'Please enter your email'
  },
  message: {
    required: 'Please enter a message',
    min: {
      limit: 100,
      message: i => `The message must have ${i} characters at least`
    }
  }
}

const ContactForm = () => {
  const refSubmitButton = useRef(null);
  const refSuccessAlert = useRef(null);
  const refDangerAlert = useRef(null);

  const { values, setFieldValue, errors, handleSubmit } = useForm({
    validationSchema: validateContactForm,
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: function(formData) {
      return sendEmailMessage({
        ...formData,
        refs: {
          successAlert: refSuccessAlert,
          dangerAlert: refDangerAlert,
        }
      })
    },
  });
  

  // Setear nombre de la persona
  const handleChangeName = useCallback((e) => {
    return setFieldValue('name', e.target.value);
  }, [values]);


  // Setear correo electrónico de la persona
  const handleChangeEmail = useCallback((e) => {
    return setFieldValue('email', e.target.value);
  }, [values]);


  // Setear mensaje opcional de la persona
  const handleChangeMessage = useCallback((e) => {
    return setFieldValue('message', e.target.value);
  }, [values]);


  // Evento 'submit' en formulario
  const handleSubmitForm = (e) => {
    return handleSubmit(e, {
      showLoading: refSubmitButton.current.showLoading,
      hideLoading: refSubmitButton.current.hideLoading,
    })
  };

  return (
    <Container fluid className="tm-form px-0 px-md-3 px-lg-3">
      <h2 className="mb-3 text-danger">Do you want to contact me?</h2>
      <form onSubmit={handleSubmitForm}>

        <input value={values.name} onChange={handleChangeName} className="form-control" type="text" placeholder="Fullname" />
        {renderError(errors.name)}

        <input value={values.email} onChange={handleChangeEmail} className="form-control" type="text" placeholder="Email" />
        {renderError(errors.email)}

        <textarea value={values.message} onChange={handleChangeMessage} className="form-control h-100" type="text" placeholder="Message" />
        {renderError(errors.message)}

        <Button
          ref={refSubmitButton}
          icon={faPaperPlane}
          title="Send message"
          style={{ padding: "10px 30px" }}
          loading={{ style: { marginLeft: 40, marginRight: 40 } }}
          className="bg-danger text-white mt-4 rounded d-block ms-auto"
        />
      </form>

      {/* Alerta de éxito */}
      <Alert
        ref={refSuccessAlert}
        variant="success"
        className="mt-4"
        title="Your message was successfully sent to my personal email"
      />

      {/* Alerta de error */}
      <Alert
        ref={refDangerAlert}
        variant="danger"
        className="mt-4"
        title="There was an error sending your message to my personal email"
      />
    </Container>
  )
};

const my_social_networks = all_social_networks.map((social, i) => (
  <Badge className="social rounded-0 m-1 fw-normal">
    <a href={social.accountLink} rel="noreferrer" className="text-white" target="_blank">
      <FontAwesomeIcon icon={["fab", social.icon]} className="me-2" />
      <span>{social.name}</span>
    </a>
  </Badge>
))

const SocialNetworks = () => {
  return (
    <Container fluid as="section" className="tm-form mt-2 px-0 px-md-3 px-lg-3">
      <h2 className="text-danger">My social networks:</h2>
      <div className="all-social-networks mt-3 text-center">{my_social_networks}</div>
    </Container>
  )
}