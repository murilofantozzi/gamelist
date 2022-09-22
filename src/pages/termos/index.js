
import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/AntDesign';

export default function Termos() {

    const navigation = useNavigation();

    function goBack() {
        navigation.navigate("Cadastro");
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack}>
                <Icon name="arrowleft" size={32} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.title} >TERMOS E CONDIÇÕES</Text>
            <Text style={styles.texto}>Lorem ipsum dolor sit amet. Rem mollitia facere ab accusamus impedit ut sunt eius ut autem commodi. Qui vitae quis id mollitia doloribus est architecto harum? Cum itaque maxime et fugit blanditiis ut porro nulla aut velit recusandae et unde doloremque. Et doloribus voluptas est illum provident sed ducimus ducimus et numquam internos sed praesentium odio. Aut asperiores aspernatur sed repellendus consequatur aut dolor distinctio et provident aperiam vel porro dolores et quia itaque? Aut voluptates nesciunt aut soluta quae non odio laborum. Aut voluptas laborum aut laudantium quos in nisi molestiae id optio veniam sed unde fugiat. Id totam maxime ut expedita minima aut culpa natus eos eveniet repudiandae non dolores voluptas. Aut omnis ipsum qui maiores voluptates sit voluptatem provident aut voluptatem vitae sed libero officiis aut ipsam praesentium aut rerum ipsa.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: "white",
        textAlign: 'center',
        marginBottom: "5%",
        marginTop: "3%"
    },

    container: {
        backgroundColor: '#2F2F42',
        width: "100%",
        height: "100%",
    },
    texto: {
        fontSize: 14,
        color: "white",
        marginTop: 15,
        marginHorizontal: 15,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
    },
});