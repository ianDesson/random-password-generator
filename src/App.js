import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { generatePassword } from "./passwordGenerator";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(4);
  const [uppercaseEnabled, setUppercaseEnabled] = useState(false);
  const [numbersEnabled, setNumbersEnabled] = useState(false);
  const [symbolsEnabled, setSymbolsEnabled] = useState(false);

  const checkboxes = [
    {
      label: "Allows Uppercase Letters",
      disabled: uppercaseEnabled,
      onClick: () => setUppercaseEnabled(!uppercaseEnabled)
    },
    {
      label: "Allows Numbers",
      disabled: numbersEnabled,
      onClick: () => setNumbersEnabled(!numbersEnabled)
    },
    {
      label: "Allows Symbols",
      disabled: symbolsEnabled,
      onClick: () => setSymbolsEnabled(!symbolsEnabled)
    }
  ];
  return (
    <div class="container">
      <Card>
        <Card.Body>
          <Card.Text>{password}</Card.Text>
          <div className="mb-3">
            {checkboxes.map(checkbox => (
              <Form.Check
                id="default-checkbox"
                checked={checkbox.disabled}
                label={checkbox.label}
                onClick={checkbox.onClick}
              />
            ))}
          </div>
          <Button
            variant="primary"
            onClick={() =>
              setPassword(
                generatePassword(
                  12,
                  uppercaseEnabled,
                  numbersEnabled,
                  symbolsEnabled
                )
              )
            }
          >
            Generate Password
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
