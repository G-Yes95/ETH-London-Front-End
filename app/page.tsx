"use client";
import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react-core";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { FC } from "react";

const Main = () => {
  const { primaryWallet } = useDynamicContext();

  const signMessage = async (primaryWallet: any) => {
    if (!primaryWallet) {
      console.log("No wallets are connected");
    } else {
      console.log(primaryWallet.address);
    }
    // console.log("primaryWallet.connector", primaryWallet.connector);
    console.log("primaryWallet          ", primaryWallet);
    const signer = await primaryWallet.connector.ethers.getSigner();

    return signer ? await signer.signMessage("example") : null;
  };

  const { config } = usePrepareContractWrite({
    abi: [
      {
        inputs: [],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ] as const,
    address: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    functionName: "mint",
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div>
      <DynamicWidget />
      <button onClick={() => signMessage(primaryWallet)}>Sign Message</button>
      <div>
        {/* <p>Mint NFT</p>
        <button disabled={!write || isLoading} onClick={() => write?.()}>
          {isLoading ? "Minting..." : "Mint"}
        </button>
        {isSuccess && (
          <div>
            Successfully minted your NFT!
            <div>
              <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Main;
