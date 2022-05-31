// React
import { useCallback } from 'react'

// Components
import { Button } from '@common'

// Librarys
import Image from 'react-bootstrap/Image'
import { useHistory } from 'react-router-dom'

const img = require('@assets/img/page-not-found.webp')

const imgStyle = {
  width: '20%',
  minWidth: 200,
  marginBottom: -10,
}

const PageNotFound = () => {
  const history = useHistory()

  const handleGoToHome = useCallback(() => {
    return history.push('/')
  }, [history])

  return (
    <div className="tm-page404 container text-white text-center">
      <Image src={img} fluid style={imgStyle} alt="sad-cat" />
      <h1>404</h1>
      <h1>Página no encontrada</h1>
      <span>No pudimos encontrar la página, ¿Estás seguro o segura que la url está bien escrita?. Asegúrate que la página existe.</span>
      <Button icon="home" onClick={handleGoToHome} title="Volver al inicio" className="mt-3 py-2 px-4 rounded" />
    </div>
  )
}

export default PageNotFound
