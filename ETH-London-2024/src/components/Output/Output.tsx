import React, { useState } from "react";
import "./Output.css";
import { Button, Box, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import DynamicTextFieldComponent from "../DynamicTextFieldComponent/DynamicTextFieldComponent";
interface Props {
  pdfUrl: string;
}

const Output: React.FC<Props> = ({ pdfUrl }) => {
  const [textFields, setTextFields] = useState<TextFieldData[]>([
    { value: "", status: "Status : Unsigned" },
  ]);

  const handleTextFieldChange = (index: number, value: string) => {
    const updatedTextFields = [...textFields];
    updatedTextFields[index].value = value;
    setTextFields(updatedTextFields);
  };

  return (
    <div className="output">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div>
            <DynamicTextFieldComponent
              textFields={textFields}
              setTextFields={setTextFields}
              handleTextFieldChange={handleTextFieldChange}
            />
          </div>{" "}
        </Grid>
        <Grid item xs={12} sm={6}>
          {pdfUrl && (
            <Box mt={2} height={"12vh"}>
              <embed
                src={pdfUrl}
                type="application/pdf"
                width="100%"
                height="600px"
              />
            </Box>
          )}{" "}
        </Grid>
      </Grid>
    </div>
  );
};

export default Output;
