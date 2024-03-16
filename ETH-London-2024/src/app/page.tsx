"use client";
import React, { useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Button, Box, TextField, Typography, Grid } from "@mui/material";
import Title from "../components/Title/Title";
import Output from "../components/Output/Output";
import styles from "./Page.module.css";
import DynamicTextFieldComponent from "../components/DynamicTextFieldComponent/DynamicTextFieldComponent";

interface TextFieldData {
  value: string;
  status: string;
}

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  const [textFields, setTextFields] = useState<TextFieldData[]>([
    { value: "", status: "Status : Unsigned" },
  ]);

  const [pdfUrl, setPdfUrl] = useState<string>(
    "https://docamatic.s3.eu-west-1.amazonaws.com/prod/4b969005-6bc9-4da2-8525-18e4e1e017ec/4fea55cb-6abd-4b0d-906d-97835d7eda2f.pdf"
  );

  const handleTextFieldChange = (index: number, value: string) => {
    const updatedTextFields = [...textFields];
    updatedTextFields[index].value = value;
    setTextFields(updatedTextFields);
  };

  const handleRestAPICall = async () => {
    try {
      const textFieldValues = textFields.map((field) => field.value);
      const url = `https://example.com/api/data?textField1=${textFieldValues[0]}&textField2=${textFieldValues[1]}`;
      console.log(url, "url");
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log(data); // Handle response data here
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.contentContainer}>
          <Title />

          <div className={styles.contentLeft}>
            <div>
              <div>{error?.message}</div>
            </div>
            <h2>Account</h2>
            <div>
              status: {account.status}
              <br />
              addresses: {JSON.stringify(account.addresses)}
              <br />
              chainId: {account.chainId}
            </div>
            {account.status === "connected" && (
              <button
                className={styles.actionButton}
                type="button"
                onClick={() => disconnect()}
                style={{ width: "8rem" }}
              >
                Disconnect
              </button>
            )}
          </div>

          <div>
            <div className={styles.connectButtons}>
              {connectors.map((connector) => (
                <button
                  className={styles.actionButton}
                  key={connector.uid}
                  onClick={() => connect({ connector })}
                  type="button"
                >
                  {connector.name}
                </button>
              ))}
            </div>
          </div>

          {/* Button to make REST API call */}
          <div>
            <button
              className={styles.actionButton}
              onClick={handleRestAPICall}
              type="button"
            >
              Make REST API Call
            </button>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <div>
                  <DynamicTextFieldComponent
                    textFields={textFields}
                    setTextFields={setTextFields}
                    handleTextFieldChange={handleTextFieldChange}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Output pdfUrl={pdfUrl} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
