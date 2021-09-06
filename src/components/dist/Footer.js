/* React components */
import { Component } from 'react';

const styleFooter = {
  borderTop: 1,
  borderTopColor: '#dc3545',
  borderStyle: 'solid'
}

export default class Footer extends Component {
  constructor() {
    super();
    this.year = new Date().getFullYear()
  }
  render() {
    return (
      <footer style={window.innerWidth < 768 ? styleFooter : null} className="d-table bg-opacity col-12 mt-md-2 mt-xl-3 py-3">
        <span className="text-center d-block default-text">
          Copyright © {this.year} Desarrollador Frontend Husdady
        </span>
      </footer>
    )
  }
}