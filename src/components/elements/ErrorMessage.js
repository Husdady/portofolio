const styles = {
  container: {
    color: 'blanchedalmond',
  paddingLeft: 10
  },
  icon: {
    marginRight: 4
  }
}

const ErrorMessage = ({ title, style }) => {
  return (
    <div className="error-message" style={{...styles.container, ...style}}>
      <i className="fas fa-exclamation-circle" style={styles.icon} />
      <span>{title}</span>
    </div>
  )
}

export default ErrorMessage;