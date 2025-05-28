import { useLocalSearchParams, useNavigation } from "expo-router";
import { Text, SafeAreaView, StyleSheet, Button, ScrollView } from "react-native";
import { recipes } from "@/db/recipes";
import { useEffect } from "react";
import { useSetFavorites } from "@/hooks/use-set-favorites";

const Recipe = () => {
    const { recipeId } = useLocalSearchParams();

    const navigation = useNavigation();

    const { setItem } = useSetFavorites('recipes');

    if (typeof recipeId === 'string' && !parseInt(recipeId)) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.errorText}>Receita inválida!</Text>
            </SafeAreaView>
        );
    }

    const recipe = recipes.find((r) => r.id === Number(recipeId));

    if (!recipe) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.errorText}>Receita não encontrada!</Text>
            </SafeAreaView>
        );
    }

    useEffect(() => {
        navigation.setOptions({ headerShown: true, title: recipe.name });
    }, [navigation]);



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.card}>
                <Text style={styles.title}>{recipe.name}</Text>
                <Text style={styles.description}>{recipe.description}</Text>
                <Text style={styles.sectionTitle}>Ingredientes:</Text>
                {recipe.ingredients.map((ingredient, index) => (
                    <Text key={index} style={styles.item}>- {ingredient}</Text>
                ))}
                <Text style={styles.sectionTitle}>Instruções:</Text>
                {recipe.instructions.map((instruction, index) => (
                    <Text key={index} style={styles.item}>{index + 1}. {instruction}</Text>
                ))}
                <Button title="Adicionar aos Favoritos" onPress={() => setItem(recipe.id, !recipe.isFavorite)} color="#F2B441" />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Recipe;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#034C8C",
        padding: 20,
    },
    card: {
        backgroundColor: "#F0F1F2",
        borderRadius: 10,
        padding: 20,
        width: '90%',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#115D8C",
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: "#115D8C",
        marginBottom: 15,
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#F2B441",
        marginTop: 10,
        marginBottom: 5,
    },
    item: {
        fontSize: 14,
        color: "#115D8C",
        marginBottom: 5,
    },
    errorText: {
        fontSize: 16,
        color: '#FF0000',
        textAlign: 'center',
    },
});