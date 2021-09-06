/* React components */
import { Component } from 'react';

/* Components */
import Profile from '@dist/Profile';
import Information from '@dist/Information';
import Footer from '@dist/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="tm-container d-flex flex-wrap justify-content-between  pt-md-3 pt-xl-5 pb-md-3 px-xl-5 px-lg-3 px-md-2">
        <Profile />
        <Information />
        <Footer />
      </div>
    );
  }
}
