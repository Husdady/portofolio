// React
import { memo, useState, useCallback, forwardRef, useImperativeHandle } from 'react'

// Librarys
import { Alert } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Hooks
import { useClasses } from '@hooks'

const icons = {
  success: 'check-circle',
  danger: 'times-circle',
}

const CustomAlert = forwardRef(({ title, variant, className }, ref) => {
  const [visible, setVisible] = useState(false)

  const showAlert = useCallback(() => setVisible(true), [])
  const hideAlert = useCallback(() => setVisible(false), [])
  const handleRef = useCallback(() => ({ show: showAlert, hide: hideAlert }), [])

  useImperativeHandle(ref, handleRef)

  const alertClasses = useClasses({
    className: className,
    defaultClasses: ['text-center'],
  })

  if (!visible) return null

  return (
    <Fade bottom big collapse>
      <Alert variant={variant} className={alertClasses}>
        <div>
          <FontAwesomeIcon icon={icons[variant]} className="me-2" />
          <span className="title-custom-alert">{title}</span>
        </div>

        <FontAwesomeIcon role="button" onClick={hideAlert} icon={icons.danger} className="text-black-50 close-custom-alert" />
      </Alert>
    </Fade>
  )
})

export default memo(CustomAlert)
