import Card from "@/components/CardFood/Card";
import { useCartContext } from "@/context";

export default function FoodList() {
  const { availableProducts } = useCartContext();

  return (
    <ul className="flex flex-col items-center gap-5 md:grid md:grid-cols-3">
      {availableProducts.map((item, index) => (
        <li key={index}>
          <Card {...item} />
        </li>
      ))}
    </ul>
  );
}
