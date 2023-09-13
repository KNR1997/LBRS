import { createContext, useEffect, useReducer } from "react";
import InterestFieldsReducer from "./InterestFieldsReducer";

const STATE = {
  fields: [],
  interestFields: []
};

export const InterestFieldsContext = createContext(STATE);

export const InterestFieldsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(InterestFieldsReducer, STATE);

  return (
    <InterestFieldsContext.Provider value={{ state: state, dispatch }}>
      {children}
    </InterestFieldsContext.Provider>
  );
};
