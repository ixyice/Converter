import Form from 'react-bootstrap/Form';
import '../styles/Temperature.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function SelectTemp() {
  return (
    <Form.Select aria-label="Default select example">
      <option value="none" selected disabled hidden>Select</option>
      <option>Celsius</option>
      <option>Fahrenheit</option>
      <option value="3">Kelvin</option>
      <option value="3">Rankine</option>
    </Form.Select>
  );
}

function Temperature() {
    return(
        <> 
            <Container className='m-4'>
                <Row className='p-2 border'>
                    <h2>Temperature</h2>
                </Row>
                <Row className='p-4 border'>
                    <Col> <SelectTemp /> </Col>
                    <Col xs={2}> <h5>to</h5> </Col>
                    <Col> <SelectTemp /> </Col>
                </Row>

                <Row className='p-4 border'>
                    <Col>Temp 1</Col>
                    <Col><input type="number" placeholder="qwe"></input></Col>
                    <Col>K</Col>
                </Row>

                <Row className='p-4 border'>
                    <Col>Temp 1</Col>
                    <Col><input type="number" placeholder="qwe" disabled></input></Col>
                    <Col>K</Col>
                </Row>

                
                
            </Container>


            
        </>
        
    )
}

export default Temperature;