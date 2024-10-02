import FoodList from "@/components/FoodList/FoodList";
import Shopping from "@/components/Shopping/Shopping";
import { CartProvider } from "./CartProvider";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-default p-6 bg-rose-50 lg:px-10 lg:py-20 md:py-10 md:px-10 relative">
      <CartProvider>
        <div className="flex flex-col lg:flex-row gap-8">
          <section>
            <h1 className="text-5xl text-rose-900 font-bold pb-8">Desserts</h1>
            <FoodList />
          </section>
          <aside className="bg-white p-6 lg:h-fit w-full rounded-lg lg:max-w-96">
            <Shopping />
          </aside>
        </div>
      </CartProvider>
    </div>
  );
}
