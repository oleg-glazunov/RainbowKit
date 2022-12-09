// import { getDefaultWallets, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { connectorsForWallets, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { metaMaskWallet, trustWallet, rainbowWallet, walletConnectWallet, ledgerWallet } from '@rainbow-me/rainbowkit/wallets';
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

const { chains, provider } = configureChains(
  // [chain.mainnet, chain.polygonMumbai, chain.goerli],
  [chain.mainnet],
  [publicProvider()]
);

// const { connectors } = getDefaultWallets({
//   appName: "Test web3 app",
//   chains,
// });

const connectors = connectorsForWallets([
  {
    groupName: 'Popular',
    wallets: [
      metaMaskWallet ({ chains }),
      trustWallet ({ chains }),
      rainbowWallet({ chains }),
      walletConnectWallet({ chains }),
      ledgerWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  provider,
  connectors,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} modalSize="compact" theme={darkTheme()}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
