import { Button, CardBody, CardText } from "reactstrap";
export function UserDetails(props) {
  return (
    <div>
      <CardBody>
        {/* <CardTitle>{props.name}</CardTitle>
            <CardText>{props.email}</CardText> */}

        <CardText>Phone NUmber: {props.phone}</CardText>
      </CardBody>
      <CardBody
        style={{
          marginLeft: "400px",
          display: "flex",
          justifyContent: "space-evenly",
          width: "700px",
        }}
      >
        <CardText>Address: {props.address.street}</CardText>
        <CardText>{props.address.suite}</CardText>
        <CardText>{props.address.city}</CardText>
        <CardText>{props.address.zipCode}</CardText>
      </CardBody>
      <CardBody>
        <CardText>Website: {props.website}</CardText>
            
        </CardBody>
        <CardBody>
        <Button
          onClick={() => {
            props.togle();
          }}
        >
          Show less...
        </Button>
      </CardBody>
    </div>
  );
}
