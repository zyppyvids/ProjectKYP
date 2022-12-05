import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import React from "react";

function Sources() {
    return (
    <Container>
        <Form.Group controlId="formFile" className="mb-3">
            <h1 style={{textAlign:'center', color:'rgb(100, 52, 155)'}}>-източници-</h1>
            <br/>
            <ListGroup style={{textAlign:'center'}}>
                <ListGroup.Item variant="dark">
                    ReactJS [https://reactjs.org/]
                </ListGroup.Item>
                <ListGroup.Item variant="light">
                    Papa Parse [https://www.papaparse.com/]
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                    CanvasJS [https://canvasjs.com/]
                </ListGroup.Item>
                <ListGroup.Item variant="light">
                    React Bootstrap [https://react-bootstrap.netlify.app]
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                    Open Data Protal BG [https://data.egov.bg/]
                </ListGroup.Item>
                <ListGroup.Item variant="light">
                    Eurostat [https://ec.europa.eu/eurostat/]
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                    Open Data Portal IN [https://visualize.data.gov.in/]
                </ListGroup.Item>
            </ListGroup>
        </Form.Group>
    </Container>
    );
}

export default Sources;