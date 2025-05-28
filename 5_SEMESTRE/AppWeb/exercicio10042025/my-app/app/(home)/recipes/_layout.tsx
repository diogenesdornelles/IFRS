import { Stack } from "expo-router";


export default function RecipesLayout() {
    return (
        <Stack screenOptions={{}}>
            <Stack.Screen
                name="category"
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="detail"
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    )
}