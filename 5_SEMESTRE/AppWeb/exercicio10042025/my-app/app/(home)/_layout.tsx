import { Stack } from "expo-router";


export default function HomeLayout() {
    return (
        <Stack screenOptions={{}}>
            <Stack.Screen
                name="home"
                options={{
                    title: "Home",
                }}
            />
            <Stack.Screen
                name="recipes"
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    )
}