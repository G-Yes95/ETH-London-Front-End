import React, { useState } from 'react';
import { Button, Box, TextField, Typography } from '@mui/material';

interface Props {
  textFields: TextFieldData[];
  setTextFields: React.Dispatch<React.SetStateAction<TextFieldData[]>>;
  handleTextFieldChange: (index: number, value: string) => void;
  pkFields: TextFieldData[];
  setpkFields: React.Dispatch<React.SetStateAction<TextFieldData[]>>;
  handlepkFieldChange: (index: number, value: string) => void;
}

interface TextFieldData {
  value: string;
}

const DynamicTextFieldComponent: React.FC<Props> = ({ textFields, setTextFields, handleTextFieldChange, pkFields, setpkFields, handlepkFieldChange }) => {
  const addTextField = () => {
    setTextFields([...textFields, { value: '' }]);
  };

  return (
    <div>
      <Button variant="contained" onClick={addTextField}>Add Signer</Button>
      <Box mt={2}>
        {textFields.map((textField, index) => (
          <Box key={index} display="flex" alignItems="center" mt={1}>
            <TextField
              label={`Public Key ${index + 1}`}
              value={textField.value}
              onChange={(e) => handleTextFieldChange(index, e.target.value)}
              fullWidth
              InputProps={{ style: { backgroundColor: 'white' } }}
              variant="outlined"
              margin="normal"
            />
            <TextField
              label={`Signature ${index + 1}`}
              value={textField.value}
              onChange={(e) => handleTextFieldChange(index, e.target.value)}
              fullWidth
              InputProps={{ style: { backgroundColor: 'white' } }}
              variant="outlined"
              margin="normal"
            />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default DynamicTextFieldComponent;