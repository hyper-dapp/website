import {
  Row,
  Col
} from 'react-bootstrap';
import './Decentralized.css';
import img from './decentralized.png';

const Decentralized = props => {
  return (
    <section id='decentralized'>
      <Row className='content-row'>
        <Col md={6} className='image-container'>
          <img
            src={img}
            width="350"
            height="400"
            className="d-inline-block align-top"
            alt="HyperDapp"
          />
        </Col>
        <Col md={6}>
          <h1>Hubnet</h1>

          <h3>A decentralized registry for cortex flows</h3>
          <h5>Hubnet allows developers to publish their cortex flow so that their dapp business logic is always available and ready to use by anyone who wishes to interact with their smart contracts in a predictable and secure manner.</h5>
        </Col>

      </Row>
    </section>
  );
}

export default Decentralized;
