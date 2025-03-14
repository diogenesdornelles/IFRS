import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#D9D9D9',
    },
    headerTintColor: '#261E1A',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}>
    <Stack.Screen name="index" options={{
      title: 'Exercícios Dev App Web',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }} />
    <Stack.Screen name="ex1" options={{
      title: 'Boas-vindas',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }} />
    <Stack.Screen name="ex2" options={{
      title: 'Contador Simples',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }} />
    <Stack.Screen name="ex3" options={{
      title: 'Alteração do tema (dark/light mode)',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }} />
    <Stack.Screen name="ex4" options={{
      title: 'Cronômetro simples',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }} />
    <Stack.Screen name="ex5" options={{
      title: 'Gerador de números aleatórios',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }} />
  </Stack>;

}
