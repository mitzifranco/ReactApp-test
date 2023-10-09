import BrandExample from "./NavBar";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './AllAireLOGO.png';
import './App.css';
import Button from 'react-bootstrap/Button';

function App(){
    return (
        <>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" style={{color: "green"}}>
            <img
              alt=""
              src={logo}
              width="60"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            All Aire
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="d-grid gap-2">
      <Button variant="secondary" size="lg">
        Temperature
      </Button>
      <Button variant="secondary" size="lg">
        Carbon Dioxide (CO2)
      </Button>
      <Button variant="secondary" size="lg">
        Smoke Detection
      </Button>
      <Button variant="secondary" size="lg">
        Differential Pressure
      </Button>
      <Button variant="secondary" size="lg">
        Indoor Air Quality (IAQ)
      </Button>
    </div>
        </>
    )
}

export default App;
