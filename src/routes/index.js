import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login'
import Cadastro from '../pages/cadastro'
import Jogos from '../pages/jogos'
import Recuperar from '../pages/recuperarSenha'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Rotas() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
            <Stack.Screen name="RecuperarSenha" component={Recuperar} options={{ headerShown: false }} />
            <Stack.Screen name="Jogos" component={RotasTab} options={{ headerShown: false }} />
        </Stack.Navigator>

    );
}

function RotasTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Jogos" component={Jogos} options={{ headerShown: false }} />
        </Tab.Navigator>

    );
}


