// Librarys
import emailjs from '@emailjs/browser'

// Services
import { EMAIL_SERVICE, EMAIL_TEMPLATE, EMAIL_USER } from './credentials'

// Enviar mensaje a mi correo personal
export default async function sendEmailMessage({ refs, values, extraData, resetForm }) {
  try {
    // Mostrar loading en el botón "Send message"
    extraData.showLoading()

    // Enviar mensaje a email
    await emailjs.send(EMAIL_SERVICE, EMAIL_TEMPLATE, values, EMAIL_USER)

    // Ocultar alerta de error
    refs.dangerAlert.current.hide()

    // Mostrar alerta de éxito
    refs.successAlert.current.show()

    // Resetear formulario
    resetForm()
  } catch (err) {
    console.error('[sendEmailMessage.error]', err)

    // Mostrar alerta de error
    refs.dangerAlert.current.show()

    // Ocultar alerta de éxito
    refs.successAlert.current.hide()
  }

  // Ocultar loading en el botón "Send message"
  extraData.hideLoading()
}
