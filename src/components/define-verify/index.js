import {
  Row,
  Col
} from 'react-bootstrap';
import './DefineVerify.css';
import img from './cortex.png';

const DefineVerify = props => {
  return (
    <section id='define-verify'>
      <Row className='content-row'>
        <Col md={6} md={{ order: 'first' }} sm={{ order: 'last' }} xs={{ order: 'last' }}>
          <h1>Cortex</h1>

          <h3>A behavior engine to power smart contract interactions</h3>
          <h5>Cortex allows developers to define business logic behaviour for interfacing with smart contracts. Each business logic flow is packaged into an artifact that is verifiable, immutable and trustless. Allowing predictable and secure client side interactions with the blockchain.</h5>
        </Col>
        <Col md={6} className='image-container' md={{ order: 'last' }} sm={{ order: 'first' }} xs={{ order: 'first' }}>
          <img
            src={img}
            width="350"
            height="400"
            className="d-inline-block align-top"
            alt="HyperDapp"
          />
        </Col>
      </Row>
    </section>
  );
}

export default DefineVerify;
