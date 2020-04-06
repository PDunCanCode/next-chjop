import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

export const MainFooter = () => (
  <Footer>
    <Row>
      <Col sm={{ span: 22, offset: 1 }}>
        <h3>Find your next chjomp.</h3>
      </Col>
    </Row>
  </Footer>
);
