import { Container } from "react-bootstrap";
import HostForm from "./HostForm";
import HostDetails from "./HostDetails";
import { useSelector } from "react-redux";

function Host() {
  const isHost = useSelector((state) => state.host.isHosted);

  return (
    <>
      <Container
        style={{
          marginTop: "2%",
        }}
      >
        {!isHost && <HostForm />}
        {isHost && <HostDetails />}
      </Container>
    </>
  );
}
export default Host;
