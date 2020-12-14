import React from "react";
import { Button, Container } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import "../Styles/Login.css";

const Login = () => {
  return (
    <AvForm>
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
