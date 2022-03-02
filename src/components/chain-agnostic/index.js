import {
  Row,
  Col
} from 'react-bootstrap';
import './ChainAgnostic.css';
import img from './chain-agnostic.png';

const ChainAgnostic = props => {
  return (
    <section id='chain-agnostic'>
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
          <h1>Chain Agnostic</h1>

          <h3>Cortex works with any EVM supported blockchain</h3>
          <h5>Define flows to work with smart contracts on Ethereum, Polygon, Arbitrum or any other EVM supported chain.</h5>
        </Col>
      </Row>
    </section>
  );
}

export default ChainAgnostic;
