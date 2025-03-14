import { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button, Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function ContadorSimples() {
    const [numero, setNumero] = useState<number>(0)

    const handlePress = (value: number) => {
        if (value >= 0) {
            setNumero((prev) => prev + value)
        } else {
            if (numero > 0) {
                setNumero((prev) => prev + value)
            }
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.message}>Contagem: {numero}</Text>
            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.button} onPress={() => handlePress(1)}>
                    <Text style={styles.textButton}>Incrementar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress(-1)}>
                    <Text style={styles.textButton}>Decrementar</Text>
                </TouchableOpacity>

            </View>
      <Link href="/ex3" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>Go to Exercicio 3</Text>
        </Pressable>
      </Link>
            <StatusBar style="auto" />
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        height: 300
    },
    input: {
        height: 50,
        width: '80%',
        borderWidth: 1,
        borderColor: '#3b5998',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    message: {
        fontSize: 26,
        width: '100%',
        textAlign: "center",
        backgroundColor: "#BFA678",
        padding: 30,
        color: 'white'

    },
    textButton: {
        fontSize: 22,
        color: 'white'
    },
    button: {
        backgroundColor: '#40372F',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 20,
    },
})