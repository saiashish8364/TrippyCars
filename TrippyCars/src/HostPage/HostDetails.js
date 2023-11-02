import { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

function HostDetails() {
  const [open, setOpen] = useState(false);
  const [host, setHost] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    carName: "",
    carCategory: "",
    carNo: "",
    carImg: "",
  });
  async function fetchDetails() {
    const data = await fetch(
      `https://trippy-cars-default-rtdb.firebaseio.com/HostBase/${localStorage.getItem(
        "user"
      )}.json`
    );
    const dataJson = await data.json();

    for (const key in dataJson) {
      setHost(dataJson[key]);
      break;
    }
  }
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6}>
            <section
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "25px",
                marginBottom: "25px",
              }}
            >
              <Button
                variant="dark"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                Your Profile
              </Button>
            </section>

            <Collapse in={open}>
              <Container id="example-collapse-text">
                <Table striped borderless hover>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{host.name}</td>
                    </tr>
                    <tr>
                      <td>Mobile No.</td>
                      <td>{host.mobile}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>{host.address}</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>{host.city}</td>
                    </tr>
                    <tr>
                      <td>State</td>
                      <td>{host.state}</td>
                    </tr>
                    <tr>
                      <td>Pincode</td>
                      <td>{host.pincode}</td>
                    </tr>
                  </tbody>
                </Table>
              </Container>
            </Collapse>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6}>
            <section
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "25px",
              }}
            >
              <Card style={{ width: "15rem" }}>
                <section
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Card.Img
                    style={{ width: "150px", height: "200px" }}
                    variant="top"
                    src={host.carImg.toString()}
                  />
                </section>

                <Card.Body>
                  <Card.Title
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {host.carName}
                  </Card.Title>
                  <Card.Text
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Category:{host.carCategory}
                  </Card.Text>
                  <Card.Text
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Car No.:{host.carNo.toLocaleUpperCase()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default HostDetails;
