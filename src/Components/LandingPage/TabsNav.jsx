import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


function TabsNav() {
    const tabItems = [
        { label: 'Missing Persons', component: <Home /> },
        { label: 'About', component: <About /> },
        { label: 'Contact', component: <Contact /> }
      ];
      
  return (
    <div>TabsNav</div>
  )
}

export default TabsNav
