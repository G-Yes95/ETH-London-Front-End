import React, { useState } from 'react';
import { Button, Box, TextField, Typography } from '@mui/material';

interface TextFieldData {
  value: string;
  status: string;
}

const DynamicTextFieldComponent: React.FC = () => {
  const [textFields, setTextFields] = useState<TextFieldData[]>([{ value: '', status: 'Status : Unsigned' }]);

  const addTextField = () => {
    setTextFields([...textFields, { value: '', status: `Status : Unsigned` }]);
  };

  const handleTextFieldChange = (index: number, value: string) => {
    const updatedTextFields = [...textFields];
    updatedTextFields[index].value = value;
    setTextFields(updatedTextFields);
  };

  return (
    <div>
      <Button variant="contained" onClick={addTextField}>Add Signer</Button>
      <Box mt={2}>
        {textFields.map((textField, index) => (
          <Box key={index} display="flex" alignItems="center" mt={1}>
            <TextField
              label={`Text Field ${index + 1}`}
              value={textField.value}
              onChange={(e) => handleTextFieldChange(index, e.target.value)}
              fullWidth
              InputProps={{ style: { backgroundColor: 'white' } }}
              variant="outlined"
              margin="normal"
            />
            <Typography variant="body2" ml={2}>{textField.status}</Typography>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default DynamicTextFieldComponent;