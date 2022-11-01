
import React from "react";
import { TextInput, StyleSheet } from 'react-native';


export default function InputGl(props) {
    const [onChangeText] = React.useState('');
    
    return (
        <TextInput style={styles.input}
            placeholder={props.plc}
            placeholderTextColor="white"
            secureTextEntry={props.src}
            value={props.value}
            onChangeText={onChangeText}
        ></TextInput>
    );
}

const styles = StyleSheet.create({
    input: {
        marginLeft: 10,
        width: 350,
        height: 40,
        fontSize: 16,
        alignContent: "center",
        borderRadius: 10,
        backgroundColor: '#3E3E55',
        placeholderTextColor: '#fff',
        color: '#fff',
        padding: 5,
    },
});