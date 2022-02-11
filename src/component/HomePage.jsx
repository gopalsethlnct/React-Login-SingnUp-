import { Container, Col, Row } from "reactstrap";
import Login from "./Login";

import { Register } from "./Register";
import { useState } from "react/cjs/react.development";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export function HomePage(props) {
  const [state, setState] = useState(false);

  return (
    <div className="Login" style={{ background: "white"}}>
      <BrowserRouter>
      <Container>
        <div  color="white">
          <Row>
            <Col md={6}>
              <div>
                <Link
                  style={{ margin: "5px", background: "lightgreen" }}
                  className="list-group-item  list-group-item-action"
                  tag="a"
                  to="/login"
                  >
                  Login
                </Link>
               
              </div>
            </Col>
            <Col md={6}>
              <Link
                style={{ margin: "5px", background: "grey" }}
                className="list-group-item  list-group-item-action"
                tag="a"
                to="/register"
                >
                SingUp
              </Link>
            </Col>
          </Row>
        </div>
        <Routes>
                <Route
                  path="/login"
                  element={<Login setLogin={props.setLogin} />}
                  exact
                  />
                <Route path="/register" element={<Register />} exact />
             
                {/* <Route path="/login" element={<Login/>} exact /> */}
              </Routes>
        {/* {state ? <Login setLogin={props.setLogin} /> : <Register />} */}
      </Container>

                  </BrowserRouter>
    </div>
  );
}
