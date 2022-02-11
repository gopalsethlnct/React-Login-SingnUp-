import { Container, Col, Row } from "reactstrap";
import Login from "./Login";

import { Register } from "./Register";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export function HomePage(props) {
  return (
    <div className="Login" style={{ background: "white", width:"70%",marginLeft:"250px",marginTop:"50px"}}>
      <BrowserRouter>
        <Container>
          <div color="white">
            <Row>
              <Col md={6}>
                <div>
                  <Link
                    style={{ marginTop: "15px", background: "lightgreen" }}
                    className="list-group-item  list-group-item-action"
                    tag="a"
                    to="/"
                  >
                    Login
                  </Link>
                </div>
              </Col>
              <Col md={6}>
                <Link
                  style={{ marginTop: "15px", background: "grey" }}
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
              path="/"
              element={<Login setLogin={props.setLogin} />}
              exact
            />
            <Route path="/register" element={<Register />} exact />

          </Routes>
         
        </Container>
      </BrowserRouter>
    </div>
  );
}
