import React from 'react';
import { AuthContextProvider } from './auth/AuthContext';
import { InterestFieldsContextProvider } from './interestFields/InterestFieldsContext';

function CombinedProvider({ children }) {
  return (
    <AuthContextProvider>
      <InterestFieldsContextProvider>
        {children}
      </InterestFieldsContextProvider>
    </AuthContextProvider>
  );
}

export default CombinedProvider;