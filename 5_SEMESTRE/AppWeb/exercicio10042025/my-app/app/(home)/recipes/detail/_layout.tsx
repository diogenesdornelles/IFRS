import { Stack } from "expo-router";


export default function RecipeLayout() {
    return (
        <Stack screenOptions={{}}>
            <Stack.Screen
                name="[recipeId]"
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    )
}