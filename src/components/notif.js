
import React from "react";
import { TextInput, StyleSheet, View } from 'react-native';


export default function Notif(props) {
    return (
        <View style={styles.input}
            placeholder={props.plc}
            secureTextEntry={props.src}
        ></View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 100,
        marginTop: 10,
        marginLeft: 30,
        fontSize: 16,
        borderRadius: 10,
        color: '#fff',
        padding: 5,
        backgroundColor: '#2F2F42',
    },


});