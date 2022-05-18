import { createContext } from "react";

export const ReduxContext = createContext("redux");

export const Provider = ({ store, children }) => (
  <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
);
