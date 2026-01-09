import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { notFound } from "next/navigation"

const caseStudies = {
  "brain-battle": {
    title: "Brain Battle",
    subtitle: "AI-Powered Multiplayer Study Platform",
    tags: ["AI", "Full-Stack", "Real-Time", "EdTech"],
    year: "2025",
    role: "Full-Stack Developer",
    duration: "4 months",
    description:
      "Brain Battle is a sophisticated AI-powered multiplayer study platform that transforms learning into an engaging competitive experience. Built with Next.js 15, it features real-time quiz competitions, AI-generated study notes using multi-agent architecture, gamification with XP/leveling systems, and Stripe-powered subscription features. The platform combines modern web technologies with advanced AI capabilities to create an educational experience that scales.",
    challenges: [
      "Implementing real-time multiplayer synchronization for quiz sessions with low latency",
      "Designing a multi-agent AI system for intelligent study note generation from documents",
      "Building a robust anti-cheat system to detect tab switching and maintain competitive integrity",
      "Creating a scalable freemium model that enables teachers to create clans while students join freely",
    ],
    solutions: [
      "Implemented Supabase Realtime subscriptions with presence tracking for live multiplayer updates",
      "Developed a multi-phase AI orchestrator using OpenAI GPT-4 with parallel agent processing for content extraction, complexity analysis, concept organization, and question generation",
      "Built custom React hooks for anti-cheat detection tracking tab switches, window blur, and visibility changes with configurable thresholds",
      "Integrated Stripe subscriptions with tiered features (15 vs 50 documents/month, 4 vs 15 players/room)",
    ],
    results: [
      "95% AI question generation accuracy across multiple education levels",
      "Sub-2-second response times with optimized multi-agent pipelines",
      "Successful freemium model enabling 500 participants per Pro account",
    ],
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "OpenAI GPT-4",
      "Drizzle ORM",
      "Stripe",
      "Tailwind CSS",
      "Framer Motion",
    ],
    images: [
      "/images/project-1.webp",
      "/ai-quiz-generation-interface.jpg",
      "/multiplayer-study-room-dashboard.jpg",
      "/gamification-xp-leveling-system.jpg",
    ],
  },
  dermalens: {
    title: "DermaLens",
    subtitle: "AI-Powered Skincare Analysis Platform",
    tags: ["AI", "Computer Vision", "FastAPI", "Healthcare"],
    year: "2025",
    role: "Full-Stack Developer & AI Engineer",
    duration: "1 week (Hackathon)",
    description:
      "DermaLens is an AI-powered skincare analysis platform built for the Google Cloud AI Accelerate Hackathon. It performs real-time facial scanning using multi-angle capture, computer vision-based skin condition detection with 95% accuracy, and provides personalized skincare recommendations. The system combines Gemini 1.5 Pro with custom CNN models in an ensemble pipeline, uses Elasticsearch for semantic product search across 1000+ items, and delivers dermatology-grade insights in 1-2 seconds.",
    challenges: [
      "Achieving medical-grade accuracy in skin condition detection within a one-week hackathon timeline",
      "Processing multi-angle face scans (18 images per session) with real-time quality checks for lighting and blur",
      "Building semantic product search that matches detected conditions to appropriate skincare ingredients",
      "Deploying a complex AI pipeline with multiple models to Google Cloud Run with reliable performance",
    ],
    solutions: [
      "Developed an ensemble AI pipeline combining custom PyTorch CNN models with Google Gemini 1.5 Pro for weighted scoring and confidence fusion",
      "Implemented MediaStream-based camera capture in Next.js with automatic face region extraction using OpenCV",
      "Integrated Elasticsearch with custom vector embeddings using OpenAI text-embedding-3-small for semantic product matching with multi-criteria filtering",
      "Containerized the entire stack using Docker with FastAPI backend, Next.js frontend, and Elasticsearch in a microservices architecture deployed to Cloud Run",
    ],
    results: [
      "~95% skin condition detection accuracy using ensemble approach",
      "1-2 second response times for complete analysis pipeline",
      "Successfully indexed and semantically searched 1000+ skincare products",
    ],
    techStack: [
      "Next.js 14",
      "FastAPI",
      "Python",
      "Google Gemini 1.5 Pro",
      "PyTorch",
      "OpenCV",
      "Elasticsearch",
      "Supabase",
      "Google Cloud Run",
      "Docker",
      "Tailwind CSS",
    ],
    images: [
      "/images/project-2.webp",
      "/multi-angle-facial-scanning-interface.jpg",
      "/ai-skin-condition-detection-results.jpg",
      "/personalized-skincare-product-recommendations.jpg",
    ],
  },
  "inventory-tracker": {
    title: "Inventory Tracker",
    subtitle: "Web-Based Bin Management System",
    tags: ["Full-Stack", "Manufacturing", "Database", "Operations"],
    year: "2024",
    role: "Full-Stack Developer",
    duration: "3 months",
    description:
      "A comprehensive web-based inventory tracking and bin management system designed for manufacturing shop-floor operations. The system tracks bins end-to-end using unique bin numbers, links them to part numbers, work orders, weights, and locations, and maintains complete historical data for auditing and reporting. Built with a focus on simplicity for operators, it enables weight-based consumption tracking, location-based bin movements, and automatic bin reuse once fully consumed.",
    challenges: [
      "Designing an intuitive interface for shop-floor operators with varying technical skill levels",
      "Implementing weight-based consumption tracking with accurate part count estimation",
      "Maintaining comprehensive historical data while keeping the active bin view performant",
      "Creating a flexible location system that supports vendor-to-vendor transfers and final packing workflows",
    ],
    solutions: [
      "Built a table-driven dashboard with sorting, filtering, and search optimized for quick bin lookup and updates",
      "Developed automatic consumption percentage calculation based on tare weight, initial weight, and current weight measurements",
      "Implemented a dual-table database schema separating active bins from historical movements for optimal query performance",
      "Created a dropdown-based location selection system with batch move support and automatic history logging",
    ],
    results: [
      "Eliminated manual tracking errors and reduced bin location lookup time by 75%",
      "Enabled monthly exportable reports for production tracking and bottleneck analysis",
      "Successfully implemented bin reuse system maintaining full audit trail",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "REST API"],
    images: [
      "/images/project-3.webp",
      "/inventory-bin-tracking-dashboard.jpg",
      "/bin-movement-history-table.jpg",
      "/weight-based-consumption-analytics.jpg",
    ],
  },
  "vision-based-inspection-machine": {
    title: "Vision Based Inspection Machine",
    subtitle: "Automated Quality Control System",
    tags: ["Automation", "Computer Vision", "PLC", "Manufacturing"],
    year: "2024",
    role: "Mechanical Designer & Controls Engineer",
    duration: "6 months",
    description:
      "Designed and built an automated visual inspection system for Formedge to replace manual quality control of fasteners. The system uses KEYENCE CVX-series area-scan cameras with custom backlighting to capture high-contrast silhouette images, measures part dimensions with sub-millimeter accuracy, detects surface defects, and automatically sorts parts using PLC-controlled pneumatic actuators. Achieved 100% defect detection accuracy in production testing and dramatically improved inspection throughput.",
    challenges: [
      "Transitioning from slow, inconsistent manual gauge inspection to automated vision-based quality control",
      "Designing a modular mechanical system that could be quickly reconfigured for different fastener types",
      "Integrating machine vision, PLC logic, pneumatics, and motion control into a reliable production system",
      "Validating system accuracy with real production parts and intentionally defective samples",
    ],
    solutions: [
      "Designed modular mechanical assembly in Fusion 360 including ball feeder, rotating hub, adjustable camera mounts, and pneumatic ejection system",
      "Programmed Unitronics PLC using ladder logic with position sensors and triggers to synchronize camera captures with part positioning",
      "Configured KEYENCE vision system with custom inspection programs for dimensional measurement and defect detection using silhouette analysis",
      "Machined critical components (aluminum camera blocks, mounting rods) using CNC mill and lathe, gaining hands-on fabrication experience",
    ],
    results: [
      "Achieved 100% defect detection accuracy in production testing with 'red rabbit' defective samples",
      "Officially added to Formedge control plans for production quality assurance",
      "Modular design enabled quick reconfiguration, with multiple units planned for full automation",
    ],
    techStack: [
      "Fusion 360",
      "Unitronics PLC",
      "Ladder Logic",
      "KEYENCE CVX Vision System",
      "CNC Machining",
      "Pneumatic Controls",
    ],
    images: [
      "/images/project-4.webp",
      "/automated-vision-inspection-machine-assembly.jpg",
      "/keyence-camera-defect-detection-interface.jpg",
      "/plc-control-system-and-pneumatic-sorting.jpg",
    ],
  },
  "workout-manager": {
    title: "Workout Manager",
    subtitle: "MERN Stack Fitness Tracker",
    tags: ["Full-Stack", "MERN", "REST API", "Web App"],
    year: "2023",
    role: "Full-Stack Developer",
    duration: "2 months",
    description:
      "Workout Buddy is a full-stack MERN application that enables users to create, view, update, and delete workout entries through a RESTful API with global state management. Built with MongoDB for data persistence, Express for the backend API, React with Context API for state management, and Node.js for the runtime, the application demonstrates modern full-stack architecture with MVC pattern, client-side validation, and real-time UI updates without page refresh.",
    challenges: [
      "Implementing global state management in React without external libraries like Redux",
      "Designing a RESTful API with proper HTTP methods, status codes, and error handling",
      "Ensuring real-time UI updates while maintaining data consistency between client and server",
      "Creating a responsive card-based UI with timestamp formatting and CRUD operations",
    ],
    solutions: [
      "Implemented React Context API with useReducer for predictable state updates and global workout state management",
      "Built Express REST API following MVC architecture with Mongoose schemas, controller business logic, and route definitions",
      "Developed custom reducer actions (SET_WORKOUTS, CREATE_WORKOUT, DELETE_WORKOUT) for instant UI updates after API calls",
      "Used date-fns for relative timestamp formatting and designed responsive card layout with CSS",
    ],
    results: [
      "Successfully implemented full CRUD functionality with real-time updates",
      "Clean MVC architecture enabling easy feature extension and testing",
      "Scalable foundation ready for authentication, analytics, and multi-user features",
    ],
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Mongoose", "Context API", "date-fns", "REST API"],
    images: [
      "/images/project-5.webp",
      "/workout-tracker-dashboard-interface.jpg",
      "/workout-entry-form-with-validation.jpg",
      "/workout-history-cards-with-timestamps.jpg",
    ],
  },
  "transfer-system": {
    title: "Transfer System",
    subtitle: "Cold Header Parallel Gripper Redesign",
    tags: ["Mechanical Design", "CAD", "Manufacturing", "Automation"],
    year: "2024",
    role: "Mechanical Designer",
    duration: "2 months",
    description:
      "Redesigned the cam-driven transfer system in Formedge sorting machines to improve changeover speed and precision. The existing scissor-style mechanism required manual cam timing adjustments for different part sizes, leading to trial-and-error setups that risked machine collisions and costly downtime. Proposed and prototyped an electronically controlled parallel gripper design with arc-like jaw motion for greater clearance, tighter tolerances, and tool-free disassembly for streamlined maintenance.",
    challenges: [
      "Eliminating slow, imprecise cam-driven changeovers that required manual timing adjustments",
      "Reducing risk of machine collisions during part size changes and setup",
      "Designing a mechanism with improved clearance and tighter tolerance control",
      "Creating a modular design that could be easily maintained and installed",
    ],
    solutions: [
      "Designed parallel gripper mechanism in Fusion 360 with arc-like jaw motion providing superior part clearance compared to scissor-style design",
      "Incorporated baseplate mounting system for easy installation and two-bolt disassembly for quick maintenance",
      "Fabricated prototype using mild steel and manual milling in the tool room, developing advanced machining skills",
      "Proposed stepper motor and encoder-controlled system for precise electronic positioning",
    ],
    results: [
      "Prototype operated smoothly in hand tests and passed pneumatic functionality testing",
      "Electronic control system proposal approved for future implementation",
      "Design positioned to eliminate trial-and-error setups and reduce downtime",
    ],
    techStack: ["Fusion 360", "Manual Milling", "Pneumatic Systems", "Stepper Motor Control", "Mechanical Fabrication"],
    images: [
      "/images/project-6.webp",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
    ],
  },
  "mini-bike-fabrication": {
    title: "Mini-Bike Fabrication",
    subtitle: "Custom Gas-Powered Motorcycle Build",
    tags: ["Fabrication", "Welding", "CAD", "Mechanical Design"],
    year: "2024",
    role: "Designer & Fabricator",
    duration: "5 months",
    description:
      "Designed and built a custom gas-powered mini bike from scratch, combining CAD modeling, welding, mechanical assembly, and performance tuning. Modeled a custom frame in Fusion 360 using square steel tubing, fabricated the structure with stick welding (first hands-on welding project), repurposed a 208cc Briggs & Stratton engine from a broken power washer with custom mounts, and sourced all components including rear tire, chain, clutch, brake assembly, and throttle. Boosted top speed from 70 km/h to 75 km/h with 3D-printed velocity stack and retrofitted exhaust.",
    challenges: [
      "Designing a structurally sound frame from scratch with no prior welding experience",
      "Adapting a salvaged power washer engine for motorcycle use with custom mounting",
      "Sourcing and integrating components from various suppliers into a cohesive system",
      "Improving performance and achieving higher top speed through airflow optimization",
    ],
    solutions: [
      "Modeled complete frame design in Fusion 360 using square steel tubing for optimal strength-to-weight ratio",
      "Taught myself stick welding, progressing from tack welds to full structural welds on the frame assembly",
      "Fabricated custom engine mounts to adapt the 208cc Briggs & Stratton engine and integrated chain drive, clutch, and brake systems",
      "3D-printed velocity stack to improve air intake and retrofitted exhaust system for better flow, increasing top speed by 5 km/h",
    ],
    results: [
      "Successfully built fully functional mini bike achieving 75 km/h top speed",
      "Bike remains in active use and performs reliably on rough terrain",
      "Gained comprehensive hands-on experience with welding, fabrication, and mechanical assembly",
    ],
    techStack: ["Fusion 360", "Stick Welding", "3D Printing", "Mechanical Assembly", "Engine Tuning"],
    images: [
      "/images/project-7.webp",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
    ],
  },
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const caseStudy = caseStudies[params.id as keyof typeof caseStudies]

  if (!caseStudy) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="gap-2 text-white/70 hover:text-white">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>
          </Button>
        </div>

        {/* Hero section */}
        <div className="mb-12">
          <div className="mb-4 flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-white/10 text-white border-white/20">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="mb-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{caseStudy.title}</h1>
          <p className="text-xl text-white/70 sm:text-2xl">{caseStudy.subtitle}</p>
        </div>

        {/* Project details */}
        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/50">Year</p>
            <p className="text-xl font-bold">{caseStudy.year}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/50">Role</p>
            <p className="text-xl font-bold">{caseStudy.role}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/50">Duration</p>
            <p className="text-xl font-bold">{caseStudy.duration}</p>
          </div>
        </div>

        {/* Hero image */}
        <div className="mb-16 overflow-hidden rounded-3xl border border-white/10">
          <div className="relative aspect-video">
            <Image
              src={caseStudy.images[0] || "/placeholder.svg"}
              alt={caseStudy.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-black">Overview</h2>
          <p className="text-lg leading-relaxed text-white/80">{caseStudy.description}</p>
        </section>

        {/* Tech Stack - New section */}
        {caseStudy.techStack && (
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-black">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-white/20 bg-white/5 px-4 py-2 text-base text-white"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </section>
        )}

        {/* Challenges */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-black">Challenges</h2>
          <ul className="space-y-4">
            {caseStudy.challenges.map((challenge, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-sm font-bold text-red-400">
                  {idx + 1}
                </span>
                <p className="text-lg text-white/80">{challenge}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Solutions */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-black">Solutions</h2>
          <ul className="space-y-4">
            {caseStudy.solutions.map((solution, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20 text-sm font-bold text-green-400">
                  {idx + 1}
                </span>
                <p className="text-lg text-white/80">{solution}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Additional images */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-black">Visual Design</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {caseStudy.images.slice(1).map((image, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl border border-white/10">
                <div className="relative aspect-video">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${caseStudy.title} - Image ${idx + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-black">Results</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {caseStudy.results.map((result, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-lg font-semibold leading-relaxed">{result}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center sm:p-12">
          <h2 className="mb-4 text-3xl font-black">Interested in working together?</h2>
          <p className="mb-6 text-lg text-white/70">Let's discuss how I can help bring your product vision to life.</p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </section>
      </div>
    </main>
  )
}

