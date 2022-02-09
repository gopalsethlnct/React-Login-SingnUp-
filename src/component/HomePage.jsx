import { Container, Col, Row, Button } from "reactstrap";
import Login from "./Login";

import { Register } from "./Register";
import { useState } from "react/cjs/react.development";

export function HomePage(props) {
  const [state, setState] = useState(false);

  return (
    <div className="Login" style={{ background: "white", margin: "65px" }}>
      <Container>
        <div style={{ margin: "0px" }} color="white">
          <Row>
            <Col md={6}>
              <div>
                <Button
                  style={{ margin: "5px", background: "lightgreen" }}
                  className="list-group-item  list-group-item-action"
                  onClick={() => setState(true)}
                >
                  Login
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <Button
                style={{ margin: "5px", background: "grey" }}
                className="list-group-item  list-group-item-action"
                onClick={() => setState(false)}
              >
                SingUp
              </Button>
            </Col>
          </Row>
        </div>

        {state ? <Login setLogin={props.setLogin} /> : <Register />}
      </Container>
    </div>
  );
}
