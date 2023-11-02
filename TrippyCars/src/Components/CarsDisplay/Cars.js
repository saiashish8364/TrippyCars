import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useRef } from "react";
import "./DatePicker.css";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are 0-based.
const day = String(currentDate.getDate()).padStart(2, "0");
const formattedDate = `${year}${month}${day}`;

function Cars({ cars }) {
  const carStoreData = useSelector((state) => state.cars.carsData);
  const [show, setShow] = useState(false);
  const date = useRef();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  async function bookingHandler(id) {
    const x = String(date.current.value);
    const dateStr = x.replaceAll("-", "");
    if (Number(formattedDate <= Number(dateStr))) {
      try {
        const response = await fetch(
          `https://trippy-cars-default-rtdb.firebaseio.com/bookings/${dateStr}.json`
        );
        if (response.ok) {
          var keyCopy;
          const data = await response.json();
          if (data === null) {
            await fetch(
              `https://trippy-cars-default-rtdb.firebaseio.com/bookings/${dateStr}.json`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify([id]),
              }
            );

            var userBookingUpload;
            for (const key in carStoreData) {
              if (carStoreData[key].key === id) {
                userBookingUpload = carStoreData[key];
                break;
              }
            }
            await fetch(
              `https://trippy-cars-default-rtdb.firebaseio.com/userBooking/${String(
                localStorage.getItem("user")
              )}.json`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify([
                  { ...userBookingUpload, dateOfBooking: String(x) },
                ]),
              }
            );
          }
          if (data !== null) {
            let temp;
            for (const key in data) {
              keyCopy = key;
              temp = data[key];
            }
            if (temp.includes(String(id))) {
              alert(
                "this car is not available on selected date. Proceed with another car or change the date."
              );
            } else {
              await fetch(
                `https://trippy-cars-default-rtdb.firebaseio.com/bookings/${dateStr}/${keyCopy}.json`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify([...temp, id]),
                }
              );
              const userBookingsGet = await fetch(
                `https://trippy-cars-default-rtdb.firebaseio.com/userBooking/${String(
                  localStorage.getItem("user")
                )}.json`
              );
              const userBookingsGetData = await userBookingsGet.json();
              var userBookingGetKey;
              var userBookingupdateGetData;
              for (const key in userBookingsGetData) {
                userBookingGetKey = key;
                userBookingupdateGetData = userBookingsGetData[key];
              }

              var userBookingUploadData;
              for (const key in carStoreData) {
                if (carStoreData[key].key === id) {
                  userBookingUploadData = carStoreData[key];
                  break;
                }
              }

              await fetch(
                `https://trippy-cars-default-rtdb.firebaseio.com/userBooking/${String(
                  localStorage.getItem("user")
                )}/${userBookingGetKey}.json`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify([
                    { ...userBookingUploadData, dateOfBooking: String(x) },
                    ...userBookingupdateGetData,
                  ]),
                }
              );
            }
          }
        } else {
          alert("An error occured. Try later.");
        }
      } catch (error) {
        console.log("catch");
      }
    } else {
      alert("Past dates cannot be selected. Try again with current dates.");
    }
    setShow(false);
  }
  return (
    <>
      <Col
        xs={12}
        sm={12}
        md={12}
        lg={3}
        xl={3}
        xxl={3}
        onClick={handleShow}
        style={{
          cursor: "pointer",
        }}
      >
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
                src={cars.carImg.toString()}
              />
            </section>

            <Card.Body>
              <Card.Title
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {cars.carName}
              </Card.Title>
              <Card.Text
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Category:{cars.carCategory}
              </Card.Text>
              <Card.Text
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Car No.:{cars.carNo.toLocaleUpperCase()}
              </Card.Text>
              <Card.Text
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                City:{cars.city}
              </Card.Text>
            </Card.Body>
          </Card>
        </section>
      </Col>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Date of Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={cars.carImg}
              alt={cars.carName}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100px",
                height: "150px",
              }}
            />
          </section>

          <h4
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {cars.carName}
          </h4>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {cars.carCategory}
          </h4>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {cars.carNo.toLocaleUpperCase()}
          </h4>
          <section
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginLeft: "-30%",
            }}
          >
            <span className="datepicker-toggle">
              <span className="datepicker-toggle-button"></span>
              <input
                type="date"
                className="datepicker-input"
                ref={date}
                id={cars.key}
              />
            </span>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Container>
            <p
              style={{
                display: "flex",
                justifyContent: "left",
                fontSize: "0.6rem",
              }}
            >
              Select a date of booking. If any other booking exist on that
              perticular date select next date or proceed with any another car.
            </p>
          </Container>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={() => bookingHandler(cars.key)}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Cars;
