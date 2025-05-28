import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isWebEnvironment } from '@/utils/is-web-environment';



export function useMigrateData(data: Array<Recipe | Category>, key: string) {
    useEffect(() => {
        async function migrate() {
            try {
                const isWeb = isWebEnvironment();

                if (isWeb) {
                    const stored = localStorage.getItem(key);
                    if (!stored) {
                        localStorage.setItem(key, JSON.stringify(data));
                    }
                } else {
                    const stored = await AsyncStorage.getItem(key);
                    if (!stored) {
                        await AsyncStorage.setItem(key, JSON.stringify(data));
                    }
                }
            } catch (error) {
                console.error('Erro ao migrar dados:', error);
            }
        }

        if (data && data.length > 0) {
            migrate();
        }
    }, [data, key]);
}