import { Card, CardBody, CardText, CardTitle} from "reactstrap";
export function User(props) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>{props.email}</CardText>
          <CardText>{props.phone}</CardText>
        </CardBody>
        <CardBody
          style={{
            marginLeft:"400px",
            display: "flex",
            justifyContent: "space-evenly",
            width: "700px",
          }}
        >
          <CardText>{props.address.street}</CardText>
          <CardText>{props.address.suite}</CardText>
          <CardText>{props.address.city}</CardText>
          <CardText>{props.address.zipcode}</CardText>
        </CardBody>
        <CardBody>
          <CardText>{props.website}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
