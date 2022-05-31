// Librarys
import Gallery from 'react-grid-gallery'

// JSON
import gallery from '@assets/json/gallery/photos'

export default function MyGalleryPhotos() {
  return (
    <div className="d-table">
      <h2 className="text-danger mb-4">Photos about me</h2>
      <Gallery images={gallery} rowHeight={250} margin={5} backdropClosesModal />
    </div>
  )
}
