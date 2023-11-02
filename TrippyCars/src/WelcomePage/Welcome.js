import rentCar from "../ImageIcons/Welcome/commercial-car.png";
import useCar from "../ImageIcons/Welcome/car.png";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Welcome() {
  return (
    <Container
      style={{
        width: "50%",
      }}
    >
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          xxl={6}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <Link
            to="/Host"
            style={{
              textDecoration: "none",
            }}
          >
            <Card style={{ width: "12rem" }}>
              <Card.Img variant="top" src={rentCar} />
              <Card.Body>
                <Card.Title
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Become a Host
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          xxl={6}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <Link
            to="/User"
            style={{
              textDecoration: "none",
            }}
          >
            <Card style={{ width: "12rem" }}>
              <Card.Img variant="top" src={useCar} />
              <Card.Body>
                <Card.Title
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Rent a Car
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
export default Welcome;
