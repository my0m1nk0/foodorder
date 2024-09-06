import products from "../../../assets/data/products";
import ProductListItems from "@/src/components/ProductListItem";
import { ScrollView } from "react-native";

export default function MenuScreen() {
  return (
    <ScrollView>
    {products.map((product, index) => (
        <ProductListItems key={index} product={product} />
      ))}
    </ScrollView>
  );
}
