import React from "react";
import { Button, Container } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import  {useHistory} from "react-router-dom";
import "../Styles/Login.css";

const Login = () => {
  const history = useHistory();
  
  const users = [
    {
      user: "Fpagoaga",
      password: "12345",
    },
    {
      user: "romanr2r0",
      password: "12345",
    },
    {
      user: "miguel",
      password: "12345",
    }
  ];
  const validSubmit = (event, values) => {;
    for (let i = 0; i < users.length; i++) {
      if((users[i].user.toUpperCase() === values.user.toUpperCase())&&(users[i].password === values.password)){
        console.log("logro entrar");
        history.push("/Albums")
        break;
      }
    }

  };
  return (
    <AvForm onValidSubmit={validSubmit}>
      <Container style={{ backgroundColor: "white" }}>
        <h2>Sign in</h2>
        <AvField name="user" label="Username" placeholder="Username" required />
        <AvField
          name="password"
          label="Password"
          placeholder="********"
          required
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            type="submit"
            color="primary"
            style={{ marginBottom: "20px" }}
          >
            Sign In
          </Button>
        </div>
      </Container>
    </AvForm>
  );
};

export default Login;
