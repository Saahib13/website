import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"

import ProjectCard from "@/components/project-card"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"

export default function Page() {
  const projects = [
    {
      title: "Brain-Battle",
      subtitle: "AI-powered multiplayer study platform with quiz competitions",
      imageSrc: "/pictures for web/brain battle/Screenshot 2026-01-07 000516.png",
      tags: ["AI", "Full-Stack", "Real-Time"],
      href: "/case-study/brain-battle",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
    },
    {
      title: "DermaLens",
      subtitle: "Computer vision skincare analysis with 95% detection accuracy",
      imageSrc: "/pictures for web/dermalens/Screenshot 2026-01-07 001422.png",
      tags: ["AI", "Computer Vision", "Healthcare"],
      href: "/case-study/dermalens",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#2563eb",
    },
    {
      title: "Inventory Tracker",
      subtitle: "Manufacturing bin management with weight-based tracking",
      imageSrc: "/pictures for web/inventory tracker/Screenshot 2026-01-06 235446.png",
      tags: ["Full-Stack", "Manufacturing", "Database"],
      href: "/case-study/inventory-tracker",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#5bc0be",
    },
    {
      title: "Vision Based Inspection Machine",
      subtitle: "Automated fastener quality control with KEYENCE vision system",
      imageSrc: "/pictures for web/vision based inspection machie/Screenshot 2026-01-06 203846.png",
      tags: ["Automation", "Computer Vision", "PLC"],
      href: "/case-study/vision-based-inspection-machine",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#10b981",
    },
    {
      title: "Workout Manager",
      subtitle: "MERN stack fitness tracker with RESTful API and global state",
      imageSrc: "/pictures for web/mern stack workout buddy/Screenshot 2026-01-07 000951.png",
      tags: ["Full-Stack", "MERN", "REST API"],
      href: "/case-study/workout-manager",
      priority: false,
      gradientFrom: "#1f2937",
      gradientTo: "#8b5cf6",
    },
    {
      title: "Transfer System",
      subtitle: "Parallel gripper redesign for cold header sorting machines",
      imageSrc: "/pictures for web/transfer system/Screenshot 2026-01-06 203655.png",
      tags: ["Mechanical Design", "CAD", "Automation"],
      href: "/case-study/transfer-system",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#10b981",
    },
    {
      title: "Mini-Bike Fabrication",
      subtitle: "Custom gas-powered motorcycle built from scratch with welding",
      imageSrc: "/pictures for web/minibike/Screenshot 2026-01-06 203528.png",
      tags: ["Fabrication", "Welding", "CAD"],
      href: "/case-study/mini-bike-fabrication",
      priority: false,
      gradientFrom: "#1f2937",
      gradientTo: "#f59e0b",
    },
  ]

  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT: sticky and full height, with scrollable content */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)] lg:overflow-y-auto">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
              staggerChildren
            >
              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                <DotGridShader />
              </div>
              <div>
                <div className="mb-8 flex items-center gap-2">
                  <div className="text-2xl font-extrabold tracking-tight">Saahib Lall</div>
                  <div className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                </div>

                <AnimatedHeading
                  className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
                  lines={["Product design", "and engineering,", "always learning"]}
                />

                <p className="mt-4 max-w-[42ch] text-lg text-white/70">
                  Saahib is a product designer and engineer working across software and mechatronics. He enjoys turning
                  ideas into practical products and is open to roles at teams building real-world systems.
                </p>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="/contact">
                      Hire me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/20 bg-white/5 hover:bg-white/10"
                  >
                    <Link href="/about">About me</Link>
                  </Button>
                </div>

                {/* Trusted by */}
                <div className="mt-10">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">COMPANIES I'VE WORKED WITH</p>
                  <ul className="grid grid-cols-1 gap-x-6 gap-y-3 text-2xl font-black text-white/25 sm:grid-cols-2">
                    <li>Formedge Inc</li>
                    <li>TRQSS</li>
                    <li>INVYZN</li>
                    <li>WARG</li>
                  </ul>
                </div>
              </div>
            </RevealOnView>
          </aside>

          {/* RIGHT: simplified, no internal card or horizontal carousel */}
          <div className="space-y-4">
            {projects.map((p, idx) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                imageSrc={p.imageSrc}
                tags={p.tags}
                href={p.href}
                priority={p.priority}
                gradientFrom={p.gradientFrom}
                gradientTo={p.gradientTo}
                imageContainerClassName="lg:h-full"
                containerClassName="lg:h-[calc(100svh-2rem)]"
                revealDelay={idx * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
