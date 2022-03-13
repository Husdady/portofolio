// React
import { useState, useCallback } from 'react';

// Components
import Skills from './Skills';
import Proyects from './Proyects';
import Gallery from './Gallery';
import Contact from './Contact';

// Librarys
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// JSON
import tabs from '@assets/json/common/tabs';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const getCurrentTab = useCallback((currentTab) => {
    const pageTabs = {
      skills: <Skills />,
      proyects: <Proyects />,
      galery: <Gallery />,
      contact: <Contact />,
    }
    
    return pageTabs[currentTab];
  }, []);

  const currentTab = getCurrentTab(activeTab);

  const renderTabs = useCallback(() => {
    return tabs.map((tab, i) => (
      <Nav.Item key={i} onClick={() => setActiveTab(tab.eventKey)}>
        <Nav.Link
          eventKey={tab.eventKey}
          className="bg-transparent py-2 px-4 rounded-0 border-0"
        >
          <FontAwesomeIcon icon={tab.icon} className="me-2" />
          <span>{tab.name}</span>
        </Nav.Link>
      </Nav.Item>
    ))
  }, []);

  return (
    <section className="tm-information bg-opacity inactive-tab">
      <Nav variant="tabs" defaultActiveKey="skills" className="border-opacity">
        {renderTabs()}
      </Nav>

      <section className="px-3 pt-4 pb-3 pb-xl-5">{currentTab}</section>
    </section>
  )
}

export default Tabs;
export {
  Skills,
  Proyects,
  Gallery,
  Contact,
}