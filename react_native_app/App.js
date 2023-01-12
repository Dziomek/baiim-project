import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  
    console.log('App rendered')

    return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Login" component={LoginView} options={{headerShown: false}}/>
              <Stack.Screen name="Register" component={RegisterView} options={{headerShown: false}}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
}