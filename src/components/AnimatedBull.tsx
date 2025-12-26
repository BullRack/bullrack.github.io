import bullrackLogo from "@/assets/bullrack-logo.png";

interface AnimatedBullProps {
  className?: string;
}

const AnimatedBull = ({ className = "" }: AnimatedBullProps) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src={bullrackLogo}
        alt="BullRack Bull"
        className="w-full h-full object-contain drop-shadow-2xl rounded-lg"
        style={{
          filter: "drop-shadow(0 0 20px rgba(249, 115, 22, 0.3))",
        }}
      />
    </div>
  );
};

export default AnimatedBull;
