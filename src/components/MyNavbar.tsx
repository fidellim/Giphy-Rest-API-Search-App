import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav, NavDropdown } from 'react-bootstrap';
import giphy_logo from '../assets/giphy_logo.svg'
import Switch from "react-switch";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const MyNavbar = () => {
  const html = document.querySelector('html');
  const [isToggled, setIsToggled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState("theme-light");
  if (html)
    html.dataset.theme = isDarkTheme;

  const handleToggle = () => {
      setIsToggled(!isToggled);
      (isDarkTheme === "theme-dark") ?setIsDarkTheme("theme-light") : setIsDarkTheme("theme-dark")
  }

  return (
    <>
      <Navbar className="py-3 shadow navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={giphy_logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <h4 className="ms-3 d-inline navbarTitle">
              Giphy REST API
            </h4>
          </Navbar.Brand>
          <Switch
            onChange={handleToggle}
            checked={isToggled}
            width={70}
            offColor="#165c9e"
            onColor="#a2d2ff"
            offHandleColor="#003566"
            onHandleColor="#45a5ff"
            handleDiameter={35}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            uncheckedIcon={<DarkModeIcon className="fs-5" style={{marginLeft: 12, color: "white"}}/>}
            checkedIcon={<LightModeIcon className="fs-5 ms-2" />}
          />
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar