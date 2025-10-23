"use client"

import { ExternalLink, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { academyData, slugify } from "../../data"

const findLesson = (path: string, lessonSlug: string) => {
  const course = academyData[path as keyof typeof academyData];
  if (!course) return null;

  for (const courseModule of course.modules) {
    for (const lesson of courseModule.lessons) {
      if (slugify(lesson.title) === lessonSlug) {
        return { lesson, course };
      }
    }
  }
  return null;
}

export default function LessonPage() {
  const params = useParams()
  const path = params.path as string
  const lessonSlug = params.lessonSlug as string

  const result = findLesson(path, lessonSlug)
  const lesson = result?.lesson
  const course = result?.course


  if (!lesson) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Lesson Not Found</h1>
          <Link href="/learn" className="text-destructive hover:underline mt-4 inline-block">
            Return to Academy
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Substack-inspired styles for lesson content */}
      <style jsx>{`
        .lesson-content {
          font-family: 'Georgia', 'Times New Roman', serif;
          color: hsl(var(--foreground));
          max-width: none;
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
        .lesson-content h4 {
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-size: 1.375rem;
          font-weight: 600;
          line-height: 1.4;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          letter-spacing: -0.005em;
        }
        .lesson-content p {
          margin-bottom: 1.75rem;
          font-size: 1.125rem;
          line-height: 1.75;
          font-weight: 400;
          color: hsl(var(--foreground) / 0.9);
        }
        .lesson-content ul, .lesson-content ol {
          margin-bottom: 2rem;
          padding-left: 0;
          font-size: 1.125rem;
        }
        .lesson-content li {
          margin-bottom: 0.75rem;
          line-height: 1.7;
          padding-left: 1.5rem;
          position: relative;
          color: hsl(var(--foreground) / 0.9);
        }
        .lesson-content ul li:before {
          content: '•';
          position: absolute;
          left: 0;
          color: hsl(var(--destructive));
          font-weight: 700;
          font-size: 1.2em;
        }
        .lesson-content ol li:before {
          content: counter(list-item) '.';
          position: absolute;
          left: 0;
          color: hsl(var(--destructive));
          font-weight: 600;
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
          {/* Lesson Header */}
          <div className="mb-8">
            <Link href={`/learn/${path}`} className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {course?.title}
            </Link>
            

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6" style={{fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', letterSpacing: '-0.02em'}}>
              {lesson.title}
            </h1>
          </div>

          {/* Main Content - Full Width */}
          <div className="space-y-8">
            {/* Screenshot/Media Section */}
            {lesson.hasScreenshot && (
              <div className="bg-card/50 border rounded-xl p-8">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src="/BlastCourseImage.jpeg"
                    alt={lesson.screenshotAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center">{lesson.screenshotAlt}</p>
              </div>
            )}

            {/* Lesson Content */}
            <article className="lesson-content mb-16">
              <div 
                dangerouslySetInnerHTML={{ __html: lesson.content }}
              />
            </article>

            {/* Resources Section */}
            {lesson.resources && lesson.resources.length > 0 && (
              <div className="bg-card/50 border rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                  <ExternalLink className="w-5 h-5" />
                  <span>Additional Resources</span>
                </h3>
                <div className="space-y-3">
                  {lesson.resources.map((resource, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{resource}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer - Previously Sidebar Content */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Progress Card */}
            <div className="bg-card/50 border rounded-xl p-6">
              <h3 className="font-bold mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Lesson Status</span>
                  <span className={lesson.completed ? "text-green-500" : "text-muted-foreground"}>
                    {lesson.completed ? "✓ Complete" : "In Progress"}
                  </span>
                </div>
                <Button 
                  className={`w-full ${lesson.completed ? "bg-green-600 hover:bg-green-700" : ""}`}
                  variant={lesson.completed ? "default" : "outline"}
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {lesson.completed ? "Completed" : "Mark as Complete"}
                </Button>
              </div>
            </div>

            {/* Course Info */}
            <div className="bg-card/50 border rounded-xl p-6">
              <h3 className="font-bold mb-4">Course Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Course</span>
                  <span>{course?.title}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Level</span>
                  <span>{course?.level}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span>{course?.totalDuration}</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-card/50 border rounded-xl p-6">
              <h3 className="font-bold mb-4">Lesson Navigation</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous Lesson
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Next Lesson
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}