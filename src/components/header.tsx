export default function Header() {
  return (
    <div className="relative w-[500px] flex flex-col items-center gap-2 my-20">
      <div className="absolute -top-5 -z-10">
        <img src="/src/assets/pattern-circles.svg" />
      </div>
      <h1 className="text-3xl text-primary">Simple, traffic-based pricing</h1>
      <p className="text-sm text-secondary">
        Sign-up for our 30-day trial. No credit card required
      </p>
    </div>
  );
}
