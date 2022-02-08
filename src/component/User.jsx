import { Card, CardBody, CardText, CardTitle, Container } from "reactstrap";
export function User(props) {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{props.first_name}&nbsp;&nbsp;&nbsp;{props.first_name}</CardTitle>

                    <Container>
                        <img width="10%" src={props.avatar} alt="Card cap" />
                    </Container>
                </CardBody >
                <CardBody>
                    <CardText>{props.email}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};
