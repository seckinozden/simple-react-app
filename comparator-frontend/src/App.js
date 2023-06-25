import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Row } from "react-bootstrap";
import "./App.css"; // Import the CSS file

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [responseText, setResponseText] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  const resetState = () => {
    setShowResponse(false);
    setResponseText("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetState();

    try {
      const response = await axios.post("http://localhost:8080/compare", {
        argument1: input1,
        argument2: input2,
      });

      const condition =
        response.data === true
          ? "The values are the same."
          : "These values are not the same.";

      setResponseText(condition); // Set the response text
      setShowResponse(true); // Make the text visible
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="centered-container">
      <Container>
        <h1> Compare inputs here:</h1>

        <Form onSubmit={handleSubmit}>
          <Row>
            <label htmlFor="textInput1">Input 1</label>
            <textarea
              type="text"
              id="textInput1"
              placeholder="Enter Input 1"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
          </Row>
          <Row>
            <Form.Group controlId="input2">
              <label htmlFor="textInput1">Input 2</label>
              <textarea
                type="text"
                id="textInput1"
                placeholder="Enter Input 2"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Row>
          <Row>
            {showResponse && ( // Render the response text conditionally
              <p className="response-text">{responseText}</p>
            )}
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default App;
