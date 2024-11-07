import Form from 'react-bootstrap/Form';
import '../styles/Temperature.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState} from 'react';

function SelectTemp({ onChange }) {
    const [temp, setTemp] = useState("");

    const updateTemp = event => {
        setTemp(event.target.value);
        onChange(event.target.value);
    };

    return (
        <Form.Select aria-label="Default select example" onChange={updateTemp} defaultValue="DEFAULT">
            <option value="DEFAULT" disabled hidden>Select</option>
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Kelvin">Kelvin</option>
            <option value="Rankine">Rankine</option>
        </Form.Select>
    );
}


function getUnitSymbol(temp){
    switch (temp) {
        case "Celsius":
            return "°C";
        case "Fahrenheit":
            return "°F";
        case "Kelvin":
            return "K";
        case "Rankine":
            return "°R";
        default:
            return "";
    }
};

function convertTemp(value, fromUnit, toUnit) {
    let temp = parseFloat(value);

    if (isNaN(temp)) return "";

    // Convert from the selected fromUnit to Celsius
    switch (fromUnit) {
        case "Fahrenheit":
            temp = (temp - 32) * 5 / 9;
            break;
        case "Kelvin":
            temp = temp - 273.15;
            break;
        case "Rankine":
            temp = (temp - 491.67) * 5 / 9;
            break;
    }

    // Convert from Celsius to the selected toUnit
    switch (toUnit) {
        case "Fahrenheit":
            return (temp * 9 / 5) + 32;
        case "Kelvin":
            return temp + 273.15;
        case "Rankine":
            return (temp + 273.15) * 9 / 5;
        default: // Celsius
            return temp;
    }
};



function Temperature() {

    const getMessage = (temp) => temp ? `${temp}` : "";

    const [Temp1, setTemp1] = useState("");
    const [Temp2, setTemp2] = useState("");
    const [tempInput, setTempInput] = useState("");

    const handleTemp1 = value => {
        setTemp1(value);
    };

    const handleTemp2 = value => {
        setTemp2(value);
    };

    const [tempOutput, setTempOutput] = useState("");

    const handleTempInput = event => {
        
        const inputValue = event.target.value;
        setTempInput(inputValue);
        const convertedValue = convertTemp(inputValue, Temp1, Temp2);
        setTempOutput(convertedValue);
    };

    return (
        <>
            <Container className='m-4'>
                <Row className='p-2 border'>
                    <h2>Temperature</h2>
                </Row>
                <Row className='p-4 border'>
                    <Col> <SelectTemp onChange={handleTemp1} /> </Col>
                    <Col xs={2}> <h5>to</h5> </Col>
                    <Col> <SelectTemp onChange={handleTemp2} /> </Col>
                </Row>

                <Row className='p-4 border'>
                    <Col><p>{getMessage(Temp1)}</p></Col>
                    <Col><input type="number" placeholder="Enter Temperature" value={tempInput} onChange={handleTempInput}  /></Col>
                    <Col><p>{getUnitSymbol(Temp1)}</p></Col>
                </Row>

                <Row className='p-4 border'>
                    <Col><p>{getMessage(Temp2)}</p></Col>
                    <Col><input type="number" placeholder="Converted Temperature" disabled value={tempOutput} /></Col>
                    <Col><p>{getUnitSymbol(Temp2)}</p></Col>
                </Row>
            </Container>
        </>
    );
}

export default Temperature;
