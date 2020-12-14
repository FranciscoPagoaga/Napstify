import LoginForm from "../Components/LoginForm.jsx";
import { Col, Row } from "reactstrap";
import Header from "../Components/Header.jsx";
import Background from "../Icons/Background-Login.jpg";

const Login = () => {
  return (
    <div>
      <div id="bg">
        <img src={Background} />
      </div>
      <Header />
      <Row noGutters style={{ paddingTop: "10em" }}>
        <Col md={{ size: 4, offset: 4 }}>
          <LoginForm />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
