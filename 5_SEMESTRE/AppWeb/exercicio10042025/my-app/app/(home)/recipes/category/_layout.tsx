import { Stack } from "expo-router";


export default function CategoryLayout() {
    return (
        <Stack screenOptions={{}}>
            <Stack.Screen
                name="[categoryId]"
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    )
}