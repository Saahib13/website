import Link from "next/link"
import { ArrowLeft, Mail, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="gap-2 text-white/70 hover:text-white">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">Let's work together</h1>
          <p className="text-xl text-white/70 sm:text-2xl">
            I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        {/* Contact options */}
        <div className="mb-16 space-y-4">
          <a
            href="mailto:s5lall@uwaterloo.ca"
            className="group flex items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10 sm:p-8"
          >
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 transition-colors group-hover:bg-white/20">
              <Mail className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h2 className="mb-1 text-xl font-bold">Email</h2>
              <p className="text-white/70">s5lall@uwaterloo.ca</p>
            </div>
            <div className="text-white/50 transition-transform group-hover:translate-x-1">→</div>
          </a>

          <a
            href="https://www.linkedin.com/in/saahib-lall-81671a327/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10 sm:p-8"
          >
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 transition-colors group-hover:bg-white/20">
              <Linkedin className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h2 className="mb-1 text-xl font-bold">LinkedIn</h2>
              <p className="text-white/70">linkedin.com/in/saahib-lall-81671a327</p>
            </div>
            <div className="text-white/50 transition-transform group-hover:translate-x-1">→</div>
          </a>

          <a
            href="https://github.com/Saahib13"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10 sm:p-8"
          >
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 transition-colors group-hover:bg-white/20">
              <Github className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h2 className="mb-1 text-xl font-bold">GitHub</h2>
              <p className="text-white/70">github.com/Saahib13</p>
            </div>
            <div className="text-white/50 transition-transform group-hover:translate-x-1">→</div>
          </a>
        </div>

        {/* Additional info */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
          <h2 className="mb-4 text-2xl font-black">About me</h2>
          <p className="mb-4 leading-relaxed text-white/80">
            I'm a product designer based in New York with over 8 years of experience helping startups and established
            companies create beautiful, user-centered products.
          </p>
          <p className="mb-4 leading-relaxed text-white/80">
            My approach combines strategic thinking with hands-on design skills. I believe great design isn't just about
            aesthetics—it's about solving real problems for real people.
          </p>
          <p className="leading-relaxed text-white/80">
            Currently available for freelance projects and full-time opportunities starting Q2 2025.
          </p>
        </div>
      </div>
    </main>
  )
}

