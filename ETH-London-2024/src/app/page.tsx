'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { MintNft } from './mint-nft'
import Title from "../components/Title/Title";
import TextField from "../components/TextField/TextField";
import styles from "./Page.module.css";
import DynamicTextFieldComponent from "../components/DynamicTextFieldComponent/DynamicTextFieldComponent";

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <>

      <div className={styles.contentContainer}>

        <div>
          <Title />
          <TextField />
          <DynamicTextFieldComponent />
          <h2>Account</h2>

          <div>
            status: {account.status}
            <br />
            addresses: {JSON.stringify(account.addresses)}
            <br />
            chainId: {account.chainId}
          </div>

          {account.status === 'connected' && (
            <button type="button" onClick={() => disconnect()}>
              Disconnect
            </button>
          )}
        </div>

        <div>
          <h2>Connect</h2>
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              type="button"
            >
              {connector.name}
            </button>
          ))}
          <div>{status}</div>
          <div>{error?.message}</div>
          <div> <MintNft /> </div>
        </div>
      </div>

    </>
  )
}

export default App
