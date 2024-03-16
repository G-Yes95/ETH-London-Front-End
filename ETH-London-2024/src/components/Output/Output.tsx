import React, { useState } from "react";
import "./Output.css";
import { Button, Box, TextField, Typography } from "@mui/material";

interface Props {
  pdfUrl: string;
}

const Output: React.FC<Props> = ({ pdfUrl }) => {
  return (
    <div className="output">
      <p>Output</p>
      {pdfUrl && (
        <Box mt={2} height={"12vh"}>
          <embed
            src={pdfUrl}
            type="application/pdf"
            width="100%"
            height="600px"
          />
        </Box>
      )}
    </div>
  );
};

export default Output;
