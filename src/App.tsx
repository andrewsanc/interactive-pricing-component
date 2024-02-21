import Header from "./components/header";
import PricingCard from "./components/pricing-card";

export default function App() {
  return (
    <div className="block relative h-screen">
      <div className="absolute h-1/2 w-full bg-zinc-100 rounded-bl-[40%] -z-10"></div>
      <div className="flex flex-col justify-center items-center gap-20">
        <Header />
        <PricingCard />
      </div>
    </div>
  );
}
