import { Container } from "react-bootstrap";
function Footer() {
  return (
    <>
      <section
        style={{
          bottom: "0",
          width: "100%",
          backgroundColor: "#2C3539",
          color: "#fff",
          padding: "10px",
          marginTop: "25px",
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            textAlign: "center",
          }}
        >
          Trippy assistance available locations:
        </p>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.7rem",
            marginTop: "20px",
            marginBottom: "25px",
          }}
        >
          <p>Delhi</p>
          <p>Mumbai</p>
          <p>Hyderabad</p>
          <p>Chennai</p>
          <p>Banglore</p>
        </Container>

        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "0.8rem",
          }}
        >
          <p>
            Impressed with my work! Contact me?
            <a
              href="https://portfolio-polu-sai-ashish.web.app/"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "gray",
              }}
            >
              Click Here!!!
            </a>{" "}
          </p>
        </Container>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "0.7rem",
          }}
        >
          <p>
            Designed and Developed by{" "}
            <span style={{ color: "gray" }}>Ashish</span> using{" "}
            <span style={{ color: "gray" }}>React JS</span> &{" "}
            <span style={{ color: "gray" }}>Bootstarp</span>
          </p>
        </Container>
      </section>
    </>
  );
}
export default Footer;
