import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import BookingDisplay from "./BookingDisplay";
import Bouncing from "../BouncingCar/Bouncing";

function Booking() {
  const [bookings, setBookings] = useState([]);
  const [bounce, setBounce] = useState(true);
  async function fetchData() {
    const response = await fetch(
      `https://trippy-cars-default-rtdb.firebaseio.com/userBooking/${String(
        localStorage.getItem("user")
      )}.json`
    );
    const data = await response.json();
    var tempData = [];
    for (const key in data) {
      tempData = [...tempData, ...data[key]];
    }
    setBookings(tempData);
    setBounce(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <Row>
          {bookings.length === 0 ? (
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "15%",
              }}
            >
              {bounce ? <Bouncing /> : <p>No Bookings To Display</p>}
            </h1>
          ) : (
            bookings.map((booking) => {
              return (
                <BookingDisplay
                  bookings={booking}
                  key={Math.random().toString()}
                />
              );
            })
          )}
        </Row>
      </Container>
    </>
  );
}
export default Booking;
