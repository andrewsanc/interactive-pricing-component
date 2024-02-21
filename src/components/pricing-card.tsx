import PricingCheck from "./pricing-check";

export default function PricingCard() {
  return (
    <div className="w-[450px] h-[400px] bg-white rounded-lg shadow-lg flex flex-col p-6">
      <div className="flex justify-between items-center">
        <p className="font-sm font-bold text-secondary">100k PAGEVIEWS</p>
        <div className="font-sm text-secondary flex items-center gap-2">
          <span className="text-5xl text-primary font-bold">$16.00</span>
          /month
        </div>
      </div>
      <div></div>
      <div></div>
      <hr className="h-0.5 border-t-0 bg-gray-200 opacity-100" />
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <PricingCheck text="Unlimited websites" />
          <PricingCheck text="100% data ownership" />
          <PricingCheck text="Email reports" />
        </div>
        <button className="bg-primary text-white text-sm w-[170px] h-[40px] rounded-3xl hover:opacity-80">
          Start my trial
        </button>
      </div>
    </div>
  );
}
