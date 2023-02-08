// App.tsx
import React from 'react';
import { LoginScreen } from './src/screens/LoginScreen';
import { ArticlesScreen } from './src/screens/ArticlesFeedScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navigator from './src/navigation/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';



const queryClient = new QueryClient()
const App = () => {
  //return <LoginScreen />;
  //return <TermsScreen />;
  //return <QueryClientProvider client={queryClient}><ArticlesScreen /></QueryClientProvider>
  <NavigationContainer>
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  </NavigationContainer>

};

export default App;