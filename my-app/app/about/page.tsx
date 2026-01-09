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
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-5xl font-black tracking-tight sm:text-6xl">About Me</h1>
          <p className="text-xl text-white/70">Designer, engineer, and maker</p>
        </div>

        {/* Main content */}
        <div className="space-y-16">
          {/* Who I am */}
          <section>
            <h2 className="mb-6 text-3xl font-bold">Who I Am</h2>
            <div className="space-y-4 text-lg leading-relaxed text-white/80">
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
            <h2 className="mb-6 text-3xl font-bold">Outside of Work</h2>
            <p className="mb-8 text-lg leading-relaxed text-white/80">
              Outside of school, you'll find me in the sky. I am in the process of getting my pilot's license and enjoy
              spending the weekend accumulating flight hours. Growing up in the country made me appreciate the outdoors
              and I spend a lot of my free time exploring trails on my dirt bike, or fishing. I feel that my hobbies
              require focus, responsibility, and discipline.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Aviation */}
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/about-photography.jpg"
                    alt="Aviation - getting pilot's license"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Aviation</h3>
                  <p className="text-white/70">
                    Currently working towards my pilot's license, spending weekends accumulating flight hours and
                    exploring the skies.
                  </p>
                </div>
              </div>

              {/* Dirt Biking */}
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/about-cycling.jpg"
                    alt="Dirt biking and trail exploration"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Dirt Biking</h3>
                  <p className="text-white/70">
                    Exploring trails on my dirt bike, embracing the outdoors and the thrill of off-road adventures.
                  </p>
                </div>
              </div>

              {/* Fishing */}
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/about-reading.jpg"
                    alt="Fishing in nature"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Fishing</h3>
                  <p className="text-white/70">
                    Finding peace on the water, enjoying the patience and focus that fishing brings.
                  </p>
                </div>
              </div>

              {/* Building & Tinkering */}
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/about-robotics.jpg"
                    alt="Building and fabrication projects"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Building & Fabrication</h3>
                  <p className="text-white/70">
                    From welding custom frames to 3D printing parts, I love bringing ideas to life with my hands.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Work Philosophy */}
          <section className="rounded-2xl border border-white/10 bg-neutral-900/60 p-8">
            <h2 className="mb-6 text-3xl font-bold">My Approach</h2>
            <div className="space-y-4 text-lg leading-relaxed text-white/80">
              <p>
                I believe in shipping often and iterating based on real feedback. The best designs come from
                understanding users deeply and testing assumptions early.
              </p>
              <p>
                I'm drawn to interdisciplinary work—projects where mechanical constraints inform digital interfaces, or
                where software enables new physical capabilities. That's where the most interesting problems live.
              </p>
              <p>
                Above all, I value collaboration and clear communication. Great products are built by teams that can
                articulate their vision and iterate together.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">Let's Work Together</h2>
            <p className="mb-6 text-lg text-white/70">
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

