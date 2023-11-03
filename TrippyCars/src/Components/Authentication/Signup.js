import { useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Form from "react-bootstrap/Form";
function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const repassRef = useRef();
  const history = useHistory();
  async function formSubmit(e) {
    e.preventDefault();
    if (String(passwordRef.current.value) === String(repassRef.current.value)) {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBFg2vKEF45NalWM3QdCZ3TjEThvbqlrzo",
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
          const usermail = emailRef.current.value;
          const user = usermail.replace(/[@.]/g, "");
          await fetch(
            `https://trippy-cars-default-rtdb.firebaseio.com/hostStatus/${user}.json`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ isHost: false }),
            }
          );
          history.push("/LogIn");
        }
      } catch (error) {
        alert(error);
        console.log(error);
      }
    } else {
      alert("Password does not match!!");
    }
    emailRef.current.value = "";
    passwordRef.current.value = "";
    repassRef.current.value = "";
  }
  function loginHandler() {
    history.push("/Login");
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
            <Form onSubmit={formSubmit}>
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
              <Form.Group className="mb-3" controlId="reformGroupPassword">
                <Form.Label>Re-Enter Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={repassRef}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="secondary" type="submit">
                  SignUp
                </Button>
              </div>
            </Form>
            <Button
              variant="link"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                color: "black",
              }}
              onClick={loginHandler}
            >
              Have an account? Click to LogIn
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Signup;
