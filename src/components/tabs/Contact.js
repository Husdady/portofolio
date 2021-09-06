/* React components */
import { Component } from 'react';

/* Components */
import ErrorMessage from '@elements/ErrorMessage';

/* Librarys */
// import emailjs from 'emailjs-com';
// import { Alert } from 'react-bootstrap';
import { useAlert } from 'react-alert';

/* JS */
import useForm from '@assets/js/useForm';
import useLoading from '@assets/js/useLoading';

/* JSON */
import all_social_networks from '@assets/json/all_social_networks';

/* CSS */
import '@css/information/contact.styles.css';

const my_social_networks = all_social_networks.map((social, i) => (
  <a key={i} href={social.accountLink} target="_blank" rel="noreferrer" className="social text-center text-white">
    <i className={`fab fa-${social.iconName}`} />
    <span>{social.name}</span>
  </a>
))

export default class Contact extends Component {
  render() {
    return (
      <div className="tm-contact justify-content-between align-items-center d-flex text-white-50">
        <ContactForm />
        <SocialNetworks />
      </div>
    )
  }
}

const validateContactForm = {
  name: {
    required: 'Ingresa tu nombre'
  },
  email: {
    isEmail: true
  },
  message: {
    required: 'Ingresa un mensaje',
    min: {
      limit: 100,
      message: i => `El mensaje debe tener ${i} carácteres como mínimo`
    }
  }
}

const ContactForm = () => {
  const { values, setFieldValue, errors, handleSubmit } = useForm({
    validationSchema: validateContactForm,
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: ({ values, resetForm }) => {
      showLoading();
      emailjs.send('service_w77s7rw', 'template_3ijn1hm', values, 'user_TZX75zWJPaZxTl2lacz5r')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      hideLoading();
      resetForm();
    }
  });

  const { isLoading, showLoading, hideLoading } = useLoading();

  const handleChangeName = e => setFieldValue('name', e.target.value);
  const handleChangeEmail = e => setFieldValue('email', e.target.value);
  const handleChangeMessage = e => setFieldValue('message', e.target.value);

  return (
    <div className="tm-form">
      <h2 className="mb-3 text-danger">¿Deseas contactame?</h2>
      <form onSubmit={handleSubmit}>

        <input value={values.name} onChange={handleChangeName} className="form-control m-2" type="text" placeholder="Nombre" />
        {errors.name && <ErrorMessage title={errors.name} />}

        <input value={values.email} onChange={handleChangeEmail} className="form-control m-2" type="text" placeholder="Email" />
        {errors.email && <ErrorMessage title={errors.email} style={{ paddingBottom: 8 }} />}

        <textarea value={values.message} onChange={handleChangeMessage} className="form-control mx-2 h-100" type="text" placeholder="Mensaje" />
        {errors.message && <ErrorMessage title={errors.message} style={{ paddingTop: 8 }} />}

        <button className="bg-danger text-white border-0 mt-4" type="submit">
          {
            isLoading
              ? <div className="spinner-border text-white" role="status" style={{ width: 24, height: 24 }} />
              : 'Enviar mensaje'
          }
        </button>
      </form>
      {/* <Alert variant='success' className="custom-alert d-flex justify-content-around align-items-center text-center">
        <div>
          <i className="fas fa-check-circle" style={{ marginRight: 6 }} />
          <span>Se envió correctamente tu mensaje a mi correo personal</span>
        </div>

        <i className="fas fa-times-circle text-dark" style={{ marginRight: 6 }} />
      </Alert> */}
    </div>
  )
}

const SocialNetworks = () => {
  return (
    <div className="tm-social">
      <h4 className="mb-4">Mis redes sociales:</h4>
      <div className="all-social-networks">{my_social_networks}</div>
    </div>
  )
}