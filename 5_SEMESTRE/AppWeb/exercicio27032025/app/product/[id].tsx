import { Text, StyleSheet, View, Dimensions } from "react-native";
import { useState, useRef, useEffect } from "react";
import { TProd } from "@/types/types";
import { OP } from "@/utils/api-service";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { Image } from "expo-image";
import { useFetch } from "@/hooks/useFetch";

const screenWidth = Dimensions.get("window").width;

export default function Products() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const carouselRef = useRef<ICarouselInstance>(null);
  const [prod, setProd] = useState<TProd | null>(null);
  const { state } = useFetch<TProd>(OP.GET_PROD_BY_ID, id);
  const { loading, data } = state;
  const progress = useSharedValue<number>(0);
  const navigation = useNavigation();

  useEffect(() => {
    if (data) {
      setProd(data);
      navigation.setOptions({ headerShown: true, title: data.title });
    }
  }, [data, navigation]);

  const onPressPagination = (index: number) => {
    carouselRef.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  if (loading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  if (!prod) {
    return <Text style={styles.errorText}>No product to show</Text>;
  }

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        width={screenWidth - 40}
        height={(screenWidth - 40) * 0.6}
        data={prod.images}
        onProgressChange={progress}
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image
              source={item}
              contentFit="cover"
              style={styles.carouselImage}
            />
          </View>
        )}
      />

      <Pagination.Basic
        progress={progress}
        data={prod.images}
        dotStyle={styles.dotStyle}
        containerStyle={styles.paginationContainer}
        onPress={onPressPagination}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>{prod.title}</Text>
        <Text style={styles.descriptionText}>{prod.description}</Text>
        <Text style={styles.priceText}>${prod.price}</Text>
        <Text style={styles.categoryText}>{prod.category.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
  errorText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
    color: "red",
  },
  carouselItem: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 5,
  },
  carouselImage: {
    width: "100%",
    height: "100%",
  },
  paginationContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  dotStyle: {
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 50,
    width: 8,
    height: 8,
    marginHorizontal: 3,
  },
  infoContainer: {
    paddingVertical: 15,
    alignItems: "center",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
    textAlign: "center",
  },
  priceText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 16,
    color: "#777",
  },
});
