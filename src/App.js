import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// @import layout
import AppLayout from "./layout/AppLayout";
// @import wallet connection
import Web3 from "web3";
import { EthereumContext } from "./context/EthereumContext";
import { SocketContext } from "./context/SocketContext";

// @import constant
import { SERVER_URL } from "./contract/server_url";
import io from "socket.io-client";
// @import CSS
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

// @import pages
const RoomPage = React.lazy(() => import("./pages/Room"));

function App() {
  const [web3, setWeb3] = useState(null);
  const [provider, setProvider] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [currentAcc, setCurrentAcc] = useState("");
  const [socket, setSocket] = useState();
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
  useEffect(() => {
    if (currentAcc) {
      var socketInfo = io(`${SERVER_URL}?userId=${currentAcc}`, {
        transports: ["websocket"],
      });
      setSocket(socketInfo);
    }
  }, [currentAcc]);
  return (
    <EthereumContext.Provider
      value={{
        provider,
        accounts,
        web3,
        currentAcc,
      }}
    >
      <SocketContext.Provider
        value={{
          socket,
        }}
      >
        <Suspense fallback={<div />}>
          <Router>
            <Switch>
              {/* Dashboard */}
              <Route exact path="/">
                <AppLayout>
                  <RoomPage />
                </AppLayout>
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </SocketContext.Provider>
    </EthereumContext.Provider>
  );
}

export default App;
