import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TProd } from "@/types/types";
import { Image } from 'expo-image';
import { Link } from "expo-router";


export default function ProductItem({ ...prod }: TProd) {
    return (
        (prod && prod.images && prod.images.length > 0 ? (
            <View style={styles.container}>
                <View>
                    <Image source={prod.images[0]} contentFit="cover" style={styles.image} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.item}>{prod.title}</Text>
                </View>
                <Link href={{
                    pathname: '/product/[id]',
                    params: { id: prod.id }
                }} asChild>
                    <TouchableOpacity style={styles.btn}><Text style={styles.textBtn}>Show Product</Text></TouchableOpacity>
                </Link>
            </View>) : <Text>No products to show</Text>)

    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        padding: 10,
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 10,
    },
    info: {
        padding: 10,
        alignItems: "center",
    },
    item: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 5,
    },
    containerBtn: {
        alignItems: "center",
        marginTop: 10,
    },
    btn: {
        backgroundColor: "#007bff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        textAlign: 'center'
    },
    textBtn: {
        fontSize: 16,
        color: "#fff",
        textAlign: 'center'
    },
});