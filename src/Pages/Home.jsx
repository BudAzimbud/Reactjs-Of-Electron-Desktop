import React, { useState } from "react";
import "./Home.css";
import { Form, InputGroup, Button } from "react-bootstrap";
function Home() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="">
      <div className="row wrapper-home">
        <div className="col left">
          <div className="header mt-2" style={{ padding: "0 8%" }}>
            <span className="d-flex">
              Tweak &nbsp;
              <p className="text-primary" style={{}}>
                #Move
              </p>
            </span>
            <h2 className="text-primary">
              Get gym <span className="text-dark">Today</span>
            </h2>
            <h2>
              And get access <span className="text-primary">Here</span>
            </h2>
          </div>
          <div className="mt-5" style={{ padding: "0 8%" }}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group md="6" controlId="validationCustom03">
                <Form.Control
                  type="text"
                  placeholder="Input key access here"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Token.
                </Form.Control.Feedback>
              </Form.Group>
              <Button className="mt-3" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
        <div className="col  right">left</div>
      </div>
    </div>
  );
}

export default Home;
