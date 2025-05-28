import { Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { TProds } from "@/types/types";
import { OP } from "@/utils/api-service";
import { useLocalSearchParams, useNavigation } from 'expo-router';
import ProductItem from "@/components/product-item";

export default function Products() {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();

  const [prods, setProds] = useState<TProds>([])
  const { state } = useFetch<TProds>(OP.GET_PRODS_BY_CAT, categoryId);

  const { loading, data, error } = state;

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: true, title: "Products" });
  }, [navigation]);

  useEffect(() => {
    if (data) {
      setProds(() => data);
    }
  }, [data]);

  console.log(data)

  return (
    loading ? <Text>Loading...</Text> :
    (prods && prods.length > 0) ? (<SafeAreaView style={styles.container}>
      <FlatList
        data={prods}
        renderItem={({ item }) => <ProductItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => (
            <Text style={styles.title}>
              List of Products
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