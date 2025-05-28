import { Stack } from "expo-router";


export default function CategoriesLayout() {
    return (
        <Stack screenOptions={{}}>
            <Stack.Screen
                name="favorites"
                options={{
                    title: "Favoritas",
                }}
            />
        </Stack>
    )
}