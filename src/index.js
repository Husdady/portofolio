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

library.add(faJedi, faFileAlt, faAddressBook, faImages);

const root = document.getElementById('root');

render(<App />, root);
