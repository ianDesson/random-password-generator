import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { generatePassword } from "./passwordGenerator";


import Slider, { createSliderWithTooltip } from "rc-slider";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import 'rc-slider/assets/index.css'

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
      onClick: () => setUppercaseEnabled(!uppercaseEnabled)
    },
    {
      label: "Allows Numbers",
      checked: numbersEnabled,
      onClick: () => setNumbersEnabled(!numbersEnabled)
    },
    {
      label: "Allows Symbols",
      checked: symbolsEnabled,
      onClick: () => setSymbolsEnabled(!symbolsEnabled)
    }
  ];
  return (
    <div class="container">
      <Card>
        <Card.Body>
          <Card.Text>
            {password
              ? `Password: ${password}`
              : "Click Generate Password to generate a password!"}
          </Card.Text>
          <SliderWithTooltip
          style={{width: '25%'}}
            min={4}
            max={20}
            defaultValue={length}
            onAfterChange={value => setLength(value)}
          />
          {/* <input
            type="range"
            min="4"
            max="20"
            step="1"
            value={length}
            onChange={e => setLength(e.target.value)}
          /> */}
          <span>Length: {length}</span>
          <div className="mb-3">
            {checkboxes.map(checkbox => (
              <Form.Check
                id="default-checkbox"
                checked={checkbox.checked}
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
