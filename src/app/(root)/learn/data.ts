/**
 * Blast Academy curriculum data structure
 * TODO: Replace with database integration in production
 */

export type LessonType = 'video' | 'reading' | 'interactive' | 'quiz'

export interface Lesson {
  readonly title: string
  readonly completed: boolean
  readonly content: string
  readonly duration?: string
  readonly type?: LessonType
  readonly hasScreenshot?: boolean
  readonly screenshotAlt?: string
  readonly resources?: readonly string[]
}

export interface Module {
  readonly title: string
  readonly description: string
  readonly duration: string
  readonly lessons: readonly Lesson[]
}

export interface Course {
  readonly title: string
  readonly description: string
  readonly level: string
  readonly totalDuration: string
  readonly modules: readonly Module[]
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
            duration: "45 min",
            type: "reading",
            hasScreenshot: true,
            screenshotAlt: "Overview of the Blast ecosystem and Sui blockchain integration",
            content: `<h2>Welcome to the Sui Meme Economy</h2>

<p>The memecoin revolution has found its perfect home on Sui, and Blast.fun stands as the vibrant epicenter of this explosive ecosystem. But what makes this combination so powerful, and why are creators and traders flocking to build the next generation of meme culture here?</p>

<div class="lesson-image">
  <img src="/images/blast-academy/module1/Pos1.png" alt="Blast.fun homepage showing active memecoins and trading volume" />
  <p class="image-caption">Blast.fun homepage showcasing the vibrant memecoin ecosystem</p>
</div>

<h3>What Makes Blast.fun Special</h3>

<p>Blast.fun is a dynamic memecoin launchpad and SocialFi platform built on the Sui blockchain, designed as a complete ecosystem for creators, traders, and communities to launch, discover, trade, and engage with meme coins in a hype-driven environment.</p>

<p>Unlike traditional launchpads that focus purely on technical token deployment, Blast.fun creates an entire <strong>social experience</strong> around memecoin culture. Every launch becomes a community event, every trade tells a story, and every creator builds a following.</p>

<h3>The Memez.gg Integration</h3>

<p>Integrated with the powerful Memez.gg framework, Blast.fun enables users to customize and deploy memecoins with advanced features that were previously only available to sophisticated developers:</p>

<ul>
<li><strong>Adjustable token supply</strong> - Fine-tune your economics</li>
<li><strong>Identity customization</strong> - Show your face or stay anonymous</li>
<li><strong>Token upgrade paths</strong> - Evolve your project over time</li>
<li><strong>Community governance tools</strong> - Let holders shape the future</li>
</ul>

<div class="lesson-image">
  <img src="/images/blast-academy/module1/Pos2.png" alt="Token creation interface showing customization options" />
  <p class="image-caption">Advanced token customization options powered by Memez.gg framework</p>
</div>

<h3>The Economics That Drive Success</h3>

<p>At the heart of Blast.fun's success is its innovative economic model. The platform's community-centric approach introduces <strong>bonding curves</strong> for smooth price discovery and automated liquidity migration to larger DEX pools when tokens "graduate."</p>

<p>The fee structure is designed to sustain long-term growth:</p>

<ul>
<li><strong>1.2% total swap fees</strong> - Split strategically for ecosystem health</li>
<li><strong>85% for development and buybacks</strong> - Ensuring platform evolution</li>
<li><strong>15% for creators</strong> - Rewarding innovation and content</li>
</ul>

<p>This creates a virtuous cycle where successful tokens generate revenue that improves the platform for everyone, while creators are directly incentivized to build engaging, valuable projects.</p>

<h3>Continuous Evolution</h3>

<p>The platform has evolved rapidly with updates that matter to real users:</p>

<ul>
<li><strong>Mobile optimization</strong> - Trade anywhere, anytime</li>
<li><strong>PNL cards</strong> - Track your performance with pride</li>
<li><strong>Portfolio tracking</strong> - Comprehensive position management</li>
<li><strong>Enhanced token discovery</strong> - Find the next big thing faster</li>
</ul>

<p>These updates create a smooth, professional experience that welcomes both newcomers taking their first steps into DeFi and experienced traders managing complex portfolios.</p>

<div class="lesson-image">
  <img src="/images/blast-academy/module1/Pos3.png" alt="Mobile interface showing portfolio tracking and PNL cards" />
  <p class="image-caption">Mobile-optimized interface with comprehensive portfolio tracking</p>
</div>

<h3>The Power of Strategic Partnerships</h3>

<p>Within this thriving ecosystem, <strong>Nexa</strong> acts as a key trading and data integration partner, powering real-time market insights and liquidity aggregation for efficient memecoin trading — both pre- and post-bonding.</p>

<p>The collaboration between Blast.fun, Nexa, and other partners like <strong>GiveRep</strong> and <strong>Bluefinapp</strong> creates powerful synergies:</p>

<ul>
<li><strong>Nexa</strong> provides advanced trading infrastructure and market data</li>
<li><strong>GiveRep</strong> enhances the social reputation layer</li>
<li><strong>Bluefinapp</strong> extends trading capabilities</li>
</ul>

<h3>Revenue Sharing That Works</h3>

<p>A portion of Blast.fun's fees (including 5% on migrations and allocations) flows to partners like Nexa to support their trading infrastructure. This isn't just fee-sharing—it's ecosystem building.</p>

<p>Meanwhile, GiveRep enhances the social reputation layer by tracking crucial metrics:</p>

<ul>
<li><strong>Trusted followers</strong> - Quality over quantity</li>
<li><strong>Engagement rates</strong> - Real community building</li>
<li><strong>Creator credibility scores</strong> - Reputation-based discovery</li>
</ul>

<div class="lesson-image">
  <img src="/images/blast-academy/module1/Pos4.png" alt="GiveRep reputation dashboard showing creator metrics" />
  <p class="image-caption">GiveRep social reputation system with creator credibility metrics</p>
</div>

<h3>The Retention Revolution</h3>

<p>Together, this interconnected ecosystem drives unprecedented user retention through:</p>

<ul>
<li><strong>Reputation-based incentives</strong> - Build your brand, earn rewards</li>
<li><strong>Cross-project rewards</strong> - Success in one area benefits others</li>
<li><strong>Sui ecosystem airdrops</strong> - Platform activity earns broader rewards</li>
</ul>

<p>This creates a flywheel effect where engagement breeds more engagement, and success compounds across the entire ecosystem.</p>

<h3>Your Gateway to the Future</h3>

<p>Blast.fun has positioned itself as the vibrant hub of the Sui meme economy, where trading via Nexa and reputation via GiveRep amplify every creator's reach and impact.</p>

<p>Whether you're here to launch the next viral memecoin, discover hidden gems before they explode, or simply be part of the most exciting corner of the Sui ecosystem, you're joining a community that's redefining what's possible in the world of memecoins.</p>

<div class="lesson-image">
  <img src="/images/blast-academy/module1/Pos5.png" alt="Ecosystem diagram showing Blast.fun at center connected to Nexa, GiveRep, and other partners" />
  <p class="image-caption">Complete ecosystem overview showing interconnected partnerships and data flow</p>
</div>

<p>Ready to dive deeper? Let's explore how to navigate the Blast.fun interface and start your journey in the next lesson.</p>`,
            resources: ["Sui Documentation", "Blast.fun Platform Guide", "Memez.gg Framework", "Nexa Trading Tools"]
          },
          { 
            title: "Course 102: Navigating the Blast.fun Interface", 
            completed: false, 
            duration: "45 min",
            type: "interactive",
            hasScreenshot: true,
            screenshotAlt: "Guided tour of the Blast.fun dashboard showing key features",
            content: `<h2>Mastering the Blast.fun Interface</h2>

<p>Blast.fun delivers an intuitive, cyberpunk-inspired interface that streamlines the entire memecoin lifecycle — from discovery to launch to trading. Designed for both novice and experienced users, it combines seamless navigation with real-time market intelligence, ensuring every interaction feels alive and responsive.</p>

<div class="image-placeholder">
  <p><em>[Image: Blast.fun main interface showing the three-column discovery layout]</em></p>
</div>

<h3>Discover: The Heart of Token Exploration</h3>

<p>The Discover interface functions as a command center for memecoin exploration, built around a dynamic three-column layout that organizes tokens by lifecycle stage:</p>

<ul>
<li><strong>Newly Created</strong> - Fresh launches updated every 10 seconds, ensuring you catch emerging opportunities instantly</li>
<li><strong>Near Graduation</strong> - Tokens nearing bonding completion, visualized with vibrant pink progress indicators</li>
<li><strong>Graduated Complete</strong> - Successfully bonded tokens now trading in major DEX pools</li>
</ul>

<p>Each token card operates as a data terminal, showcasing critical stats such as market cap, 24h volume, holder count, and creator info. Color-coded progress rings (blue for new, pink for near-graduation, gold for completed) and protection badges reveal security layers and social verification at a glance.</p>

<div class="image-placeholder">
  <p><em>[Image: Token card breakdown showing all the key data points and visual indicators]</em></p>
</div>

<h3>Advanced Filtering & Discovery</h3>

<p>A precision filtering system allows granular control over discovery, supporting filters for token status, volume, liquidity, audits, and social indicators. Preferences persist across sessions, preserving each user's personalized exploration workflow.</p>

<h3>Launch: Creator-Centric Token Deployment</h3>

<p>The Launch interface guides creators through a streamlined three-step authentication flow — wallet connection, Twitter verification, and full token setup. This ensures verified identity while protecting platform integrity.</p>

<p><strong>Creators enjoy both simplicity and control:</strong></p>

<ul>
<li>Basic setup includes validated name, symbol, and description fields</li>
<li>Drag-and-drop image uploads support files, clipboard pastes, or URL imports</li>
<li>Social integrations (Twitter, Telegram, website) foster immediate community connection</li>
</ul>

<div class="image-placeholder">
  <p><em>[Image: Token creation form showing the intuitive setup process]</em></p>
</div>

<h3>Advanced Protection Tools</h3>

<p>Advanced protection tools distinguish Blast.fun from basic launchpads. Creators can enable:</p>

<ul>
<li><strong>Anti-sniper protection</strong> - Prevent automated buying attacks</li>
<li><strong>Twitter-authenticated buyers</strong> - Verify real users only</li>
<li><strong>Maximum wallet holdings</strong> - Prevent whale accumulation</li>
<li><strong>Progressive burn taxes</strong> - Tied to bonding progress for fair distribution</li>
</ul>

<p>The live preview sidebar mirrors how tokens appear post-launch, complete with badges and verification indicators — delivering confidence before deployment.</p>

<h3>Unified Navigation & Real-Time Integration</h3>

<p>Navigation is built around contextual accessibility. A persistent header ticker delivers real-time trade updates, while the main menu transitions fluidly across Discover, Launch, Leaderboard, and Learn sections.</p>

<p>On mobile, a fixed bottom navigation bar ensures quick access to key functions, supported by global search with 500ms debounced results across token names, symbols, and IDs.</p>

<div class="image-placeholder">
  <p><em>[Image: Mobile interface showing the bottom navigation and search functionality]</em></p>
</div>

<h3>Real-Time Market Intelligence</h3>

<p>Blast.fun's real-time architecture keeps users fully synced with the market:</p>

<ul>
<li>Animated token cards pulse during live trades</li>
<li>Bonding progress rings update dynamically</li>
<li>The trade ticker continuously streams ecosystem activity</li>
<li>Social data is fully embedded — verified Twitter handles, protection statuses, and active community links</li>
</ul>

<h3>Enhanced User Experience</h3>

<p>Optimized for mobile and desktop, the platform's cyberpunk aesthetic balances high information density with clarity and immersion. Integrated portfolio tracking keeps users aware of their holdings directly within Discover, while quick-buy functionality enables instant trading from token cards — merging discovery and execution into one fluid process.</p>

<div class="image-placeholder">
  <p><em>[Image: Portfolio integration showing holdings within the main interface]</em></p>
</div>

<p>This synthesis of real-time data, UX design, and community integration positions Blast.fun as the premier hub for memecoin creation, trading, and engagement on the Sui blockchain.</p>

<p>Ready to connect your wallet and start exploring? Let's dive into the technical setup in the next lesson.</p>`,
            resources: ["Interface Tutorial", "Feature Guide", "Mobile App Guide", "Navigation Shortcuts"]
          },
          { 
            title: "Course 103: Account Setup - Wallet & Social Integration", 
            completed: false, 
            duration: "40 min",
            type: "interactive",
            hasScreenshot: true,
            screenshotAlt: "Complete account setup showing wallet connection and social verification process",
            content: `<h2>Complete Account Setup for Blast.fun</h2>

<p>Getting started on Blast.fun requires a dual-layer setup that combines blockchain wallet connectivity with social identity verification. This comprehensive approach ensures platform security while enabling full access to trading, launching, and community features.</p>

<div class="image-placeholder">
  <p><em>[Image: Blast.fun account setup flow showing wallet connection and social verification steps]</em></p>
</div>

<h3>Step 1: Wallet Connection & Setup</h3>

<p>Your Sui wallet serves as your primary identity and treasury on Blast.fun. The platform supports multiple wallet options, each optimized for different user preferences:</p>

<p><strong>Supported Sui Wallets:</strong></p>

<ul>
<li><strong>Suiet Wallet</strong> - The most popular choice with excellent mobile support and DeFi integration</li>
<li><strong>Surf Wallet</strong> - Browser-native wallet with enhanced security features</li>
<li><strong>Martian Wallet</strong> - Multi-chain wallet with advanced portfolio tracking</li>
<li><strong>Sui Wallet (Official)</strong> - Direct from the Sui Foundation with core protocol support</li>
</ul>

<div class="image-placeholder">
  <p><em>[Image: Wallet selection interface showing all supported wallet options with their logos]</em></p>
</div>

<h3>Setting Up Your Sui Wallet</h3>

<p>If you're new to Sui, here's how to get started:</p>

<p><strong>For Suiet Wallet (Recommended):</strong></p>

<ol>
<li>Install the Suiet browser extension or mobile app</li>
<li>Create a new wallet or import an existing seed phrase</li>
<li>Secure your seed phrase in a safe location</li>
<li>Fund your wallet with SUI tokens for gas fees</li>
</ol>

<p>The setup process takes just a few minutes, and Suiet's intuitive interface makes it perfect for both beginners and experienced users.</p>

<h3>Connecting to Blast.fun</h3>

<p>Once your wallet is ready, connecting to Blast.fun is seamless:</p>

<ol>
<li>Visit the Blast.fun platform</li>
<li>Click "Connect Wallet" in the top-right corner</li>
<li>Select your preferred wallet from the list</li>
<li>Approve the connection request in your wallet</li>
<li>Confirm the connection on Blast.fun</li>
</ol>

<div class="image-placeholder">
  <p><em>[Image: Wallet connection flow showing the approval process and confirmation screens]</em></p>
</div>

<h3>Understanding Gas Fees on Sui</h3>

<p>Sui's efficient architecture keeps gas fees extremely low, typically costing fractions of a penny per transaction. However, maintaining a small SUI balance is essential for:</p>

<ul>
<li><strong>Token trading</strong> - Buying and selling memecoins</li>
<li><strong>Token launches</strong> - Deploying new projects</li>
<li><strong>Social interactions</strong> - On-chain reputation building</li>
<li><strong>Portfolio management</strong> - Position adjustments and transfers</li>
</ul>

<p><strong>Recommended SUI Balance:</strong> Keep 1-5 SUI in your wallet for regular activity. This provides hundreds of transactions worth of gas fees.</p>

<h3>Step 2: Social Account Integration</h3>

<p>Blast.fun's social verification system creates a trust layer that enhances security and enables advanced features. Twitter (X) integration is currently the primary social verification method.</p>

<div class="image-placeholder">
  <p><em>[Image: Twitter verification interface showing the OAuth connection process]</em></p>
</div>

<h3>Twitter Verification Process</h3>

<p>Connecting your Twitter account unlocks key platform features:</p>

<ol>
<li>Click "Connect X" after wallet connection</li>
<li>Authorize Blast.fun to access your Twitter profile</li>
<li>Confirm your Twitter handle and profile information</li>
<li>Complete the verification process</li>
</ol>

<p><strong>Benefits of Twitter Verification:</strong></p>

<ul>
<li><strong>Token launching privileges</strong> - Required for creating new tokens</li>
<li><strong>Enhanced trading features</strong> - Access to protected token sales</li>
<li><strong>Social reputation building</strong> - Integration with GiveRep scoring</li>
<li><strong>Community features</strong> - Creator profiles and follower tracking</li>
<li><strong>Reduced trading restrictions</strong> - Access to Twitter-gated token purchases</li>
</ul>

<h3>Account Security & Best Practices</h3>

<p>Maintaining account security requires attention to both wallet and social components:</p>

<p><strong>Wallet Security:</strong></p>

<ul>
<li>Never share your seed phrase with anyone</li>
<li>Use hardware wallets for large holdings</li>
<li>Regularly check wallet permissions and revoke unused authorizations</li>
<li>Keep your wallet software updated</li>
</ul>

<div class="image-placeholder">
  <p><em>[Image: Security checklist showing wallet protection and social account safety measures]</em></p>
</div>

<p><strong>Social Account Security:</strong></p>

<ul>
<li>Enable two-factor authentication on your Twitter account</li>
<li>Use strong, unique passwords for all social accounts</li>
<li>Regularly review connected applications in your Twitter settings</li>
<li>Be cautious of phishing attempts targeting your social credentials</li>
</ul>

<h3>Troubleshooting Common Setup Issues</h3>

<p><strong>Wallet Connection Problems:</strong></p>

<ul>
<li>Clear browser cache and cookies</li>
<li>Disable conflicting browser extensions</li>
<li>Try connecting in an incognito window</li>
<li>Ensure your wallet has sufficient SUI for gas</li>
</ul>

<p><strong>Social Verification Issues:</strong></p>

<ul>
<li>Check that your Twitter account is in good standing</li>
<li>Verify that you've authorized the correct permissions</li>
<li>Try disconnecting and reconnecting your social account</li>
<li>Ensure your Twitter profile is public during verification</li>
</ul>

<div class="image-placeholder">
  <p><em>[Image: Troubleshooting guide showing common error messages and solutions]</em></p>
</div>

<h3>Advanced Account Features</h3>

<p>Once your account is fully set up, you can access advanced features:</p>

<ul>
<li><strong>Portfolio tracking</strong> - Real-time position monitoring across all holdings</li>
<li><strong>Creator profiles</strong> - Build your reputation as a token launcher</li>
<li><strong>Social reputation scoring</strong> - Earn credibility through GiveRep integration</li>
<li><strong>Referral systems</strong> - Earn rewards for bringing new users to the platform</li>
</ul>

<h3>Getting SUI Tokens</h3>

<p>To fund your wallet, you can acquire SUI through:</p>

<ul>
<li><strong>Centralized exchanges</strong> - Binance, OKX, Bybit, and others</li>
<li><strong>Decentralized exchanges</strong> - Aftermath, Turbos, Cetus</li>
<li><strong>Cross-chain bridges</strong> - From Ethereum, BSC, or other networks</li>
<li><strong>Fiat on-ramps</strong> - Direct purchase with credit/debit cards</li>
</ul>

<div class="image-placeholder">
  <p><em>[Image: SUI acquisition options showing different exchanges and on-ramp services]</em></p>
</div>

<p>With your wallet connected, social accounts verified, and SUI ready for gas fees, you're fully prepared to explore everything Blast.fun has to offer. The next module will dive into the practical aspects of token launching and creation.</p>`,
            resources: ["Wallet Setup Guide", "Gas Fee Calculator", "Twitter Verification Guide", "Security Best Practices", "SUI Token Acquisition Guide"]
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

/**
 * Converts text to URL-friendly slug
 * @param text - The text to slugify
 * @returns URL-safe slug string
 */
export const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')