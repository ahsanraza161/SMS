import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './header.css';
const Hamburger = () => {
  const [Sidebar, Setsidebar] = useState(false);
  const Sidebarhandler = () => {
    Setsidebar(!Sidebar);
  };
  return (
    <header>
      <Container fluid>
        <div className="sidebar" style={{ left: Sidebar ? '0%' : '-100%' }}>
          <div className="close-icon">
            <i class="fa-solid fa-xmark" onClick={Sidebarhandler}></i>
          </div>
          <ul>
            <li>Dashboard</li>
            <li>Students</li>
            <li>Teachers</li>
            <li>Results</li>
            <li>User Managment</li>
          </ul>
        </div>
        <div className="menu" onClick={Sidebarhandler}>
          <i class="fa-solid fa-bars"></i>
        </div>
      </Container>
    </header>
  );
};

export default Hamburger;
