// React
import { memo, useState, useCallback, forwardRef, useImperativeHandle } from 'react';

// Librarys
import { Alert } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

// Hooks
import { useClasses } from "@hooks";

const getAlertIcon = (variant) => {
  const config = {
    success: <FontAwesomeIcon icon={faCheckCircle} className="me-2" />,
    danger: <FontAwesomeIcon icon={faTimesCircle} className="me-2" />,
  }

  return config[variant];
}

const CustomAlert = forwardRef(({ title, variant, className }, ref) => {

  const [visible, setVisible] = useState(false);

  const showAlert = useCallback(() => setVisible(true), []);
  const hideAlert = useCallback(() => setVisible(false), []);
  const handleRef = useCallback(() => ({ show: showAlert, hide: hideAlert }), []);

  useImperativeHandle(ref, handleRef);

  const alertClasses = useClasses({
    className: className,
    defaultClasses: ["text-center"]
  });

  if (!visible) return null;

  const icon = getAlertIcon(variant);
  
  return (
    <Fade bottom big collapse>
      <Alert variant={variant} className={alertClasses}>
        <div>{icon}<span className="title-custom-alert">{title}</span></div>

        <FontAwesomeIcon
          role="button"
          onClick={hideAlert}
          icon={faTimesCircle}
          className="text-black-50 close-custom-alert"
        />
      </Alert>
    </Fade>
  )
});

export default memo(CustomAlert);
