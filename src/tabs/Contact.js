// React
import { useRef, useState, useCallback } from 'react';

// Components
import { Alert, renderError } from '@common';

// Librarys
import emailjs from 'emailjs-com';
import { Container } from "react-bootstrap";

// Hooks
import { useForm } from '@hooks';

// JSON
// import all_social_networks from '@assets/json/contact/all-social-networks';

// const my_social_networks = all_social_networks.map((social, i) => (
//   <a key={i} href={social.accountLink} target="_blank" rel="noreferrer" className="social text-center text-white">
//     <i className={`fab fa-${social.iconName}`} />
//     <span>{social.name}</span>
//   </a>
// ))

export default function Contact() {
  return (
    <div className="tm-contact text-white-50">
      <ContactForm />
    </div>
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
  const [loading, setLoading] = useState(false);
  const showLoading = useCallback(() => setLoading(true), []);
  const hideLoading = useCallback(() => setLoading(false), []);

  const { values, setFieldValue, errors, handleSubmit } = useForm({
    validationSchema: validateContactForm,
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: async ({ values, resetForm }) => {
      showLoading();
      await emailjs.send('service_w77s7rw', 'template_3ijn1hm', values, 'user_TZX75zWJPaZxTl2lacz5r')
        .then(() => refSuccessAlert.current.show(),
          () => refDangerAlert.current.show());
      hideLoading();
      resetForm();
    }
  });

  const handleChangeName = useCallback((e) => {
    return setFieldValue('name', e.target.value);
  }, [values]);

  const handleChangeEmail = useCallback((e) => {
    return setFieldValue('email', e.target.value);
  }, [values]);

  const handleChangeMessage = useCallback((e) => {
    return setFieldValue('message', e.target.value);
  }, [values]);

  const refSuccessAlert = useRef(null);
  const refDangerAlert = useRef(null);
  
  return (
    <Container fluid className="tm-form px-0 px-md-3 px-lg-3">
      <h2 className="mb-3 text-danger">Do you want to contact me?</h2>
      <form onSubmit={handleSubmit}>

        <input value={values.name} onChange={handleChangeName} className="form-control" type="text" placeholder="Fullname" />
        {renderError(errors.name)}

        <input value={values.email} onChange={handleChangeEmail} className="form-control" type="text" placeholder="Email" />
        {renderError(errors.email)}

        <textarea value={values.message} onChange={handleChangeMessage} className="form-control h-100" type="text" placeholder="Message" />
        {renderError(errors.message)}

        <button className="bg-danger text-white border-0 mt-4" type="submit">
          {
            loading
              ? <div className="spinner-border text-white" role="status" style={{ width: 24, height: 24 }} />
              : 'Send message'
          }
        </button>
      </form>
      <Alert ref={refSuccessAlert} variant='success' title="Se envió correctamente tu mensaje a mi correo personal" />
      <Alert ref={refDangerAlert} variant='danger' title="Se ha producido un error al enviar tu mensaje a mi correo personal" />
    </Container>
  )
};

// const SocialNetworks = () => {
//   return (
//     <div className="tm-social">
//       <h4 className="mb-4">Mis redes sociales:</h4>
//       <div className="all-social-networks">{my_social_networks}</div>
//     </div>
//   )
// }