// React
import { memo } from 'react'

// Librarys
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ErrorMessage = ({ title, color, containerStyle, containerClassName }) => {
  return (
    <div style={containerStyle} className={containerClassName}>
      <FontAwesomeIcon color={color} className="me-1" icon="exclamation-circle" />
      <small style={{ color }}>{title}</small>
    </div>
  )
}

export default memo(ErrorMessage)

ErrorMessage.defaultProps = {
  color: 'var(--bs-danger)',
  containerClassName: 'ps-2',
}

export function renderError(error) {
  if (!error) return null

  return <ErrorMessage title={error} />
}
