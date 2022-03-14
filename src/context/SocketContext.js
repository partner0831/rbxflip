import { createContext, useContext } from "react";

export const SocketContext = createContext({
  socket: [],
});
export const useSocketContext = () => useContext(SocketContext);
