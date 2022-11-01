
import React from "react";
import { StyleSheet, View } from 'react-native';
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
                <Icon name="logout" size={32} style={styles.icone} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    icone: {
        textAlign: 'right',
    },
});