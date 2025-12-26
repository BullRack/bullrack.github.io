import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:glow-primary">
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          <div className="text-primary">{icon}</div>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
