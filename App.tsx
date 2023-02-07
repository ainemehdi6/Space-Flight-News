// App.tsx

import React from 'react';
import { LoginScreen } from './src/screens/LoginScreen';
import { TermsScreen } from './src/screens/TermsScreen';
import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
const App = () => {
  //return <LoginScreen />;
  //return <TermsScreen />;
  return <QueryClientProvider client={queryClient}><StarshipFeedScreen /></QueryClientProvider>
};

export default App;