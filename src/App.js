/* React components */
import { Component } from 'react';

/* Components */
import { Profile, Information, Footer, Page404 } from '@dist';

/* Librarys */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

class Portofolio extends Component {
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

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Portofolio} />
          <Route path="/pagina-no-encontrada" component={Page404} />
          <Redirect to="/pagina-no-encontrada" />
        </Switch>
      </Router>
    );
  }
}