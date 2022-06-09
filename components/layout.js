import { Col, Container, Row } from 'react-bootstrap';
import { Breakpoint } from 'react-socks';
import Header from './header';

export default function Layout({ children }) {
  return (
    <main style={{ padding: '80px 0' }}>
      <Header />
      <Row style={{ paddingTop: '40px', justifyContent: 'center' }}>
        <Col lg={8} xl={7}>
          {children}
        </Col>
        <Col lg={3}>
          <Breakpoint large up style={{ position: 'sticky', top: '120px' }}>
            <h4 style={{ fontWeight: '800' }}>Other Articles</h4>
          </Breakpoint>
        </Col>
      </Row>
    </main>
  );
}
