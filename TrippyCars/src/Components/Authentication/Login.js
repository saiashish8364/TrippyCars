import { useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { authActions } from "../AppStore/Auth";
import { hostActions } from "../AppStore/Host";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  async function loginSubmitHandler(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBFg2vKEF45NalWM3QdCZ3TjEThvbqlrzo",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const res = await response.json();
        const userMail = emailRef.current.value;
        const user = userMail.replace(/[@.]/g, "");
        const isHostRes = await fetch(
          `https://trippy-cars-default-rtdb.firebaseio.com/hostStatus/${user}.json`
        );
        const isHostData = await isHostRes.json();
        let targetValue;
        for (const key in isHostData) {
          targetValue = isHostData[key].isHost;
          localStorage.setItem("_id", key);
          break;
        }

        localStorage.setItem("user", user);
        localStorage.setItem("userLogin", true);
        localStorage.setItem("isHost", targetValue);
        localStorage.setItem("token", res.idToken);
        dispatch(hostActions.hosted(targetValue));
        dispatch(authActions.login());
        history.push("/");
      } else {
        alert("Invalid Login details! check your details and try again");
      }
    } catch (error) {
      alert(error);
    }
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }
  function signUpHandler() {
    history.push("/Signup");
  }
  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Row
          style={{
            marginTop: "7.5%",
            width: "23rem",
          }}
        >
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <Form onSubmit={loginSubmitHandler}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={emailRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </Form.Group>
              <Button variant="secondary" type="submit">
                LogIn
              </Button>
            </Form>
            <Button
              variant="link"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                color: "black",
              }}
              onClick={signUpHandler}
            >
              Don't have an account? Click to SignUp
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Login;
