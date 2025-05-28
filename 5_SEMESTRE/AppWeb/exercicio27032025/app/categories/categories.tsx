import { Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { TCats } from "@/types/types";
import { OP } from "@/utils/api-service";
import CatItem from "@/components/category-item";
import { useNavigation } from "expo-router";

export default function Categories() {

  const [cats, setCats] = useState<TCats>([])
  const { state } = useFetch<TCats>(OP.GET_ALL_CATS);

  const { loading, data, error } = state;

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: true, title: "Categories" });
  }, [navigation]);

  useEffect(() => {
    if (data) {
      setCats(() => data);
    }
  }, [data, setCats]);

  return (
    loading ? <Text>Loading...</Text> :
      (cats && cats.length > 0) ? (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={cats}
          renderItem={({ item }) => <CatItem name={item.name} image={item.image} id={item.id} />}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={() => (
            <Text style={styles.title}>
              List of Categories
            </Text>
          )}
        />
      </SafeAreaView>) : <Text>Any category to show</Text>

  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 30, 
    textAlign: "center", 
    marginTop: 20, 
    marginBottom: 20, 
    fontWeight: 'bold',
  },
  item: {
    padding: 20,
    fontSize: 16,
    marginTop: 5,
  },
  btn: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  textBtn: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});