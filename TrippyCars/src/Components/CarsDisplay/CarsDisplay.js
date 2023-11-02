import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import Cars from "./Cars";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { carActions } from "../AppStore/CarsStore";
import { useCallback } from "react";

function CarsDisplay() {
  const cars = useSelector((state) => state.cars.carsData);
  const dispatch = useDispatch();

  const fetchDetails = useCallback(async () => {
    const data = await fetch(
      `https://trippy-cars-default-rtdb.firebaseio.com/HostBase.json`
    );
    if (data.ok) {
      const dataJson = await data.json();
      var temp = [];
      for (const key in dataJson) {
        temp = [...temp, dataJson[key]];
      }
      var temp2 = [];
      for (var i = 0; i < temp.length; i++) {
        let val = temp[i];
        for (const key in val) {
          const add = val[key];
          temp2 = [
            ...temp2,
            {
              key: key,
              ...add,
            },
          ];
        }
      }
      dispatch(carActions.updateCars(temp2));
    }
  }, [dispatch]);

  useEffect(() => {
    fetchDetails();
    //this is comment
  }, [fetchDetails]);

  return (
    <>
      <Container>
        <Row>
          {cars.length === 0 ? (
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "25%",
              }}
            >
              No Cars to display
            </h1>
          ) : (
            cars.map((car) => {
              return <Cars cars={car} key={car.key} />;
            })
          )}
        </Row>
      </Container>
    </>
  );
}
export default CarsDisplay;
