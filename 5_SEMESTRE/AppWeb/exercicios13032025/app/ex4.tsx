import { Text, View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Link } from "expo-router";

export default function CronometroSimples() {
  const [time, setTime] = useState<number>(0)
  const [run, setRunning] = useState<boolean>(false)
  const [int, setInt] = useState<NodeJS.Timeout | null>(null)

  const handlePress = () => {
    if (!run) {
      let to = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000)
      setInt(to)
      setRunning(true)
    } else {
      if (int) {
        clearInterval(int)
        setInt(null)
        setRunning(false)
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{time}</Text>
      <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
        <Text style={styles.textButton}>{run ? 'Parar' : 'Continuar'}</Text>
      </TouchableOpacity>
      <Link href="/ex5" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>Go to Exercicio 5</Text>
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