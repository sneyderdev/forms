import React from 'react';

import formsIlustration from '@images/forms-ilustration.svg';

import SidebarContainer from './Sidebar.styles';

const Sidebar = () => (
  <SidebarContainer>
    <div>
      <img src={formsIlustration} alt="Forms" />
    </div>
    <div>
      <h2>
        Forms
        <br />
        for
        <br />
        everyone
      </h2>
    </div>
  </SidebarContainer>
);

export default Sidebar;
