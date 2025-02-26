import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { WaitlistForm } from "@/components/waitlist-form";
import { Card } from "@/components/ui/card";
import { Leaf, Heart, Brain } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <span className="text-2xl font-bold text-primary">List</span>
          <ThemeToggle />
        </div>
      </nav>

      <main>
        <section className="container pt-32 pb-8 md:pt-40 md:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Your Personal
              <br />
              <span className="text-primary">Nutrition Assistant</span>
            </h1>
            <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              List helps you make better food choices with personalized nutrition insights and meal planning.
            </p>
            <div className="mt-8">
              <WaitlistForm />
            </div>
          </motion.div>
        </section>

        <section className="container py-12 md:py-24">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-6">
              <Leaf className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart Meal Planning</h3>
              <p className="text-muted-foreground">
                Get personalized meal suggestions based on your preferences and nutritional needs.
              </p>
            </Card>
            <Card className="p-6">
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Health Tracking</h3>
              <p className="text-muted-foreground">
                Monitor your nutrition goals and track your progress with detailed insights.
              </p>
            </Card>
            <Card className="p-6">
              <Brain className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">AI-Powered Insights</h3>
              <p className="text-muted-foreground">
                Receive intelligent recommendations to optimize your diet and lifestyle.
              </p>
            </Card>
          </div>
        </section>

        <section className="container py-12 md:py-24">
          <div className="relative">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Make Healthy Eating Simple
                </h2>
                <p className="mt-4 text-muted-foreground">
                  List takes the guesswork out of nutrition by providing you with personalized recommendations and easy-to-follow meal plans.
                </p>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
                  alt="Healthy food bowl"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-8 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 List. All rights reserved.
          </p>
          <ThemeToggle />
        </div>
      </footer>
    </div>
  );
}
