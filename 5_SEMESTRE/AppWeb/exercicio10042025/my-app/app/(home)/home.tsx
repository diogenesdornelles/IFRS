import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import { useGetData } from '@/hooks/use-get-data'

const Home = () => {

    const categories = useGetData<Category[]>('categories')

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Categorias de receitas</Text>
            <FlatList
                contentContainerStyle={styles.list}
                data={categories}
                renderItem={({ item }) => {
                    return (
                        <Link style={styles.link} asChild href={`/recipes/category/${item.id}`}>
                            <TouchableOpacity>
                                <View style={styles.categoryContainer}>
                                    <Text style={[styles.item, { fontWeight: 900 }]}>{item.name}</Text>
                                    <Text style={styles.item}>{item.description}</Text>
                                </View>
                            </TouchableOpacity>
                        </Link>
                    )
                }}
                keyExtractor={(item) => String(item.id)}
            />
        </SafeAreaView>
    )
}

export default Home


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
        padding: 30
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F2B441',
        marginBottom: 20,
        margin: 20
    },
    categoryContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: "#F0F1F2",
        width: 300,
        height: 'auto',
        textAlign: 'left',
        padding: 10
    },
    item: {
        padding: 1,
        marginBottom: 2,
        color: "#115D8C"


    }
});