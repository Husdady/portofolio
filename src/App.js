// Components
import Tabs from "@tabs";
import { Profile, Footer, PageNotFound } from '@layout';

// Librarys
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/page-not-found/index.css';
import '@styles/profile/index.css';
import '@styles/tabs/contact.css';
import '@styles/tabs/index.css';
import '@styles/tabs/skills.css';
import '@styles/tabs/proyects.css';

const Main = () => {
  return (
    <main className="tm-container d-flex flex-wrap justify-content-between  pt-md-3 pt-xl-5 pb-md-3 px-xl-5 px-lg-3 px-md-2">
      <Profile />
      <Tabs />
      <Footer />
    </main>
  );
}

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/pagina-no-encontrada" component={PageNotFound} />
        <Redirect to="/pagina-no-encontrada" />
      </Switch>
    </Router>
  );
}

export default App;
