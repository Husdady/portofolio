/* React components */
import { Component, PureComponent } from 'react';

/* Components */
import Skills from './Skills';
import Proyects from './Proyects';
import Galery from './Galery';
import Contact from './Contact';

/* Librarys */
import { Nav } from 'react-bootstrap';

/* JSON */
import tabs from '@assets/json/tabs';

const getCurrentKey = key => {
  switch (key) {
    case 'skills':
      return <Skills />;
    case 'proyects':
      return <Proyects />;
    case 'galery':
      return <Galery />;
    case 'contact':
      return <Contact />;
    default:
      return null;
  }
}

export default class Tabs extends PureComponent {
  state = {
    activeKey: "skills"
  }
  handleChangeKey = activeKey => this.setState({ activeKey });
  render() {
    const { activeKey } = this.state;
    const currentTab = getCurrentKey(activeKey);
    return (
      <div className={`tm-information bg-opacity ${activeKey === 'proyects' ? 'active-tab' : 'inactive-tab'}`}>
        <Nav variant="tabs" defaultActiveKey="skills" className="border-opacity">
          {
            tabs.map((tab, i) => (
              <Nav.Item key={i} onClick={() => this.handleChangeKey(tab.eventKey)}>
                <Nav.Link className="bg-transparent py-2 px-4 rounded-0 border-0" eventKey={tab.eventKey}>
                  <i className={`fas fa-${tab.iconName}`} />{tab.name}
                </Nav.Link>
              </Nav.Item>
            ))
          }
        </Nav>
        <div className={`px-4 pt-4 ${["galery"].includes(activeKey) ? "pb-3" : "pb-5"}`}>{currentTab}</div>
      </div>
    )
  }
}