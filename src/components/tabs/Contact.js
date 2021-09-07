/* React components */
import { useRef, useState, useCallback } from 'react';

/* Components */
import Alert from '@elements/Alert';
import ErrorMessage from '@elements/ErrorMessage';

/* Librarys */
import emailjs from 'emailjs-com';

/* JS */
import useForm from '@assets/js/useForm';

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

export default function Contact() {
  return (
    <div className="tm-contact justify-content-between align-items-center d-flex text-white-50">
      <ContactForm />
      <SocialNetworks />
    </div>
  )
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
  const [loading, setLoading] = useState(false);
  const showLoading = useCallback(() => setLoading(true), []);
  const hideLoading = () => setLoading(false);
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

  const handleChangeName = e => setFieldValue('name', e.target.value);
  const handleChangeEmail = e => setFieldValue('email', e.target.value);
  const handleChangeMessage = e => setFieldValue('message', e.target.value);

  const refSuccessAlert = useRef();
  const refDangerAlert = useRef();

  return (
    <div className="tm-form">
      <h2 className="mb-3 text-danger">¿Deseas contactame?</h2>
      <form onSubmit={handleSubmit}>

        <input value={values.name} onChange={handleChangeName} className="form-control" type="text" placeholder="Nombre" />
        {errors.name && <ErrorMessage title={errors.name} />}

        <input value={values.email} onChange={handleChangeEmail} className="form-control" type="text" placeholder="Email" />
        {errors.email && <ErrorMessage title={errors.email} />}

        <textarea value={values.message} onChange={handleChangeMessage} className="form-control h-100" type="text" placeholder="Mensaje" />
        {errors.message && <ErrorMessage title={errors.message} />}

        <button className="bg-danger text-white border-0 mt-4" type="submit">
          {
            loading
              ? <div className="spinner-border text-white" role="status" style={{ width: 24, height: 24 }} />
              : 'Enviar mensaje'
          }
        </button>
      </form>
      <Alert ref={refSuccessAlert} variant='success' title="Se envió correctamente tu mensaje a mi correo personal" />
      <Alert ref={refDangerAlert} variant='danger' title="Se ha producido un error al enviar tu mensaje a mi correo personal" />
    </div>
  )
};

const SocialNetworks = () => {
  return (
    <div className="tm-social">
      <h4 className="mb-4">Mis redes sociales:</h4>
      <div className="all-social-networks">{my_social_networks}</div>
    </div>
  )
}