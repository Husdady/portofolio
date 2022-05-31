// React
import { useState, useCallback, useMemo } from 'react'

// Components
import Skills from './Tab.Skills'
import Proyects from './Tab.Proyects'
import Gallery from './Tab.Gallery'
import Contact from './Tab.Contact'

// Librarys
import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// JSON
import tabs from '@assets/json/common/tabs'

const pageTabs = {
  skills: <Skills />,
  proyects: <Proyects />,
  galery: <Gallery />,
  contact: <Contact />,
}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('skills')

  const currentTab = useMemo(() => {
    return pageTabs[activeTab]
  }, [activeTab])

  // Renderizar tabs
  const TabList = useCallback(() => {
    return tabs.map((tab, i) => (
      <Nav.Item key={i} onClick={() => setActiveTab(tab.eventKey)}>
        <Nav.Link eventKey={tab.eventKey} className="bg-transparent py-2 px-4 rounded-0 border-0">
          <FontAwesomeIcon icon={tab.icon} className="me-2" />
          <span>{tab.name}</span>
        </Nav.Link>
      </Nav.Item>
    ))
  }, [])

  return (
    <section className="tm-information bg-opacity inactive-tab">
      <Nav variant="tabs" defaultActiveKey="skills" className="border-opacity">
        <TabList />
      </Nav>

      <section className="px-3 pt-4 pb-3 pb-xl-5">{currentTab}</section>
    </section>
  )
}

export default Tabs
export { Skills, Proyects, Gallery, Contact }
