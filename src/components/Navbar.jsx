import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions || !ref?.current) return;
      const navbarOffset = ref.current.offsetTop || 0;
      currPos.y + navbarOffset - navBottom > 5 ? setIsTop(true) : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions || !ref?.current) return;
    const navbarOffset = ref.current.offsetTop || 0;
    navBottom - scrollPosition >= navbarOffset ? setIsTop(false) : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top ${!isTop ? "navbar-white" : "navbar-transparent"}`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand" href="#home">
        Home
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {repos.show && (
            <a className="nav-item lead nav-link" href="#projects">
              Projects
            </a>
          )}
          {/* 🔥 Corrected Resume Link */}
          <a 
           className="nav-item lead nav-link" 
           href={process.env.PUBLIC_URL + "/Resume.pdf"} 
           target="_blank" 
           rel="noopener noreferrer">
  Resume
</a>

          {about.show && (
            <a className="nav-item lead nav-link" href="#aboutme">
              About
            </a>
          )}
          {skills.show && (
            <a className="nav-item lead nav-link" href="#skills">
              Skills
            </a>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
