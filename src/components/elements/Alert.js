import { useState, useCallback, forwardRef, useImperativeHandle, memo } from 'react';

/* Librarys */
import { Alert } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';

const iconStyle = { marginRight: 6 }

const Icon = ({ name }) => <i className={`fas fa-${name}`} style={iconStyle} />

const getIcon = variant => {
  switch (variant) {
    case 'success':
      return <Icon name="check-circle" />
    case 'danger':
      return <Icon name="times-circle" />
    default:
      return null;
  }
}

const CustomAlert = forwardRef(({ variant, title }, ref) => {
  const icon = getIcon(variant);
  const [visible, setVisible] = useState(false);

  const showAlert = () => setVisible(true);
  const hideAlert = () => setVisible(false);

  const handleRef = useCallback(() => ({ show: showAlert, hide: hideAlert }), []);

  useImperativeHandle(ref, handleRef);

  if (!visible) {
    return null;
  }

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