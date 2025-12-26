import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Bell } from "lucide-react";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mykyzdvb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("You're on the list!", {
          description: "We'll notify you when BullRack launches.",
        });
        setEmail("");
      } else {
        toast.error("Something went wrong", {
          description: "Please try again later.",
        });
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-secondary/50 border-border/50 focus:border-primary/50 text-foreground placeholder:text-muted-foreground"
            required
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="h-12 px-6 bg-gradient-fire hover:opacity-90 text-primary-foreground font-semibold transition-all duration-300 hover:glow-primary"
        >
          <Bell className="w-4 h-4 mr-2" />
          {isLoading ? "Joining..." : "Notify Me"}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-3 text-center">
        Be the first to know when we launch. No spam, ever.
      </p>
    </form>
  );
};

export default EmailSignup;
