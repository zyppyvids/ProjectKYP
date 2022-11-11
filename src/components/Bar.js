import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Bar(props) {
    const {view, setView} = props;
    return (
    <Navbar bg="light" variant="light" expand="sm" style={{ position: 'fixed', width: '100%', 'border-bottom': '2px solid black', 'border-radius': '12px' }}>
        <Container>
            <Navbar.Brand><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_390552.png&f=1&nofb=1&ipt=ca7e52113e428375f0c776f775137e52260edc552f3dc48c887896c8664e1ef2&ipo=images" width={50} height={50} alt="-car-"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {view !== "fl" ? <Nav.Link onClick={() => setView("all")}>-all-</Nav.Link> : null}
                {view !== "fl" ? <Nav.Link onClick={() => setView("mid")}>-mid schools-</Nav.Link> : null}
                {view !== "fl" ? <Nav.Link onClick={() => setView("sp")}>-spiritual-</Nav.Link> : null}
                {view !== "fl" ? <Nav.Link onClick={() => setView("pr")}>-profiled-</Nav.Link> : null}
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar> 
    );
    
}

export default Bar;