// React
import { memo, Fragment, forwardRef, useState, useCallback, useImperativeHandle } from 'react'

// Librarys
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Hooks
import { useClasses, useValidations } from '@hooks'

const Button = forwardRef((props, ref) => {
  const { icon, title, style, className, attributes, backgroundColor, onClick, loading } = props

  const [isLoading, setLoading] = useState(false)
  const { isString, isEmptyObject, isFunction } = useValidations()

  const buttonStyle = {
    ...style,
    backgroundColor: backgroundColor,
  }

  const buttonClassName = useClasses({
    className: className,
    defaultClasses: ['border-0', 'scale'],
  })

  // Mostrar "loading" en el botón
  const showLoading = useCallback(() => setLoading(true), [])

  // Ocultar "loading" en el botón
  const hideLoading = useCallback(() => setLoading(false), [])

  // Funciones que se pueden usar con las "refs"
  const handleRef = useCallback(() => ({ showLoading, hideLoading }), [])

  useImperativeHandle(ref, handleRef)

  // Evento 'click' en el botón
  const handleClick = useCallback((event) => {
    if (!isFunction(onClick)) return

    return onClick({ event, showLoading, hideLoading })
  }, [])

  // Renderizar "loading" en el botón
  const renderLoading = useCallback(() => {
    return <span role="status" className="spinner-border spinner-border-sm text-light" {...loading} />
  }, [loading])

  // Renderizar ícono del botón
  const renderIcon = useCallback(() => {
    if (isEmptyObject(icon)) return null

    return <FontAwesomeIcon className="me-2" size={icon?.size} color={icon?.color} icon={icon.name || icon} />
  }, [icon])

  // Renderizar texto del botón
  const renderTitle = useCallback(() => {
    if (!isString(title)) return null

    return <span>{title}</span>
  }, [title])

  // Renderizar contenido del botón
  const renderContent = useCallback(() => {
    if (isLoading) return renderLoading()

    return (
      <Fragment>
        {renderIcon()}
        {renderTitle()}
      </Fragment>
    )
  }, [isLoading])

  return (
    <button onClick={handleClick} style={buttonStyle} className={buttonClassName} {...attributes}>
      {renderContent()}
    </button>
  )
})

export default memo(Button)

Button.defaultProps = {
  icon: {},
  style: {},
  title: 'button',
}
