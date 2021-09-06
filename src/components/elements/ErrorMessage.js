const styles = {
  container: {
    color: 'blanchedalmond',
  paddingLeft: 10
  },
  icon: {
    marginRight: 4,
    fontSize: 14
  }
}

const ErrorMessage = ({ title, style }) => {
  return (
    <div className="error-message" style={{...styles.container, ...style}}>
      <i className="fas fa-exclamation-circle" style={styles.icon} />
      <small>{title}</small>
    </div>
  )
}

export default ErrorMessage;