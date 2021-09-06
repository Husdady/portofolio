const CustomAlert = props => {
  return (
    <Alert variant={props.variant} className="custom-alert text-center">
      {props.children}
      <i className="fas fa-check-circle" style={{ marginRight: 6 }} />

      <span>Se envió correctamente tu mensaje</span>
    </Alert>
  )
}

export default CustomAlert;