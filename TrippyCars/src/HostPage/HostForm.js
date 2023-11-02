import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useRef } from "react";

function HostForm() {
  const name = useRef();
  const mobile = useRef();
  const address = useRef();
  const city = useRef();
  const state = useRef();
  const pincode = useRef();
  const carName = useRef();
  const carCategory = useRef();
  const carNo = useRef();
  const imgUrl = useRef();

  async function formSubmitHandler(e) {
    const cardata = {
      name: name.current.value,
      mobile: mobile.current.value,
      address: address.current.value,
      city: city.current.value,
      state: state.current.value,
      pincode: pincode.current.value,
      carName: carName.current.value,
      carCategory: carCategory.current.value,
      carNo: carNo.current.value,
      carImg: imgUrl.current.value,
    };
    try {
      const response = await fetch(
        `https://trippy-cars-default-rtdb.firebaseio.com/HostBase/${localStorage.getItem(
          "user"
        )}.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cardata),
        }
      );
      if (response.ok) {
        await fetch(
          `https://trippy-cars-default-rtdb.firebaseio.com/hostStatus/${localStorage.getItem(
            "user"
          )}/${localStorage.getItem("_id").toString()}.json`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ isHost: true }),
          }
        );
        localStorage.setItem("isHost", true);
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Form onSubmit={formSubmitHandler}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="fullName">
          <Form.Label>Enter FullName</Form.Label>
          <Form.Control type="text" placeholder="FullName" ref={name} />
        </Form.Group>

        <Form.Group as={Col} controlId="mobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="number" placeholder="Mobile No." ref={mobile} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Street Address" ref={address} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control ref={city} />
        </Form.Group>

        <Form.Group as={Col} controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." ref={state}>
            <option>Choose...</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="pincode">
          <Form.Label>Pincode</Form.Label>
          <Form.Control ref={pincode} />
        </Form.Group>
      </Row>
      <Row className="mb-6">
        <Form.Group as={Col} controlId="carName">
          <Form.Label>Car Brand and Model</Form.Label>
          <Form.Control ref={carName} />
        </Form.Group>

        <Form.Group as={Col} controlId="typeOfCar">
          <Form.Label>Category</Form.Label>
          <Form.Select defaultValue="Choose..." ref={carCategory}>
            <option>Choose...</option>
            <option value="SUV">SUV</option>
            <option value="Seaden">Seaden</option>
            <option value="HatchBack">Hatch Back</option>
            <option value="Microcar">Microcar</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="carNumber">
          <Form.Label>Car Registration No.</Form.Label>
          <Form.Control ref={carNo} />
        </Form.Group>

        <Form.Group as={Col} controlId="carPic">
          <Form.Label>Link of Car Image {"(size >100KB preffered)"}</Form.Label>
          <Form.Control ref={imgUrl} />
        </Form.Group>
      </Row>

      {/* <Form.Group className="mb-3" id="agreeBox">
        <Form.Check type="checkbox" label="I Agree" />
      </Form.Group> */}

      <Button
        variant="outline-secondary"
        type="submit"
        style={{
          marginTop: "30px",
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default HostForm;
