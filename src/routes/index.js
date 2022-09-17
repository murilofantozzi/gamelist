import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../pages/login'
import Cadastro from '../pages/cadastro'
import Jogos from '../pages/jogos'
import Recuperar from '../pages/recuperarSenha'

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
            <Stack.Screen name="RecuperarSenha" component={Recuperar} options={{ headerShown: false }} />
        </Stack.Navigator>

    );
}