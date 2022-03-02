import {
  Row,
  Col
} from 'react-bootstrap';
import './Home.css';

const Home = props => {
  return (
    <section className='splash' id='home'>
      <Row className='content-row'>
        <Col md={8}>
          <h1>Smart contracts require smart interactions</h1>
          <br/>
          <h3>Create trustless front-end behaviours for your dApps</h3>
          <br/>
          <h5>Smart contracts on the blockchain are decentralized, immutable and verifiable.</h5>
          <h5>HyperDapp powers front-end behaviours to be as well by delivering security, efficiency, decentralization and transparency on the interface layer of dApps.</h5>
        </Col>
      </Row>
    </section>
  );
}

export default Home;
