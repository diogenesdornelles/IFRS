import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button, Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Link } from 'expo-router';

type Tema = 'dark' | 'light';



export default function AlterarTema() {
    const [tema, setTema] = useState<Tema>('light');

    const handlePress = () => {
        setTema(tema === 'light' ? 'dark' : 'light')
    }

    return (
        <View
            style={tema === 'light' ? styles.containerLight : styles.containerDark}
        >
            <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
                <Text style={styles.textButtonLight}>Alterar tema</Text>
            </TouchableOpacity>
            <Text style={tema === 'light' ? styles.messageLight : styles.messageDark}>O tema agora é {tema}</Text>
            <Link href="/ex4" asChild>
                <Pressable style={styles.button}>
                    <Text style={tema === 'light' ? styles.textButtonLight : styles.textButtonDark}>Go to Exercicio 4</Text>
                </Pressable>
            </Link>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    containerLight: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    containerDark: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        backgroundColor: "#000"
    },
    messageLight: {
        fontSize: 26
    },
    messageDark: {
        fontSize: 26,
        color: 'white'
    },
    textButtonLight: {
        fontSize: 22,
        color: 'white'
    },
    textButtonDark: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#40372F',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 20,
    },
})