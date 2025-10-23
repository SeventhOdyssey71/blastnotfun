// Comprehensive Blast Academy curriculum data
// In a real application, this data would be fetched from a database.

export interface Lesson {
  title: string;
  completed: boolean;
  content: string;
  duration?: string;
  type?: 'video' | 'reading' | 'interactive' | 'quiz';
  hasScreenshot?: boolean;
  screenshotAlt?: string;
  resources?: string[];
}

export interface Module {
  title: string;
  description: string;
  duration: string;
  lessons: Lesson[];
}

export interface Course {
  title: string;
  description: string;
  level: string;
  totalDuration: string;
  modules: Module[];
}

export const academyData: Record<string, Course> = {
  beginner: {
    title: "Module 1: The Blast Ecosystem",
    description: "An introduction to why memecoins thrive on high-speed chains like Sui and how Blast.fun is the center of this new ecosystem.",
    level: "Beginner",
    totalDuration: "2-3 hours",
    modules: [
      {
        title: "Module 1: The Blast Ecosystem",
        description: "Understanding the Blast ecosystem and memecoin fundamentals",
        duration: "2-3 hours",
        lessons: [
          { 
            title: "Course 101: The Blast Ecosystem: Memes on Sui", 
            completed: false, 
            duration: "30 min",
            type: "video",
            hasScreenshot: true,
            screenshotAlt: "Overview of the Blast ecosystem and Sui blockchain integration",
            content: "An introduction to why memecoins thrive on high-speed chains like Sui and how Blast.fun is the center of this new ecosystem.",
            resources: ["Sui Documentation", "Blast.fun Platform Guide"]
          },
          { 
            title: "Course 102: Navigating the Blast.fun Interface", 
            completed: false, 
            duration: "45 min",
            type: "interactive",
            hasScreenshot: true,
            screenshotAlt: "Guided tour of the Blast.fun dashboard showing key features",
            content: "A guided tour of the Blast.fun dashboard. Learn about the tokens \"Near Graduation\" and \"Graduated\", and how to use the interface to find new and trending launches.",
            resources: ["Interface Tutorial", "Feature Guide"]
          },
          { 
            title: "Course 103: Sui Wallets & Gas", 
            completed: false, 
            duration: "30 min",
            type: "interactive",
            hasScreenshot: true,
            screenshotAlt: "Wallet setup process showing Suiet, Surf, and Martian wallet configurations",
            content: "A quick-start guide on connecting your preferred Sui wallet (Suiet, Surf, Martian, etc.) to Blast.fun and ensuring you have enough SUI for gas fees.",
            resources: ["Wallet Setup Guide", "Gas Fee Calculator"]
          }
        ],
      }
    ],
  },
  creator: {
    title: "Module 2: Launching Your Legacy",
    description: "Master the complete process of creating and launching your memecoin on Blast.fun, from concept to market.",
    level: "Intermediate",
    totalDuration: "4-5 hours",
    modules: [
      {
        title: "Module 2: Launching Your Legacy",
        description: "Complete guide to launching your memecoin on Blast.fun",
        duration: "4-5 hours",
        lessons: [
          { 
            title: "Course 201: How to Launch Your Coin on Blast in 60 Seconds", 
            completed: false, 
            duration: "60 min",
            type: "interactive",
            hasScreenshot: true,
            screenshotAlt: "Step-by-step token creation process on Blast.fun platform",
            content: "The ultimate guide to creating your token. Covers choosing a name, ticker, meme image, and completing the launch transaction on Blast.fun.",
            resources: ["Launch Tutorial", "Token Creation Checklist"]
          },
          { 
            title: "Course 202: Understanding the Bonding Curve", 
            completed: false, 
            duration: "45 min",
            type: "video",
            hasScreenshot: true,
            screenshotAlt: "Bonding curve mechanics and price progression visualization",
            content: "Learn how Blast.fun's bonding curve works. Understand how buys and sells affect the token price and how your token progresses towards graduation.",
            resources: ["Bonding Curve Calculator", "Price Mechanics Guide"]
          },
          { 
            title: "Course 203: From Launch to Aftermath: The Token Lifecycle", 
            completed: false, 
            duration: "50 min",
            type: "video",
            hasScreenshot: true,
            screenshotAlt: "Token graduation process and DEX integration workflow",
            content: "What happens when a token has \"Graduated\"? Learn how liquidity is automatically created on the Aftermath DEX and your token becomes a freely traded asset.",
            resources: ["Aftermath DEX Guide", "Graduation Process"]
          },
          { 
            title: "Course 204: Marketing Your Meme: The Art of the Raid", 
            completed: false, 
            duration: "75 min",
            type: "interactive",
            hasScreenshot: true,
            screenshotAlt: "Social media marketing strategies across Twitter, Telegram, and other platforms",
            content: "Your coin is live, now what? Learn effective strategies for promoting your token across X (Twitter), Telegram, and other platforms to attract buyers.",
            resources: ["Marketing Playbook", "Social Media Templates"]
          }
        ],
      }
    ],
  },
  advanced: {
    title: "Module 3: Trading & Strategy",
    description: "Master advanced trading techniques and security practices for memecoin trading on Blast.fun.",
    level: "Advanced",
    totalDuration: "5-6 hours",
    modules: [
      {
        title: "Module 3: Trading & Strategy",
        description: "Master trading techniques and security practices for memecoin success",
        duration: "5-6 hours",
        lessons: [
          { 
            title: "Course 301: How to Ape on Blast.fun", 
            completed: false, 
            duration: "60 min",
            type: "interactive",
            hasScreenshot: true,
            screenshotAlt: "Step-by-step trading interface tutorial showing buy and sell operations",
            content: "A step-by-step tutorial on buying and selling tokens directly from the Blast.fun interface. Learn about slippage, price impact, and transaction speed.",
            resources: ["Trading Tutorial", "Slippage Calculator"]
          },
          { 
            title: "Course 302: Analyzing Coins on Blast", 
            completed: false, 
            duration: "75 min",
            type: "video",
            hasScreenshot: true,
            screenshotAlt: "Token analysis dashboard showing key metrics and evaluation criteria",
            content: "Learn to evaluate new tokens by analyzing their graduation progress, the number of holders, the creator's allocation, and the live trade feed.",
            resources: ["Analysis Framework", "Token Metrics Guide"]
          },
          { 
            title: "Course 303: Spotting Rugs & Staying Safe on Sui", 
            completed: false, 
            duration: "90 min",
            type: "interactive",
            hasScreenshot: true,
            screenshotAlt: "Security analysis tools showing red flags and safety indicators",
            content: "A security masterclass. Learn how to check a creator's history on-chain, understand token authorities on Sui, and avoid common pitfalls.",
            resources: ["Security Checklist", "On-chain Analysis Tools"]
          },
          { 
            title: "Course 304: Advanced Trading: Sniping & Timing", 
            completed: false, 
            duration: "105 min",
            type: "video",
            hasScreenshot: true,
            screenshotAlt: "Advanced trading strategies and timing analysis interface",
            content: "For experienced traders. Discusses strategies for getting into promising launches early and techniques for monitoring on-chain data for an edge.",
            resources: ["Sniping Tools", "On-chain Monitoring Dashboard"]
          }
        ],
      }
    ],
  },
}

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '');