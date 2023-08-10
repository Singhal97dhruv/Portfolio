import React, { useState } from 'react';
import "./nav.css";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import BadgeIcon from '@mui/icons-material/Badge';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const handleClick = (nav) => {
    setActiveNav(nav);
  };

  return (
    <nav>
      <a href="#" onClick={() => handleClick('#')} className={activeNav === '#' ? 'active' : ''}>
        <HomeIcon/>
      </a>
      <a href="#experience" onClick={() => handleClick('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <ImportContactsIcon/>
      </a>
      <a href="#about" onClick={() => handleClick('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <PersonIcon/>
      </a>
      <a href="#services" onClick={() => handleClick('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <IntegrationInstructionsIcon/>
      </a>
      <a href="#portfolio" onClick={() => handleClick('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <AccountTreeIcon/>
      </a>
      <a href="#certifications" onClick={() => handleClick('#certifications')} className={activeNav === '#certifications' ? 'active' : ''}>
        <BadgeIcon/>
      </a>
      <a href="#contact" onClick={() => handleClick('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <CallIcon/>
      </a>
    </nav>
  );
};

export default Nav;
