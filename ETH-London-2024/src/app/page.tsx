"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { MintNft } from "./mint-nft";
import Title from "../components/Title/Title";
import TextField from "../components/TextField/TextField";
import styles from "./Page.module.css";

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.contentContainer}>
          <Title />
          <TextField />

          <div className={styles.contentLeft}>
            <div>
              <div>{status}</div>
              <div>{error?.message}</div>
              <div>
                <MintNft />
              </div>
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
        </div>
      </div>
    </>
  );
}

export default App;
