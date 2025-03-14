import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button, Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Link } from 'expo-router';

export default function BoasVindas() {
  const [nome, setNome] = useState<string>('Usuário')
  const [mudar, setMudar] = useState<boolean>(false)

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.message}>Seja bem-vindo {nome.toUpperCase()}!</Text>
      <TouchableOpacity style={styles.button} onPress={() => setMudar((prev) => !prev)}>
        <Text style={styles.textButton}>{!mudar ? "Altere deu nome" : "OK"}</Text>
      </TouchableOpacity>
      {mudar && (
        <TextInput
          onChangeText={setNome}
          style={styles.input}
          placeholder="Digite um nome..."
          placeholderTextColor="#a3a3a3"
        />

      )}
      <Link href="/ex2" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>Go to Exercicio 2</Text>
        </Pressable>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20
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
    fontSize: 26
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