import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
)

export function FeaturedContent() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Featured Blog Post */}
          <Card className="bg-card/50 border-border shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-card/70 rounded-2xl">
            <CardHeader className="pb-4">
              <div className="text-sm text-muted-foreground mb-2">Featured Post</div>
              <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                Building a Second Brain in the Digital Age
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base leading-relaxed">
                Exploring how digital tools can augment our thinking and creativity. A deep dive into personal
                knowledge management systems and the art of connecting ideas across domains.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Link
                href="/blog/building-second-brain"
                className="inline-flex items-center text-foreground hover:text-muted-foreground font-medium transition-colors group"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </CardContent>
          </Card>

          {/* Featured Project */}
          <Card className="bg-card/50 border-border shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-card/70 rounded-2xl">
            <CardHeader className="pb-4">
              <div className="text-sm text-muted-foreground mb-2">Featured Project</div>
              <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-3">JAMC</CardTitle>
              <CardDescription className="text-muted-foreground text-base leading-relaxed">
                An experimental Q&A platform integrating with an LMS to bridge the gap between student questions and teachers. Built with Next.js.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border text-muted-foreground hover:bg-accent hover:text-foreground rounded-lg"
                >
                  <GitHubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border text-muted-foreground hover:bg-accent hover:text-foreground rounded-lg"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 