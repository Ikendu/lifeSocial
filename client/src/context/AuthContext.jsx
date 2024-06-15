import { createContext, useContext, useReducer, useState } from "react";

const INITIAL_STATE = {
  user: null,
  isFetching: null,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthContext, INITIAL_STATE);
  // const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        // user: state.user,
        // isFetching: state.isFetching,
        // error: state.error,
        // dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
