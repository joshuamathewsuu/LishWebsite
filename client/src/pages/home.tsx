import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { WaitlistForm } from "@/components/waitlist-form";
import { Card } from "@/components/ui/card";
import { Leaf, Heart, Brain } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced nav with glassmorphism */}
      <nav className="fixed w-full border-b bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/40 z-50">
        <div className="container flex h-16 items-center justify-between">
          <span className="text-2xl font-bold text-primary">Lish</span>
          <ThemeToggle />
        </div>
      </nav>

      <main>
        {/* Hero section with enhanced design */}
        <section className="container pt-32 pb-8 md:pt-40 md:pb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-3xl blur-3xl -z-10" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Your Personal
              <br />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Nutrition Assistant
              </span>
            </h1>
            <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Lish helps you make better food choices with personalized nutrition insights and meal planning.
            </p>
            <div className="mt-8">
              <WaitlistForm />
            </div>
          </motion.div>
        </section>

        {/* Feature cards with glassmorphism */}
        <section className="container py-12 md:py-24">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="relative overflow-hidden bg-background/50 backdrop-blur-lg border-background/20 hover:bg-background/60 transition-colors">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
                  alt="Healthy meal planning"
                  className="object-cover w-full h-full opacity-10"
                />
              </div>
              <div className="relative p-6">
                <Leaf className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Smart Meal Planning</h3>
                <p className="text-muted-foreground">
                  Get personalized meal suggestions based on your preferences and nutritional needs.
                </p>
              </div>
            </Card>
            <Card className="relative overflow-hidden bg-background/50 backdrop-blur-lg border-background/20 hover:bg-background/60 transition-colors">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
                  alt="Health tracking"
                  className="object-cover w-full h-full opacity-10"
                />
              </div>
              <div className="relative p-6">
                <Heart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Health Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor your nutrition goals and track your progress with detailed insights.
                </p>
              </div>
            </Card>
            <Card className="relative overflow-hidden bg-background/50 backdrop-blur-lg border-background/20 hover:bg-background/60 transition-colors">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1543362906-acfc16c67564"
                  alt="AI nutrition insights"
                  className="object-cover w-full h-full opacity-10"
                />
              </div>
              <div className="relative p-6">
                <Brain className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">AI-Powered Insights</h3>
                <p className="text-muted-foreground">
                  Receive intelligent recommendations to optimize your diet and lifestyle.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Content section with glass effect */}
        <section className="container py-12 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl blur-3xl -z-10" />
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Make Healthy Eating Simple
              </h2>
              <p className="mt-4 text-muted-foreground">
                Lish takes the guesswork out of nutrition by providing you with personalized recommendations and easy-to-follow meal plans.
              </p>
              <div className="mt-8 grid gap-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-background/20">
                  <img
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
                    alt="Healthy meal prep"
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">Personalized Meal Plans</h3>
                    <p className="text-sm text-muted-foreground">Tailored to your dietary preferences and goals</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-background/20">
                  <img
                    src="https://images.unsplash.com/photo-1551806235-642171de4834"
                    alt="Fitness tracking"
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">Progress Tracking</h3>
                    <p className="text-sm text-muted-foreground">Monitor your health journey with ease</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f"
                alt="Mobile app showcase"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent backdrop-blur-[2px]" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer with glass effect */}
      <footer className="border-t bg-background/60 backdrop-blur-sm">
        <div className="container py-8 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Lish. All rights reserved.
          </p>
          <ThemeToggle />
        </div>
      </footer>
    </div>
  );
}