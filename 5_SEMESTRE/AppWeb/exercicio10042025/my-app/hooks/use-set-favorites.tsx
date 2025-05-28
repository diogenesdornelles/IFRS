import { useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isWebEnvironment } from '@/utils/is-web-environment';
import { Alert } from 'react-native';


export function useSetFavorites(key: string) {

  const setItem = useCallback(
    async (id: number, isFavorite: boolean) => {
      try {
        const isWeb = isWebEnvironment();
        let result: string | null = null;

        if (isWeb) {
          result = localStorage.getItem(key);
        } else {
          result = await AsyncStorage.getItem(key);
        }

        let dataArray: Recipe[] = result ? JSON.parse(result) : [];

        if (dataArray.length > 0) {
          for (let i = 0; i < dataArray.length; i++) {
            if (id === dataArray[i].id) {
              dataArray[i].isFavorite = isFavorite;
              break;
            }
          }
        }

        const newDataStr = JSON.stringify(dataArray);
        if (isWeb) {
          localStorage.setItem(key, newDataStr);
        } else {
          await AsyncStorage.setItem(key, newDataStr);
        }
        Alert.alert('Inserido nos favoritos!')
      } catch (error) {
        console.error(`Erro ao alterar favoritos na chave "${key}":`, error);
      }
    },
    [key]
  );

  return { setItem };
}
