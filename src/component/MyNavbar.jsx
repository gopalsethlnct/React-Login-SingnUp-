import { Collapse,  Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from "reactstrap";

export function MyNavbar(){
    return (<div style={{background:"white",height:"100px"}}>
  <Navbar
    color="light"
    expand="md"
    fixed="top"
    light
  >
    <NavbarBrand href="/">
      Users App
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem >
          <div>

          <NavLink  style={{backgroundcolor:"red"}} href="/">
            LogOut
          </NavLink>
          </div>
        </NavItem>
       
        
      </Nav>
      <NavbarText>
        Welcome
      </NavbarText>
    </Collapse>
  </Navbar>
</div>
  )
}