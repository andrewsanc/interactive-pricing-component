import iconCheck from "../assets/icon-check.svg";

interface PricingCheckProps {
  text: string;
}

export default function PricingCheck(prop: PricingCheckProps) {
  const { text } = prop;
  return (
    <div className="flex items-center gap-4">
      <img src={iconCheck} />
      <p className="text-sm text-secondary">{text}</p>
    </div>
  );
}
