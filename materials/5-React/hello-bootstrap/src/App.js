import './App.css';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';

function App() {

  const [showLoading, updateLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      updateLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {/* {showLoading
        ? <Spinner animation="grow" />
        : <> */}
      <Container>
        <Row className='my-row'>
          <Col xs={12} md={4}>
            <Button variant="primary">
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Wait
            </Button>
          </Col>
          <Col xs={12} md={4}>
            <Button variant="outline-success">Success Outline</Button>
          </Col>
        </Row>
        <Row>
          <Button variant="danger" bsPrefix='bootcamp' size='lg'>Danger Big Outline</Button>
          <Button variant="secondary" size='sm'>Secondary Big Outline</Button>
        </Row>
      </Container>
      {/* </>} */}


    </div>
  );
}

export default App;
