import {
  Row,
  Col
} from 'react-bootstrap';
import './Composable.css';
import img from './composable.png';

const Composable = props => {
  return (
    <section id='composable'>
      <Row className='content-row'>
        <Col md={6} md={{ order: 'first' }} sm={{ order: 'last' }} xs={{ order: 'last' }}>
          <h1>Composable and Interoperable for the Web3 world</h1>

          <h3>Define the business logic once and use everywhere</h3>
          <h5>Cortex is designed to work on any text based interface. Allowing chatbots, CLIs, meta-verse platforms or any platform supporting text to use the cortex engine to interface with smart contracts.</h5>
        </Col>
        <Col className='image-container' md={6} md={{ order: 'last' }} sm={{ order: 'first' }} xs={{ order: 'first' }}>
          <img
            src={img}
            width="400"
            height="400"
            className="d-inline-block align-top"
            alt="HyperDapp"
          />
        </Col>
      </Row>
    </section>
  );
}

export default Composable;
