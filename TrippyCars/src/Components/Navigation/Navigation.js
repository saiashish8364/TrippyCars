import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../AppStore/Auth";
function Navigation() {
  const history = useHistory();
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.auth.isAuthenticated);
  const isHost = useSelector((state) => state.host.isHosted);
  function logoutHandler() {
    localStorage.removeItem("_id");
    localStorage.removeItem("user");
    localStorage.removeItem("userLogin");
    localStorage.removeItem("isHost");
    localStorage.removeItem("token");
    dispatch(authActions.logout());
    history.push("/Login");
  }
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="black"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand
            href="/"
            style={{
              fontSize: "2.5rem",
              marginRight: "6rem",
              fontWeight: "normal",
            }}
          >
            Trippy Cars
          </Navbar.Brand>
          {islogin && (
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "1.25rem",
                      marginTop: "15px",
                    }}
                  >
                    Home
                  </Link>
                </Nav>
                <Nav className="me-auto">
                  <Link
                    to="/User"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "1.25rem",
                      marginTop: "15px",
                    }}
                  >
                    Explore
                  </Link>
                </Nav>
                <Nav className="me-auto">
                  <Link
                    to="/Bookings"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "1.25rem",
                      marginTop: "15px",
                    }}
                  >
                    Bookings
                  </Link>
                </Nav>
                {!isHost && (
                  <Nav className="me-auto">
                    <Link
                      to="/Host"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "1.25rem",
                        marginTop: "15px",
                      }}
                    >
                      Become a Host
                    </Link>
                  </Nav>
                )}
                {isHost && (
                  <Nav className="me-auto">
                    <Link
                      to="/Host"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "1.25rem",
                        marginTop: "15px",
                      }}
                    >
                      Your Car
                    </Link>
                  </Nav>
                )}

                <Nav>
                  <Button
                    variant="outline-light"
                    style={{ marginTop: "15px" }}
                    onClick={logoutHandler}
                  >
                    Logout
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
}
export default Navigation;
