import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Link, useNavigation, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { useGetData } from '@/hooks/use-get-data';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Category = () => {
    const { categoryId } = useLocalSearchParams();
    const navigation = useNavigation();

    const categories = useGetData<Category[]>('categories');
    const recipes = useGetData<Recipe[]>('recipes');

    const [catName, setCatName] = useState('');

    if (typeof categoryId === 'string' && !parseInt(categoryId)) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.errorText}>Categoria inválida!</Text>
            </SafeAreaView>
        );
    }

    const recipesByCat = recipes?.filter((recipe) => {
        return recipe.categoryId === Number(categoryId);
    });

    if (recipesByCat?.length === 0) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.errorText}>Nenhuma receita encontrada para esta categoria.</Text>
            </SafeAreaView>
        );
    }

    useEffect(() => {
        const category = categories?.find((cat) => cat.id === Number(categoryId));
        if (category) {
            setCatName(category.name);
            navigation.setOptions({ headerShown: true, title: category.name, headerBackVisible: false });
        }
    }, [categoryId, categories, navigation]);


    if (!categories || !recipes || recipes.length < 1 || categories.length < 1) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.errorText}>Erro ao buscar dados.</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Receitas da Categoria {catName}</Text>
            <FlatList
                contentContainerStyle={styles.list}
                data={recipesByCat}
                renderItem={({ item }) => {
                    return (
                        <Link style={styles.link} asChild href={`/recipes/detail/${item.id}`}>
                            <TouchableOpacity>
                                <View style={styles.categoryContainer}>
                                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
                                        <Text style={[styles.item, { fontWeight: '900', flex: 1 }]}>{item.name}</Text>
                                        <MaterialIcons name={!item.isFavorite ? "favorite-outline" : "favorite"} size={24} color="#034C8C" />
                                    </View>
                                    <Text style={styles.item}>{item.description}</Text>
                                </View>
                            </TouchableOpacity>
                        </Link>
                    );
                }}
                keyExtractor={(item) => String(item.id)}
            />
        </SafeAreaView>
    );
};

export default Category;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        minWidth: '100%',
        minHeight: '100%',
        backgroundColor: "#034C8C",
        padding: 30,
    },
    list: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    link: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 4,
    },
    categoryContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: "#F0F1F2",
        width: 300,
        padding: 10,
        marginBottom: 10,
    },
    item: {
        padding: 1,
        marginBottom: 2,
        color: "#115D8C",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F2B441',
        marginBottom: 20,
    },
    errorText: {
        fontSize: 16,
        color: '#FF0000',
        textAlign: 'center',
    },
});