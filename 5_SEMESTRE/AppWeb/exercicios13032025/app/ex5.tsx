import { Text, View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Link } from "expo-router";

export default function GeradorNumeros() {
  const [numero, setNumero] = useState<number>(0)

  const handlePress = () => {
    const n = Math.round(Math.random() * 100) 
    setNumero(n)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{numero}</Text>
      <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
        <Text style={styles.textButton}>Gerar</Text>
      </TouchableOpacity>
      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>Go to Home</Text>
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
  message: {
    fontSize: 32,
    borderColor: '#3b5998',
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5
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