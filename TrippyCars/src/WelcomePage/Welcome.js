import rentCar from "../ImageIcons/Welcome/commercial-car.png";
import useCar from "../ImageIcons/Welcome/car.png";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Welcome() {
  return (
    <>
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
      <Container
        style={{
          marginTop: "25px",
        }}
      >
        <p style={{ fontSize: "1.3rem", fontWeight: "lighter" }}>
          Terms and conditions to remember
        </p>
        <p style={{ fontSize: "0.8rem", fontWeight: "bolder" }}>For Hosting:</p>
        <ul
          style={{
            fontSize: "0.8rem",
            fontWeight: "lighter",
            listStyleType: "circle",
          }}
        >
          <li>
            An amount of Rs.2000 is giver for every booking and is fixed for
            every car.
          </li>
          <li>User can host only a single car.</li>
        </ul>
        <p style={{ fontSize: "0.8rem", fontWeight: "bolder" }}>For Renting:</p>
        <ul
          style={{
            fontSize: "0.8rem",
            fontWeight: "lighter",
            listStyleType: "circle",
          }}
        >
          <li>Any car you choose you need to pay Rs.3000.</li>
          <li>
            Your trip comes with an limited kilometers range of 500. There after
            an amount of Rs.15 charged per every KM and given to host.
          </li>
          <li>
            All the cars are GPS enabled. And the Renters need to give their
            orginal DL while collecting car and pick the DL after returnig back
            the car.
          </li>
          <li>
            Your trip is insured. If car gets break down or any other damage its
            covered up to some extent. Other than any expences you need to pay.
          </li>
        </ul>
      </Container>
    </>
  );
}
export default Welcome;
