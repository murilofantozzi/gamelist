import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login'
import Jogos from '../pages/jogos'

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
            />
            
            <Stack.Screen
                name="Jogos"
                component={Jogos}
            />
        </Stack.Navigator>
    );
}