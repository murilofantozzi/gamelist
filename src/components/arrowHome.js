
import React from "react";
import { View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';

import { useNavigation } from "@react-navigation/native";

export default function ArrowHome() {

    const navigation = useNavigation();

    function irHome() {
        navigation.navigate("Login");
    }

    return (
        <View>
            <TouchableOpacity onPress={irHome}>
                <Icon name="arrowleft" size={32} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}
