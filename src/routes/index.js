import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from '../pages/login'
import Cadastro from '../pages/cadastro'
import Jogos from '../pages/jogos'
import Recuperar from '../pages/recuperarSenha'
import Termos from '../pages/termos'
import CadastroJogos from '../pages/cadJogos';
import Notificacao from '../pages/notifcacao';
import Conta from '../pages/conta';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Rotas() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="RecuperarSenha" component={Recuperar} options={{ headerShown: false }} />
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
            <Stack.Screen name="Termos" component={Termos} options={{ headerShown: false }} />
            <Stack.Screen name="Jogos" component={RotasTab} options={{ headerShown: false }} />
        </Stack.Navigator>

    );
}

function RotasTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#1F1F39',
                },
            }}>

            <Tab.Screen name="Jogos " component={Jogos} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="CadastroJogos" component={CadastroJogos} options={{ headerShown: false,
             tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="book" color={color} size={size} />
            ),
             }} />
            <Tab.Screen name="Notificacao" component={Notificacao} options={{ headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="message-processing" color={color} size={size} />
            ),
            }} />
            <Tab.Screen name="Conta" component={Conta} options={{ headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
            }} />
        </Tab.Navigator >

    );
}


