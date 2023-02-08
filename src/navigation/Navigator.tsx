import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { ArticlesScreen } from '../screens/ArticlesFeedScreen';
import { ArticleDetailsScreen } from '../screens/ArticleDetailsScreen';
const Stack = createStackNavigator();

function Navigator() {
    return (
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
            <Stack.Screen
                name="Article"
                component={ArticleDetailsScreen}
                options={{ title: 'Article' }}
            />
        </Stack.Navigator>
    );
}
export default Navigator;