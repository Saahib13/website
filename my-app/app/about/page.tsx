import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Me - Saahib Lall",
  description: "Learn more about Saahib Lall - product designer and engineer",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#e2e8f0' }}>
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm transition-colors hover:opacity-80"
          style={{ color: '#0f172a' }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-5xl font-black tracking-tight sm:text-6xl" style={{ color: '#0f172a' }}>About Me</h1>
          <p className="text-xl" style={{ color: '#1e293b' }}>Designer, engineer, and maker</p>
        </div>

        {/* Main content */}
        <div className="space-y-16">
          {/* Who I am */}
          <section>
            <h2 className="mb-6 text-3xl font-bold" style={{ color: '#0f172a' }}>Who I Am</h2>
            <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#1e293b' }}>
              <p>
                Hi, I'm Saahib Lall — a Mechatronics Engineering student at the University of Waterloo with a passion
                for innovation, problem-solving, and turning ideas into impactful solutions. Growing up in Windsor/Essex
                in a family of engineers, I naturally had a knack for building projects. That curiosity shaped me into a
                critical thinker and hands-on innovator who's always looking for the next challenge.
              </p>
              <p>
                I enjoy using my talents to make meaningful contributions to society and make impacts in my community.
                My goals are to become an entrepreneur so I can bring my ideas to the rest of the world.
              </p>
              <p>I'm constantly seeking opportunities to grow, build, and collaborate. Let's connect.</p>
            </div>
          </section>

          {/* Hobbies grid */}
          <section>
            <h2 className="mb-6 text-3xl font-bold" style={{ color: '#0f172a' }}>Outside of Work</h2>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: '#1e293b' }}>
              Outside of school, you'll find me in the sky. I am in the process of getting my pilot's license and enjoy
              spending the weekend accumulating flight hours. Growing up in the country made me appreciate the outdoors
              and I spend a lot of my free time exploring trails on my dirt bike, or fishing. I feel that my hobbies
              require focus, responsibility, and discipline.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Aviation */}
              <div className="overflow-hidden rounded-2xl border border-neutral-300 shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/about me/about-aviation.png"
                    alt="Aviation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Fishing */}
              <div className="overflow-hidden rounded-2xl border border-neutral-300 shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/about me/about-fishing.png"
                    alt="Fishing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Work Philosophy */}
          <section className="rounded-2xl border border-neutral-300 bg-white/80 shadow-sm p-8">
            <h2 className="mb-6 text-3xl font-bold" style={{ color: '#0f172a' }}>My Approach</h2>
            <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#1e293b' }}>
              <p>
                I believe in shipping often and iterating based on real feedback. The best designs come from
                understanding users deeply and testing assumptions early.
              </p>
              <p>
                I'm drawn to interdisciplinary work projects where mechanical constraints inform digital interfaces, or
                where software enables new physical capabilities. That's where the most interesting problems live.
              </p>
              <p>
                Above all, I value collaboration and clear communication. Great products are built by teams that can
                articulate their vision and iterate together.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-neutral-300 bg-gradient-to-br from-slate-200 to-slate-100 shadow-sm p-8 text-center">
            <h2 className="mb-4 text-3xl font-bold" style={{ color: '#0f172a' }}>Let's Work Together</h2>
            <p className="mb-6 text-lg" style={{ color: '#1e293b' }}>
              I'm currently open to new opportunities. If you're building something interesting, let's talk.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">
                Get in touch
                <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </section>
        </div>
      </div>
    </main>
  )
}

