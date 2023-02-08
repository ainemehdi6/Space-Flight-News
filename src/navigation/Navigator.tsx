import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { ArticlesScreen } from '../screens/ArticlesFeedScreen';
import { ArticleDetailsScreen } from '../screens/ArticleDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ title: 'Login' }}
                />
                <Stack.Screen
                    name="Articles"
                    component={ArticlesScreen}
                    options={{ title: 'Articles' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigator;