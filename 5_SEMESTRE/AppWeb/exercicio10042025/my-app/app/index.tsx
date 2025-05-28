import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import { recipes } from '@/db/recipes'
import { categories } from '@/db/categories'
import { useMigrateData } from '@/hooks/use-migrate-data'

const Index = () => {

    useMigrateData(recipes, 'recipes');
    useMigrateData(categories, 'categories');

    return (
        <SafeAreaView style={styles.container}>
            <Link style={styles.link} asChild href={`/home`}>
                <TouchableOpacity>
                    <Text style={[styles.item, { fontWeight: 900 }]}>Ir para home</Text>
                </TouchableOpacity>
            </Link>

        </SafeAreaView>
    )
}

export default Index


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
    link: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 4,
        padding: 10,
        backgroundColor: "#F0F1F2",
        width: 200,
        borderWidth: 1,
        elevation: 5
    },
    item: {
        padding: 1,
        marginBottom: 2,
        color: "#115D8C",
        fontSize: 20
    }
});