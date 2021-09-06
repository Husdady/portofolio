/* React components */
import { Component } from 'react';

/* Librarys */
import Gallery from 'react-grid-gallery';

/* JSON */
import galery from '@assets/json/galery';

export default class Galery extends Component {
  render() {
    return (
      <div className="d-table">
        <h2 className="text-danger mb-4">Fotos acerca de mí</h2>
          <Gallery backdropClosesModal images={galery} rowHeight={250} margin={5} />
      </div>
    )
  }
}