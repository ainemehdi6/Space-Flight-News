// App.tsx
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navigator from './src/navigation/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';



const queryClient = new QueryClient()
const App = () => {
  //return <LoginScreen />;
  //return <TermsScreen />;
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </NavigationContainer>
  </QueryClientProvider>

};

export default App;