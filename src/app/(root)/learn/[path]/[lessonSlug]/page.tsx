"use client"

import { ArrowLeft, ArrowRight, CheckCircle, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { academyData, slugify } from "../../data"
import type { Lesson, Course } from "../../data"

interface LessonResult {
  lesson: Lesson
  course: Course
}

const findLesson = (path: string, lessonSlug: string): LessonResult | null => {
  const course = academyData[path as keyof typeof academyData]
  if (!course) return null

  for (const module of course.modules) {
    const lesson = module.lessons.find(l => slugify(l.title) === lessonSlug)
    if (lesson) {
      return { lesson, course }
    }
  }
  return null
}

const findNextLesson = (path: string, currentLessonSlug: string): Lesson | null => {
  const course = academyData[path as keyof typeof academyData]
  if (!course) return null

  const allLessons = course.modules.flatMap(module => module.lessons)
  const currentIndex = allLessons.findIndex(lesson => slugify(lesson.title) === currentLessonSlug)
  
  return currentIndex >= 0 && currentIndex < allLessons.length - 1 
    ? allLessons[currentIndex + 1] 
    : null
}

export default function LessonPage() {
  const params = useParams()
  const path = params.path as string
  const lessonSlug = params.lessonSlug as string

  const result = findLesson(path, lessonSlug)
  if (!result) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Lesson Not Found</h1>
          <Link 
            href="/learn" 
            className="inline-block text-destructive hover:underline transition-colors"
          >
            Return to Academy
          </Link>
        </div>
      </div>
    )
  }

  const { lesson, course } = result
  const nextLesson = findNextLesson(path, lessonSlug)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <style jsx global>{`
        .lesson-content {
          font-family: Georgia, 'Times New Roman', serif;
          color: hsl(var(--foreground));
          line-height: 1.8;
          font-size: 1.125rem;
        }
        .lesson-content .lesson-image {
          margin: 2.5rem 0;
          text-align: center;
        }
        .lesson-content .lesson-image img {
          width: 100%;
          max-width: 700px;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          border: 1px solid hsl(var(--border));
        }
        .lesson-content .image-caption {
          margin-top: 0.75rem;
          margin-bottom: 0;
          color: hsl(var(--muted-foreground));
          font-size: 0.875rem;
          font-style: italic;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        .lesson-content h2 {
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1.2;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          letter-spacing: -0.02em;
        }
        .lesson-content h3 {
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          font-size: 1.75rem;
          font-weight: 700;
          line-height: 1.3;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          letter-spacing: -0.01em;
        }
        .lesson-content p {
          margin-bottom: 1.75rem;
          line-height: 1.75;
          font-weight: 400;
        }
        .lesson-content ul {
          margin-bottom: 2rem;
          padding-left: 0;
        }
        .lesson-content li {
          margin-bottom: 0.75rem;
          line-height: 1.7;
          padding-left: 1.5rem;
          position: relative;
        }
        .lesson-content ul li:before {
          content: '•';
          position: absolute;
          left: 0;
          color: hsl(var(--destructive));
          font-weight: 700;
          font-size: 1.2em;
        }
        .lesson-content strong {
          font-weight: 600;
          color: hsl(var(--foreground));
        }
        .lesson-content h2:first-child {
          margin-top: 0;
        }
        .lesson-content > *:last-child {
          margin-bottom: 0;
        }
      `}</style>

      {/* Main Content */}
      <main className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <header className="mb-8">
            <Link 
              href={`/learn/${path}`} 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to {course.title}
            </Link>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6" style={{fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', letterSpacing: '-0.02em'}}>
              {lesson.title}
            </h1>
          </header>

          <div className="space-y-8">
            {lesson.hasScreenshot && (
              <section className="bg-card/50 border rounded-xl p-6">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src="/BlastCourseImage.jpeg"
                    alt={lesson.screenshotAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  {lesson.screenshotAlt}
                </p>
              </section>
            )}

            <article className="lesson-content max-w-3xl mx-auto">
              <div 
                dangerouslySetInnerHTML={{ __html: lesson.content }}
              />
            </article>

            {lesson.resources && lesson.resources.length > 0 && (
              <section className="bg-card/50 border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Additional Resources
                </h3>
                <ul className="grid gap-3">
                  {lesson.resources.map((resource, index) => (
                    <li key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{resource}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <footer className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <section className="bg-card border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Status</span>
                  <div className="flex items-center gap-2">
                    {lesson.completed ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />
                    )}
                    <span className={`text-sm font-medium ${
                      lesson.completed ? "text-green-500" : "text-muted-foreground"
                    }`}>
                      {lesson.completed ? "Complete" : "In Progress"}
                    </span>
                  </div>
                </div>
                <Button 
                  className={lesson.completed ? "bg-green-600 hover:bg-green-700" : ""}
                  variant={lesson.completed ? "default" : "outline"}
                  size="lg"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {lesson.completed ? "Completed" : "Mark as Complete"}
                </Button>
              </div>
            </section>

            {nextLesson && (
              <Link 
                href={`/learn/${path}/${slugify(nextLesson.title)}`}
                className="group"
              >
                <section className="bg-card border rounded-xl p-6 hover:bg-card/70 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-destructive transition-colors">
                        {nextLesson.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Continue your learning journey with the next lesson.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 ml-4 text-muted-foreground group-hover:text-destructive transition-colors flex-shrink-0 mt-1" />
                  </div>
                </section>
              </Link>
            )}
          </footer>
        </div>
      </main>
    </div>
  )
}