import { Code2, Layers, FileText, Zap, Bot, Globe } from "lucide-react";
import { portfolioConfig } from "@/lib/portfolio.config";

export default function IntroductionPage() {
  const name = portfolioConfig.name || "Developer";
  const firstName = name.split(" ")[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
                About Me
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Where Code Meets{" "}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                  Creativity
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl">
              {portfolioConfig.bio ||
                `Hi, I'm ${firstName}. I'm a developer passionate about building great software and sharing my journey along the way.`}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded border border-border/50 bg-card/50 p-6 sm:p-10 backdrop-blur-sm space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
                About Me
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                A Developer&apos;s Journey
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                Welcome to my digital portfolio — a living, breathing showcase
                of continuous learning and experimentation. Built with passion,
                this space represents my philosophy that the best way to grow is
                to build, share, and iterate.
              </p>

              <p>
                Whether you&apos;re exploring my projects, diving into my
                technical experiments, or looking for examples of modern
                development patterns, this portfolio offers a window into my
                work at various stages — from initial experiments to
                production-ready solutions.
              </p>

              <p>
                I believe in building in public and sharing knowledge with the
                developer community. Every project and every line of code is
                designed to solve real problems and inspire others along the
                way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
              What I Do
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Skills & Expertise
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Open Source",
                description:
                  "Contributing to and creating open source projects. Transparent development with code available on GitHub.",
              },
              {
                icon: Layers,
                title: "Full Stack Development",
                description:
                  "Building end-to-end applications with modern technologies from frontend to backend and everything in between.",
              },
              {
                icon: FileText,
                title: "Technical Documentation",
                description:
                  "Writing clear documentation and sharing technical insights from development experiences.",
              },
              {
                icon: Zap,
                title: "Modern Tech Stack",
                description:
                  "Working with cutting-edge technologies including React, Next.js, TypeScript, Node.js, and more.",
              },
              {
                icon: Bot,
                title: "AI Integration",
                description:
                  "Exploring the intersection of AI and web development with practical implementations.",
              },
              {
                icon: Globe,
                title: "Web Performance",
                description:
                  "Optimizing applications for speed, accessibility, and great user experiences.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
