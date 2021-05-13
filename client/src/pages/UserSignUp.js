import React, { useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import API from "../utils/API";

function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const user = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
  }


  const handleSubmit = e => {
    e.preventDefault();
    console.log("email is " + email);
    console.log("password is " + password);
    console.log("first name" + firstName);
    console.log("last name" + lastName);
    API.SignUp(user)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="email"
                name="email"
                onChange={e => setEmail(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="name"
                placeholder="First Name"
                name="firstName"
                onChange={e => setFirstName(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="name"
                placeholder="Last Name"
                name="lastName"
                onChange={e => setLastName(e.target.value)}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Hello {firstName}!</h3>
          <p>I probably shouldn't tell you this, but your password is {password}!</p>
        </Container>
      </form>
    </div>
  );
}

export default Signup;