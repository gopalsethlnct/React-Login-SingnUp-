import { useState } from "react/cjs/react.development";
import { Button, Card, CardBody, CardText, CardTitle, Container } from "reactstrap";
import { UserDetails } from "./user Detail";
export function User(props) {
  const [curr, setCurr] = useState(true);
function togle(){
  if(curr===false)
  setCurr(true);
  else
  setCurr(false);
}
  return (
    <div style={{margin:"4px"}} >
        <Container>
          <Card>
            <CardBody>
              <CardTitle>Name: {props.name}</CardTitle>
              <CardText>Email: {props.email}</CardText>
            </CardBody>
      {curr ? (
        <Button onClick={() => {
          togle();
        }}>Show More...</Button>
        
        ) : (
          <UserDetails
          name={props.name}
          email={props.email}
          address={props.address}
          phone={props.phone}
          company={props.company}
          website={props.website}
          togle={togle}
          />
          )}
          </Card>
          </Container>
    </div>
  );
}
