"use client"

import { Rocket, Compass, Gem, ArrowRight } from "lucide-react"
import Link from "next/link"
import { type LucideIcon } from "lucide-react"

export default function LearnPage() {
  const learningPaths = [
    {
      icon: Rocket,
      title: "Module 1: The Blast Ecosystem",
      level: "Beginner",
      duration: "2-3 hours",
      description: "An introduction to why memecoins thrive on high-speed chains like Sui and how Blast.fun is the center of this new ecosystem",
      href: "/learn/beginner",
      cta: "Start Learning",
      modules: 1,
      lessons: 3,
      categories: ["Crypto", "Ecosystem"],
      bgColor: "from-orange-400 to-orange-600",
      iconBg: "bg-orange-500/20"
    },
    {
      icon: Compass,
      title: "Module 2: Launching Your Legacy",
      level: "Intermediate", 
      duration: "4-5 hours",
      description: "Master the complete process of creating and launching your memecoin on Blast.fun, from concept to market",
      href: "/learn/creator",
      cta: "Build & Launch",
      modules: 1,
      lessons: 4,
      categories: ["Development", "Launch"],
      bgColor: "from-blue-400 to-blue-600",
      iconBg: "bg-blue-500/20"
    },
    {
      icon: Gem,
      title: "Module 3: Trading & Strategy",
      level: "Advanced",
      duration: "5-6 hours",
      description: "Master advanced trading techniques and security practices for memecoin trading on Blast.fun",
      href: "/learn/advanced",
      cta: "Master Trading",
      modules: 1,
      lessons: 4,
      categories: ["Trading", "Security"],
      bgColor: "from-red-500 to-red-700",
      iconBg: "bg-red-500/20"
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Static gradient background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-[15%] left-[5%] w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(var(--destructive)) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute top-[60%] right-[10%] w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto py-16 sm:py-24">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter font-mono whitespace-nowrap">
            Welcome to the <span className="text-destructive">BLAST ACADEMY</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            From complete beginner to professional trader, our comprehensive courses cover everything from memecoin basics to advanced DeFi strategies. Build, trade, and thrive in the Blast ecosystem.
          </p>
        </div>

        <div className="mt-16 max-w-6xl mx-auto">
          <div className="space-y-6">
            {learningPaths.map((path) => (
              <LearningPathCard key={path.title} {...path} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

interface LearningPathCardProps {
  icon: LucideIcon;
  title: string;
  level: string;
  duration: string;
  description: string;
  href: string;
  cta: string;
  modules: number;
  lessons: number;
  categories: string[];
  bgColor: string;
  iconBg: string;
}

function LearningPathCard({ 
  icon: Icon, 
  title, 
  description, 
  href,
  categories,
  bgColor
}: LearningPathCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-card border rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 transform hover:-translate-y-1">
        <div className="flex h-64">
          {/* Course Image/Left Side */}
          <div className="p-4">
            <div className="relative w-80 h-56 rounded-2xl overflow-hidden">
              {/* Course Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/BlastCourseImage.jpeg')`,
                  backgroundColor: bgColor.includes('orange') ? '#ea580c' : bgColor.includes('blue') ? '#2563eb' : '#dc2626'
                }}
              />
            </div>
          </div>

          {/* Course Content/Right Side */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold font-mono group-hover:text-destructive transition-colors mb-3">
                {title}
              </h3>
              <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Categories and CTA */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {categories.map((category, index) => (
                  <span 
                    key={index}
                    className="bg-muted/50 text-muted-foreground text-sm px-4 py-2 rounded-full font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              <button className="bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:bg-primary/90 group-hover:bg-destructive group-hover:text-white flex items-center space-x-2">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}