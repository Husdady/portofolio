const style = {
  borderTop: 1,
  borderTopColor: '#dc3545',
  borderStyle: 'solid'
}

const Footer = () => {
  const isTable = window.innerWidth <= 768;
  const footerStyle = isTable ? style : null;

  return (
    <footer style={footerStyle} className="d-table bg-opacity col-12 mt-md-2 mt-xl-3 py-3">
      <span className="text-center d-block default-text">
        Copyright © 2019 Frontend Developer Husdady
      </span>
    </footer>
  )
}

export default Footer;
