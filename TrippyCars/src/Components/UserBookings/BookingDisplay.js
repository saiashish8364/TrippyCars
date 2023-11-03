import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaMapMarker } from "react-icons/fa";
function BookingDisplay({ bookings }) {
  return (
    <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
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
              style={{ width: "200px", height: "250px" }}
              variant="top"
              src={bookings.carImg.toString()}
            />
          </section>

          <Card.Body>
            <Card.Title
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {bookings.carName}
            </Card.Title>
            <Card.Text
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "0.8rem",
              }}
            >
              Date Of Booking:{bookings.dateOfBooking}
            </Card.Text>
            <Card.Text
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "0.8rem",
              }}
            >
              Category:{bookings.carCategory}
            </Card.Text>
            <Card.Text
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "0.8rem",
              }}
            >
              Car No.{bookings.carNo.toLocaleUpperCase()}
            </Card.Text>
            {/* <Card.Text
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            ></Card.Text> */}
            <Card.Text
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "0.8rem",
              }}
            >
              <FaMapMarker size={15} color="black" />
              {bookings.city},{bookings.pincode},{bookings.state}
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </Col>
  );
}
export default BookingDisplay;
