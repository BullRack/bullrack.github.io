import { Server, Activity, Shield, Zap, Github } from "lucide-react";
import AnimatedBull from "@/components/AnimatedBull";
import FeatureCard from "@/components/FeatureCard";
import EmailSignup from "@/components/EmailSignup";
import StatusBadge from "@/components/StatusBadge";

const Index = () => {
  const features = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Metrics",
      description: "Monitor CPU, memory, disk, and network in real-time with millisecond precision.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Smart Alerts",
      description: "Get notified before problems happen with intelligent threshold detection.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightweight Agent",
      description: "Minimal footprint. Maximum performance. Less than 1% CPU overhead.",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Multi-Server",
      description: "Monitor your entire infrastructure from a single, unified dashboard.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Ambient background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AnimatedBull className="w-10 h-10" />
              <span className="text-xl font-bold text-foreground">BullRack</span>
            </div>
            <a
              href="https://github.com/BullRack"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline text-sm">GitHub</span>
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-6">
          <section className="py-20 lg:py-32 text-center">
            <div className="max-w-4xl mx-auto">
              <StatusBadge />

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6">
                <span className="text-foreground">Server Monitoring</span>
                <br />
                <span className="text-gradient-fire">Made Powerful</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                BullRack is a lightweight, high-performance server monitoring agent. 
                Get real-time insights into your infrastructure health with minimal overhead.
              </p>

              {/* Coming Soon Text */}
              <div className="mb-12">
                <p className="text-sm font-mono text-muted-foreground tracking-widest uppercase">
                  Launching Early 2026
                </p>
                <div className="mt-4 h-1 w-32 mx-auto bg-gradient-fire rounded-full animate-shimmer" />
              </div>

              {/* Email Signup */}
              <EmailSignup />
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 border-t border-border/30">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                What's Coming
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Built for high performing infrastructure
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </section>

          {/* Tech Preview */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto">
              <div className="rounded-xl bg-card border border-border/50 overflow-hidden shadow-elevated">
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-accent/80" />
                  <div className="w-3 h-3 rounded-full bg-primary/80" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">terminal</span>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <span className="text-primary">$</span> curl -sSL https://bullrack.github.io/install.sh | sh
                    </p>
                    <p className="text-muted-foreground">
                      <span className="text-accent">→</span> Installing BullRack agent...
                    </p>
                    <p className="text-muted-foreground">
                      <span className="text-accent">→</span> Agent configured and running
                    </p>
                    <p className="text-primary animate-pulse">
                      <span className="text-accent">✓</span> Metrics streaming to dashboard
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                One command. Full visibility. That's it.
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AnimatedBull className="w-8 h-8" />
              <span className="text-sm text-muted-foreground">
                © 2026 BullRack. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/BullRack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
