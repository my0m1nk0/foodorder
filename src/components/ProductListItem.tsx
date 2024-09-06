import { Image, Text, View, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import { Product } from "../types";

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png';
type ProductListItemsProps = {
    product: Product;
    };

const ProductListItems = ({ product }: ProductListItemsProps) => {
  return (
    <View style={styles.titleContainer}>
      <Image source={{ uri: product.image || defaultPizzaImage}} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
};

export default ProductListItems;
const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.light.tint,
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
