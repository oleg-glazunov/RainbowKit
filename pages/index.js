import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import Image from "next/image";
import { useAccount, useProvider } from "wagmi";
import { useIsMounted } from "./hooks/useIsMounted";
// import styles from "../styles/Home.module.css";
import "../styles/Home.module.css";

export default function Home() {
  const mounted = useIsMounted();
  const account = useAccount();

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <ConnectButton
				label="Connect Wallet"
				accountStatus={"full"}
				chainStatus={"none"}
				showBalance={false}
			/>
      <div>
        {/* {account.isConnected && `Account ${account.address} is now connected!`} */}
        {mounted ? account.address && <p>Account {account.address} is now connected!</p> : null}
      </div>
    </div>
  );
}
