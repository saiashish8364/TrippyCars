import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import { Suspense } from "react";
import CarsDisplay from "./Components/CarsDisplay/CarsDisplay";
import { useDispatch, useSelector } from "react-redux";
import Welcome from "./WelcomePage/Welcome";
import Navigation from "./Components/Navigation/Navigation";
import Host from "./HostPage/Host";
import { useEffect } from "react";
import { hostActions } from "./Components/AppStore/Host";
import Booking from "./Components/UserBookings/Bookings";
import Footer from "./Components/Footer/Footer";

function App() {
  const islogin = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fun() {
      if (islogin) {
        const isHostRes = await fetch(
          `https://trippy-cars-default-rtdb.firebaseio.com/hostStatus/${localStorage.getItem(
            "user"
          )}.json`
        );
        const isHostData = await isHostRes.json();
        let targetValue;
        for (const key in isHostData) {
          targetValue = isHostData[key].isHost;
          localStorage.setItem("_id", key);
          break;
        }
        dispatch(hostActions.hosted(targetValue));
      }
    }
    fun();
  }, [islogin, dispatch]);
  return (
    <>
      <section
        style={{
          minHeight: "92.7vh",
        }}
      >
        <Navigation />
        <Suspense>
          <Switch>
            <Route path="/" exact>
              {islogin && <Welcome />}
              {!islogin && <Login />}
            </Route>
            <Route path="/Login" exact>
              <Login />
            </Route>
            <Route path="/Signup" exact>
              <Signup />
            </Route>
            <Route path="/Host" exact>
              {islogin && <Host />}
              {!islogin && <Login />}
            </Route>
            <Route path="/User" exact>
              {islogin && <CarsDisplay />}
              {!islogin && <Login />}
            </Route>
            <Route path="/Bookings" exact>
              {islogin && <Booking />}
              {!islogin && <Login />}
            </Route>
          </Switch>
        </Suspense>
      </section>
      {islogin && <Footer />}
    </>
  );
}
export default App;
