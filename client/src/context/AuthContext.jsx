import { createContext, useContext, useReducer } from "react";

const INITIAL_STATE = {
  user: null,
  isFetching: null,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthContext, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
