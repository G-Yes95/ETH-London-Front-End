"use client";
import React, { useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Button, Box, TextField, Typography, Grid, Chip } from "@mui/material";
import Title from "../components/Title/Title";
import Output from "../components/Output/Output";
import styles from "./page.module.css";
import DynamicTextFieldComponent from "../components/DynamicTextFieldComponent/DynamicTextFieldComponent";
import { useWeb3Modal } from "@web3modal/wagmi/react";

interface TextFieldData {
  value: string;
}

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  const [textFields, setTextFields] = useState<TextFieldData[]>([
    { value: "" },
  ]);
  const [pkFields, setpkFields] = useState<TextFieldData[]>([{ value: "" }]);

  const [pdfUrl, setPdfUrl] = useState<string>(
    "https://docamatic.s3.eu-west-1.amazonaws.com/prod/4b969005-6bc9-4da2-8525-18e4e1e017ec/4fea55cb-6abd-4b0d-906d-97835d7eda2f.pdf"
  );

  const handleTextFieldChange = (index: number, value: string) => {
    const updatedTextFields = [...textFields];
    updatedTextFields[index].value = value;
    setTextFields(updatedTextFields);
  };

  const handlepkFieldChange = (index: number, value: string) => {
    const updatedpkFields = [...pkFields];
    updatedpkFields[index].value = value;
    setpkFields(updatedpkFields);
  };

  const { open } = useWeb3Modal();

  const handleRestAPICall = async () => {
    try {
      const addresses = textFields.map(field => field.value);

      const requestOptions: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ addresses })
      };


      const response = await fetch('https://59fb-213-152-241-52.ngrok-free.app/propose-safe', requestOptions);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      console.log(data); // Handle response data here
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div>
        <div className={styles.pageContainer}>
          <div className={styles.contentLeft}>
            <div>
              <div>{error?.message}</div>
            </div>
            {/* <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button> */}
            <div>
              <Chip
                label={account.addresses}
                variant="outlined"
                onClick={() => open({ view: "Networks" })}
                onDelete={() => disconnect()}
                style={{
                  width: "20rem",
                  height: "3rem",
                  color: "white",
                  fontSize: "2rem",
                }}
              />
            </div>
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
            <Title />
            <Grid
              container
              spacing={4}
              direction="row"
              justifyContent="space-around"
              alignContent="center"
            >
              <Grid item xs={6} sm={6}>
                <div>
                  <DynamicTextFieldComponent
                    textFields={textFields}
                    setTextFields={setTextFields}
                    handleTextFieldChange={handleTextFieldChange}
                    pkFields={pkFields}
                    setpkFields={setpkFields}
                    handlepkFieldChange={handlepkFieldChange}
                  />
                </div>
                <button
                  className={styles.actionButton}
                  onClick={handleRestAPICall}
                  type="button"
                  style={{ padding: "1rem" }}
                >
                  Make REST API Call
                </button>
              </Grid>
              <Grid item xs={6} sm={6}>
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
