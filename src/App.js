import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// @import layout
import AppLayout from "./layout/AppLayout";
// @import wallet connection
import Web3 from "web3";
import { EthereumContext } from "./context/EthereumContext";
// @import CSS
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
// @import pages
const MintPage = React.lazy(() => import("./pages/Mint"));

function App() {
  const [provider, setProvider] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [currentAcc, setCurrentAcc] = useState("");
  useEffect(() => {
    if (window.ethereum) {
      handleEthereum();
    } else {
      window.addEventListener("ethereum#initialized", handleEthereum, {
        once: true,
      });
      setTimeout(handleEthereum, 3000);
    }
  }, []);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const setCurrentlyConnectedAccount = async () => {
      let accounts = await web3.eth.getAccounts();
      if (accounts && accounts.length > 0) {
        setCurrentAcc(accounts[0]);
      }
    };
    if (web3) {
      setCurrentlyConnectedAccount();
    }
  }, [web3]);

  const handleEthereum = () => {
    const { ethereum } = window;

    if (ethereum && ethereum.isMetaMask) {
      setProvider(ethereum);
      ethereum.on("accountsChanged", (accs) => {
        setAccounts(accs);
        setCurrentAcc(accs[0]);
      });

      setWeb3(new Web3(ethereum));
    } else {
      window.alert("Please install Metamask");
    }
  };

  return (
    <EthereumContext.Provider
      value={{
        provider,
        accounts,
        web3,
        currentAcc,
      }}
    >
      <Suspense fallback={<div />}>
        <Router>
          <Switch>
            {/* Dashboard */}
            <Route exact path="/">
              <AppLayout>
                <MintPage />
              </AppLayout>
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </EthereumContext.Provider>
  );
}

export default App;
