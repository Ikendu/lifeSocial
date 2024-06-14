import { createContext, useState } from "react";

// const INITIAL_STATE = {
//   user: null,
//   isFetching: null,
//   error: null,
// };

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(AuthContext, INITIAL_STATE);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// value={{
// user: state.user,
// isFetching: state.isFetching,
// error: state.error,
// dispatch,
// }}
