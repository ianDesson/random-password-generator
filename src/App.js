import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { generatePassword } from "./passwordGenerator";

import Slider, { createSliderWithTooltip } from "rc-slider";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "rc-slider/assets/index.css";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(4);
  const [uppercaseEnabled, setUppercaseEnabled] = useState(false);
  const [numbersEnabled, setNumbersEnabled] = useState(false);
  const [symbolsEnabled, setSymbolsEnabled] = useState(false);

  const SliderWithTooltip = createSliderWithTooltip(Slider);

  const checkboxes = [
    {
      label: "Allows Uppercase Letters",
      checked: uppercaseEnabled,
      onClick: () => setUppercaseEnabled(!uppercaseEnabled),
    },
    {
      label: "Allows Numbers",
      checked: numbersEnabled,
      onClick: () => setNumbersEnabled(!numbersEnabled),
    },
    {
      label: "Allows Symbols",
      checked: symbolsEnabled,
      onClick: () => setSymbolsEnabled(!symbolsEnabled),
    },
  ];

  useEffect(() => {
    if (!password || password.length < 4) {
      setPassword(
        generatePassword(
          length,
          uppercaseEnabled,
          numbersEnabled,
          symbolsEnabled
        )
      );
    }
  }, [password, length, uppercaseEnabled, numbersEnabled, symbolsEnabled]);

  return (
    <div className="container">
      <Card>
        <Card.Body>
          <div class="pwd-container">
            Password:
            <textarea
              style={{ resize: "none", marginLeft: '0.5em' }}
              value={password}
              rows={1}
              readOnly
            />
          </div>
          <SliderWithTooltip
            style={{ width: "25%" }}
            min={4}
            max={20}
            defaultValue={length}
            onAfterChange={(value) => setLength(value)}
          />
          <span>Length: {length}</span>
          <div className="mb-3">
            {checkboxes.map((checkbox, index) => (
              <Form.Check
                key={index}
                id={`default-checkbox-${index}`}
                onChange={checkbox.onClick}
                label={checkbox.label}
                htmlFor={`default-checkbox-${index}`}
              />
            ))}
          </div>
          <Button
            variant="primary"
            onClick={() =>
              setPassword(
                generatePassword(
                  length,
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
};

export default App;
