import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isWebEnvironment } from '@/utils/is-web-environment';


export function useGetData<T = any>(key: string): T | null {
    const [storedData, setStoredData] = useState<T | null>(null);
  
    useEffect(() => {
      async function loadData() {
        try {
          const isWeb = isWebEnvironment();
          let result: string | null = null;
  
          if (isWeb) {
            result = localStorage.getItem(key);
          } else {
            result = await AsyncStorage.getItem(key);
          }
  
          if (result) {
            const parsed = JSON.parse(result);
            setStoredData(parsed);
          } else {
            setStoredData(null);
          }
        } catch (error) {
          console.error('Erro ao carregar dados:', error);
          setStoredData(null);
        }
      }
      loadData();
    }, [key]);
  
    return storedData;
  }