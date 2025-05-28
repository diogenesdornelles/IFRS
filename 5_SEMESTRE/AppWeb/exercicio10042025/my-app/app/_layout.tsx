import { Tabs } from 'expo-router'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
    return (
        <Tabs >
            <Tabs.Screen
                name="(favorites)"
                options={{
                    headerShown: false,
                    title: "Favoritas",
                    tabBarIcon: () => <MaterialIcons name="favorite" size={24} color="#034C8C" />
                }}
            />
            <Tabs.Screen
                name="(home)"
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: () => <AntDesign name="home" size={24} color="#034C8C" />
                }}
            />
            <Tabs.Screen
                name="index"
                
                options={{
                    href: null,
                    headerShown: false,
                    
                }}
            />
        </Tabs>
    )
}