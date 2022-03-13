import { memo, useState, useCallback, forwardRef, useImperativeHandle } from 'react';

/* Librarys */
import { Alert } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const getAlertIcon = (variant) => {
  const config = {
    success: <FontAwesomeIcon icon={faCheckCircle} className="me-2" />,
    danger: <FontAwesomeIcon icon={faTimesCircle} className="me-2" />,
  }

  return config[variant];
}

const CustomAlert = forwardRef(({ variant, title }, ref) => {

  const [visible, setVisible] = useState(false);

  const showAlert = useCallback(() => setVisible(true), []);
  const hideAlert = useCallback(() => setVisible(false), []);
  const handleRef = useCallback(() => ({ show: showAlert, hide: hideAlert }), []);

  useImperativeHandle(ref, handleRef);

  if (!visible) return null;

  const icon = getAlertIcon(variant);
  
  return (
    <div className="custom-alert">
      <Bounce>
        <Alert variant={variant} className="text-center">
          <div>{icon}<span className="title_custom_alert">{title}</span></div>
          <i onClick={hideAlert} className="fas fa-times-circle text-dark hide_alert" />
        </Alert>
      </Bounce>
    </div>
  )
});

export default memo(CustomAlert);
