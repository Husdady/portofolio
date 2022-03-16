// React
import { render } from 'react-dom';

// Components
import App from './App';

// Librarys
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faJedi,
  faFileAlt,
  faImages,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

import { fab, faFacebookSquare, faTwitter, faInstagram,  } from "@fortawesome/free-brands-svg-icons";

library.add(
	fab,
	faJedi,
	faFileAlt,
	faAddressBook,
	faImages,
	faFacebookSquare, faTwitter, faInstagram, 
);

const root = document.getElementById('root');

render(<App />, root);
