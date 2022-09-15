import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../pages/login'
import Cadastro from '../pages/cadastro';
import Jogos from '../pages/jogos'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function Routes() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>

    );
}