"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Github, ExternalLink, GitBranch, Activity } from "lucide-react";
import portfolioConfig from "@/lib/portfolio.config";

// Get projects from config
const getProjects = () => {
  const projects = portfolioConfig.projects || [];
  return projects.slice(0, 5).map((project, index) => ({
    id: index + 1,
    name: project.title || "Untitled Project",
    description: project.description || "",
    progress:
      project.status === "shipped"
        ? 100
        : project.status === "building"
        ? 75
        : 50,
    lastUpdated: project.year || new Date().getFullYear().toString(),
    url: project.url || project.homepage || "#",
    branch: "main",
    commits: project.stars || Math.floor(Math.random() * 50) + 10,
  }));
};

// Get username from config
const getUsername = () => {
  const github = portfolioConfig.socialLinks?.github || "";
  return (
    github.split("/").pop() ||
    portfolioConfig.name?.toLowerCase().replace(/\s+/g, "") ||
    "developer"
  );
};

// Generate recent activity from projects
const getRecentActivity = () => {
  const projects = portfolioConfig.projects || [];
  return projects.slice(0, 4).map((project, index) => ({
    type: index % 2 === 0 ? "commit" : "branch",
    project: project.title || "Project",
    message:
      index % 2 === 0
        ? `Update ${project.title}`
        : `Working on ${project.title}`,
    time: `${index + 1} day${index > 0 ? "s" : ""} ago`,
  }));
};

export function WorkbenchPageContent() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const wipItems = getProjects();
  const username = getUsername();
  const recentActivity = getRecentActivity();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Don't render if no projects
  if (wipItems.length === 0) {
    return (
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 sm:mb-16 space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
              Work in Progress
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Workbench
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              No active projects yet. Check back later!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div
          className={cn(
            "mb-12 sm:mb-16 space-y-4 opacity-0",
            isVisible && "animate-fade-in-up"
          )}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Work in Progress
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Workbench
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Active experiments and prototypes. Things that are being built,
            broken, and rebuilt. Real-time progress on ongoing projects.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Terminal */}
          <div className="lg:col-span-2">
            <div
              className={cn(
                "rounded-xl border border-border bg-card/40 glass backdrop-blur-sm overflow-hidden hover-lift opacity-0",
                isVisible && "animate-scale-in stagger-2"
              )}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-3 border-b border-border/50 bg-secondary/40 px-4 sm:px-5 py-3.5 sm:py-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive/60 transition-colors hover:bg-destructive cursor-pointer" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60 transition-colors hover:bg-yellow-500 cursor-pointer" />
                  <div className="h-3 w-3 rounded-full bg-primary/60 transition-colors hover:bg-primary cursor-pointer" />
                </div>
                <span className="ml-4 font-mono text-xs text-muted-foreground truncate">
                  ~/{username}/active
                </span>
                <div className="ml-auto flex items-center gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-xs">live</span>
                </div>
              </div>

              <div className="divide-y divide-border/30">
                {wipItems.map((item, index) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group flex flex-col gap-4 p-5 sm:p-6 transition-all duration-300 sm:flex-row sm:items-center sm:justify-between opacity-0",
                      isVisible && "animate-fade-in",
                      hoveredItem === item.id && "bg-secondary/30"
                    )}
                    style={{ animationDelay: `${index * 80 + 300}ms` }}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="flex-1 space-y-2 min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="text-primary font-mono text-sm shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                          $
                        </span>
                        <h4 className="font-mono text-sm font-medium tracking-tight transition-colors group-hover:text-gradient truncate">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Github className="h-3.5 w-3.5 text-muted-foreground" />
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </div>
                      </div>
                      <p className="pl-6 text-xs text-muted-foreground line-clamp-2 sm:line-clamp-1">
                        {item.description}
                      </p>
                      <div className="pl-6 flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <GitBranch className="h-3 w-3" />
                          {item.branch}
                        </span>
                        <span>{item.commits} stars</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-6 pl-6 sm:pl-0 sm:justify-end">
                      <div className="flex items-center gap-3 flex-1 sm:flex-none">
                        <div className="h-2 w-full sm:w-28 overflow-hidden rounded-full bg-secondary/80 relative">
                          <div
                            className={cn(
                              "h-full rounded-full transition-all duration-700 ease-out",
                              item.progress >= 80
                                ? "bg-primary"
                                : item.progress >= 50
                                ? "bg-yellow-500"
                                : "bg-orange-500"
                            )}
                            style={{ width: `${item.progress}%` }}
                          />
                          <div className="absolute inset-0 animate-shimmer opacity-30" />
                        </div>
                        <span
                          className={cn(
                            "font-mono text-xs w-10 shrink-0 transition-colors",
                            item.progress >= 80
                              ? "text-primary"
                              : "text-muted-foreground"
                          )}
                        >
                          {item.progress}%
                        </span>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground shrink-0">
                        {item.lastUpdated}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="border-t border-border/50 bg-secondary/30 px-4 sm:px-5 py-4">
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span className="text-primary">❯</span>
                  <span className="typing-cursor truncate">
                    git status --all
                  </span>
                  <span className="ml-auto text-primary/50 hidden sm:block">
                    press enter to run
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <div
              className={cn(
                "rounded-xl border border-border bg-card/40 glass p-5 opacity-0",
                isVisible && "animate-fade-in-up stagger-3"
              )}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-secondary/30">
                  <p className="text-2xl font-bold text-foreground">
                    {wipItems.length}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    Active
                  </p>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary/30">
                  <p className="text-2xl font-bold text-primary">
                    {Math.round(
                      wipItems.reduce((a, b) => a + b.progress, 0) /
                        wipItems.length
                    )}
                    %
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    Avg Progress
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div
              className={cn(
                "rounded-xl border border-border bg-card/40 glass p-5 opacity-0",
                isVisible && "animate-fade-in-up stagger-4"
              )}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                <Activity className="h-3.5 w-3.5" />
                Recent Activity
              </h3>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 text-xs">
                    <span
                      className={cn(
                        "shrink-0 w-1.5 h-1.5 rounded-full mt-1.5",
                        activity.type === "commit"
                          ? "bg-primary"
                          : "bg-yellow-500"
                      )}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-foreground truncate">
                        {activity.message}
                      </p>
                      <p className="text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
