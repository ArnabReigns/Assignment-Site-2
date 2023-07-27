import * as React from "react";
import { Box, Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

export default function IndeterminateCheckbox() {
  const [customerService, setCustomerService] = React.useState([false, false]);
  const [design, setDesign] = React.useState([false, false, false]);

  const handleCustomerServiceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomerService([event.target.checked, event.target.checked]);
  };

  const handleChangeSupport = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerService([event.target.checked, customerService[1]]);
  };

  const handleChangeCustomerSuccess = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomerService([customerService[0], event.target.checked]);
  };

  const handleChangeDesign = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDesign([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChangeGraphicDesign = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDesign([event.target.checked, design[1], design[2]]);
  };

  const handleChangeProductdesign = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDesign([design[0], event.target.checked, design[2]]);
  };

  const handleChangeWebDesign = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDesign([design[0], design[1], event.target.checked]);
  };

  const children1 = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 5 }}>
      <FormControlLabel
        label="support"
        control={
          <Checkbox
            checked={customerService[0]}
            onChange={handleChangeSupport}
          />
        }
      />
      <FormControlLabel
        label="customer_success"
        control={
          <Checkbox
            checked={customerService[1]}
            onChange={handleChangeCustomerSuccess}
          />
        }
      />
    </Box>
  );
  const children2 = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 5 }}>
      <FormControlLabel
        label="graphic_design"
        control={
          <Checkbox checked={design[0]} onChange={handleChangeGraphicDesign} />
        }
      />
      <FormControlLabel
        label="product_design"
        control={
          <Checkbox checked={design[1]} onChange={handleChangeProductdesign} />
        }
      />
      <FormControlLabel
        label="web_design"
        control={
          <Checkbox checked={design[2]} onChange={handleChangeWebDesign} />
        }
      />
    </Box>
  );

  const parentIndeterminate = design.some((val) => val);
  const parentChecked = design.every((val) => val);

  const [showCustomerService, setShowCustomerservice] = useState(true);
  const [showDesign, setShowDesign] = useState(true);

  return (
    <>
      <div>
        <button onClick={() => setShowCustomerservice(prev=>!prev)}> {showCustomerService ? '-' : '+'} </button>
        <Box width={12} display={"inline-block"} />
        <FormControlLabel
          label="customer_service"
          control={
            <Checkbox
              checked={customerService[0] && customerService[1]}
              indeterminate={customerService[0] !== customerService[1]}
              onChange={handleCustomerServiceChange}
            />
          }
        />
        {showCustomerService && children1}
      </div>
      <div>
      <button onClick={() => setShowDesign(prev => !prev)}> {showDesign ? '-' : '+'} </button>
        <Box width={12} display={"inline-block"} />
        <FormControlLabel
          label="design"
          control={
            <Checkbox
              checked={design[0] && design[1] && design[2]}
              indeterminate={parentIndeterminate && !parentChecked}
              onChange={handleChangeDesign}
            />
          }
        />
        {showDesign && children2}
      </div>
    </>
  );
}
