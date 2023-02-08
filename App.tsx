// App.tsx
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navigator from './src/navigation/Navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';



const queryClient = new QueryClient()
export default function App() {
  <QueryClientProvider client={queryClient}>
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  </QueryClientProvider>

};