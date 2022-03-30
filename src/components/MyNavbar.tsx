import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav, NavDropdown } from 'react-bootstrap';
import giphy_logo from '../assets/giphy_logo.svg'
import Switch from "react-switch";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const MyNavbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
      setIsToggled(!isToggled);
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" className="py-3">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={giphy_logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <h4 className="ms-3" style={{display:"inline"}}>
              Giphy REST API
            </h4>
          </Navbar.Brand>
          <Switch
            onChange={handleToggle}
            checked={isToggled}
            width={70}
            offColor="#7f5539"
            onColor="#FCDAB7"
            offHandleColor="#FCDAB7"
            onHandleColor="#7f5539"
            handleDiameter={35}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            uncheckedIcon={<DarkModeIcon className="fs-5" style={{marginLeft: 12, color: "white"}}/>}
            checkedIcon={<LightModeIcon className="fs-5 ms-2" />} />
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar