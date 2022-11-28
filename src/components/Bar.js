import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Bar(props) {
    const {view, setView} = props;
    return (
    <Navbar bg="light" variant="light" expand="sm" style={{ position: 'fixed', width: '100%', 'border-bottom': '2px solid black', 'border-radius': '12px' }}>
        <Container>
            <Navbar.Brand><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_390552.png&f=1&nofb=1&ipt=ca7e52113e428375f0c776f775137e52260edc552f3dc48c887896c8664e1ef2&ipo=images" width={50} height={50} alt="|Училищни данни|"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {view !== "fl" && view !== "err" ? <Nav.Link onClick={() => setView("all")}>-всички-</Nav.Link> : null}
                {view !== "fl" && view !== "err" ? <Nav.Link onClick={() => setView("mid")}>-средни-</Nav.Link> : null}
                {view !== "fl" && view !== "err"? <Nav.Link onClick={() => setView("sp")}>-спортни-</Nav.Link> : null}
                {view !== "fl" && view !== "err" ? <Nav.Link onClick={() => setView("spi")}>-духовни-</Nav.Link> : null}
                {view !== "fl" && view !== "err" ? <Nav.Link onClick={() => setView("pr")}>-профилирани-</Nav.Link> : null}
                {view !== "fl" && view !== "err" ? <Nav.Link onClick={() => setView("prof")}>-професионални-</Nav.Link> : null}
                {view !== "fl" && view !== "err" ? <Nav.Link onClick={() => setView("special")}>-специални-</Nav.Link> : null}
                {view !== "fl" && view !== "err" ? <Nav.Link onClick={() => setView("art")}>-изкуства-</Nav.Link> : null}
            </Nav>
            <Nav>
                {view !== "fl" && view !== "err" ? <Nav.Link onClick={() => setView("src")}>|източници|</Nav.Link> : null}
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar> 
    );
    
}

export default Bar;