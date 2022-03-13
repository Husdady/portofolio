// React
import { memo } from "react";

// Librarys
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const ErrorMessage = ({ title, color, containerStyle, containerClassName }) => {
  return (
    <div style={containerStyle} className={containerClassName}>
      <FontAwesomeIcon
        color={color}
        className="me-1"
        icon={faExclamationCircle}
      />
      <small style={{ color }}>{title}</small>
    </div>
  )
}

export default memo(ErrorMessage);
export {
  renderError
}

ErrorMessage.defaultProps = {
  color: "var(--bs-danger)",
  containerClassName: "ps-2",
}

function renderError(error) {
  if (!error) return;

  return <ErrorMessage title={error} />
}