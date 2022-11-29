import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Bar(props) {
    const {view, setView} = props;
    return (
    <Navbar bg="light" variant="light" expand="sm" className="navb">
        <Container>
            <Navbar.Brand>
                <div className="logoimgdiv">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_390552.png&f=1&nofb=1&ipt=ca7e52113e428375f0c776f775137e52260edc552f3dc48c887896c8664e1ef2&ipo=images" width={50} height={50} alt="|Училищни данни|" className="logoimg"></img>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" defaultActiveKey="all">
                {view !== "fl" && view !== "err" ? <Nav.Link eventKey="all" onClick={() => setView("all")}>-всички-</Nav.Link> : null}
                {view !== "fl" && view !== "err" ? <Nav.Link eventKey="mid" onClick={() => setView("mid")}>-средни-</Nav.Link> : null}
                {view !== "fl" && view !== "err"? <Nav.Link eventKey="sp" onClick={() => setView("sp")}>-спортни-</Nav.Link> : null}
                {view !== "fl" && view !== "err" ? <Nav.Link eventKey="spi" onClick={() => setView("spi")}>-духовни-</Nav.Link> : null}
                {view !== "fl" && view !== "err" ? <Nav.Link eventKey="pr" onClick={() => setView("pr")}>-профилирани-</Nav.Link> : null}
                {view !== "fl" && view !== "err" ? <Nav.Link eventKey="prof" onClick={() => setView("prof")}>-професионални-</Nav.Link> : null}
                {view !== "fl" && view !== "err" ? <Nav.Link eventKey="special" onClick={() => setView("special")}>-специални-</Nav.Link> : null}
                {view !== "fl" && view !== "err" ? <Nav.Link eventKey="art" onClick={() => setView("art")}>-изкуства-</Nav.Link> : null}
            </Nav>
            <Nav defaultActiveKey="all">
                {view !== "fl" && view !== "err" ? <Nav.Link eventKey="src" onClick={() => setView("src")}>|източници|</Nav.Link> : null}
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar> 
    );
    
}

export default Bar;