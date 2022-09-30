
import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Notif(props) {
    return (
        <View style={styles.notificacao}>
            <MaterialCommunityIcons name="circle" style={{ textAlign: 'right', color: 'red' }} />
            <Text style={styles.txtNotificacao}>
                {props.notifica}
            </Text>
            <TouchableOpacity><Text style={styles.textoDir}>
                Ver mais...
            </Text>
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    notificacao: {
        width: 350,
        height: 100,
        marginTop: 10,
        fontSize: 16,
        borderRadius: 10,
        color: '#fff',
        padding: 5,
        backgroundColor: '#2F2F42',

    },
    txtNotificacao: {
        color: '#FFF',
        fontSize: 16,
    },

    textoDir: {
        color: "white",
        marginTop: 10,
        textAlign: 'right',
        color: '#3D5CFF'

    },


});