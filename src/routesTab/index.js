import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Jogos from '../pages/jogos'

const Tab = createBottomTabNavigator();

export default function RoutesTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Jogos" component={Jogos} />
        </Tab.Navigator>

    );
}