import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

type TExercicio = {
  numero: number;
  enunciado: string;
  texto: string;
};

const data: TExercicio[] = [
  {
    numero: 1,
    enunciado: "Criar uma tela de boas-vindas",
    texto: "Exibir um texto de boas-vindas e o nome do usuário vindo de um estado (useState).Um botão para alterar o nome, abrindo um TextInput."
  },
  {
    numero: 2,
    enunciado: "Contador simples",
    texto: "Criar um contador com botões incrementar e decrementar Exibir o valor atual e impedir que ele fique abaixo de 0"
  },
  {
    numero: 3,
    enunciado: "Alteração do tema (dark/light mode)",
    texto: "Criar dois temas (claro e escuro) usando useState; Mudar as cores da interface ao alternar entre os temas."
  },
  {
    numero: 4,
    enunciado: "Cronômetro simples",
    texto: "Criar um Cronômetro que inicia e para com um botão exibir o tempo decorrido em segundos."
  },
  {
    numero: 5,
    enunciado: "Gerador de números aleatórios",
    texto: "Criar um botão que gera e exibe um número aleatório entre 1 e 100."
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.numero.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.number}>{item.numero}</Text>
            <Text style={styles.title}>{item.enunciado}</Text>
            <Text style={styles.text}>{item.texto}</Text>
          </View>
        )}
      />

      <Link href="/ex1" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>Go to Exercicio 1</Text>
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
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  number: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  text: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#40372F",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  textButton: {
    fontSize: 18,
    color: "white",
  },
});
