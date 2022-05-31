// Librarys
import Image from 'react-bootstrap/Image'

const imageStyle = {
	objectFit: 'cover',
}

const HusdadyPhoto = () => {
  return (
    <div className="tm-profile-picture mx-auto overflow-hidden rounded-circle">
      <Image fluid src="https://i.imgur.com/jit05Zh.png" alt="developer-husdady" className="h-100 w-100" style={imageStyle} />
    </div>
  )
}

export default HusdadyPhoto
