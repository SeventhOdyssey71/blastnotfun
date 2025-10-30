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

      {/* Main Content */}
      <main className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Lesson Header */}
          <div className="mb-8">
            <Link href={`/learn/${path}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to {course?.title}
            </Link>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight font-sans">
              {lesson.title}
            </h1>
          </div>

          {/* Main Content - Full Width */}
          <div className="space-y-8">
            {/* Media Section */}
            {lesson.hasScreenshot && (
              <div className="bg-card/50 border rounded-xl p-6">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src="/BlastCourseImage.jpeg"
                    alt={lesson.screenshotAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">{lesson.screenshotAlt}</p>
              </div>
            )}

            {/* Lesson Content */}
            <article className="prose prose-lg max-w-none prose-stone dark:prose-invert">
              <div className="text-lg leading-relaxed text-foreground/90">
                {lesson.content}
              </div>
            </article>

            {/* Resources Section */}
            {lesson.resources && lesson.resources.length > 0 && (
              <div className="bg-card/50 border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  <span>Additional Resources</span>
                </h3>
                <div className="grid gap-3">
                  {lesson.resources.map((resource, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{resource}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
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
                  className={lesson.completed ? "bg-green-600 hover:bg-green-700" : ""}
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
                  <span className="text-right">{course?.title}</span>
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