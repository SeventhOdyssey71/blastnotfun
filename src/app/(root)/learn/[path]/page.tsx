"use client"

import { CheckCircle, Clock, BookOpen, Play } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { academyData, slugify } from "../data"

export default function PathPage() {
  const params = useParams()
  const path = params.path as keyof typeof academyData

  const course = academyData[path] || { title: "Path not found", modules: [] }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back Button */}
      <div className="border-b bg-background/95 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/learn"
            className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>←</span>
            <span>Back</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter font-mono">
              {course.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {course.description}
            </p>
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{course.totalDuration}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <BookOpen className="w-4 h-4" />
                <span>{course.modules.length} modules</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Play className="w-4 h-4" />
                <span>{course.modules.reduce((total, module) => total + module.lessons.length, 0)} lessons</span>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-4">
            {course.modules.map((module) => 
              module.lessons.map((lesson, lessonIndex) => {
                return (
                  <Link 
                    key={lessonIndex} 
                    href={`/learn/${path}/${slugify(lesson.title)}`} 
                    className="block p-6 bg-card/50 border rounded-2xl hover:bg-card/70 transition-colors group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {lesson.completed ? (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-muted-foreground group-hover:border-destructive transition-colors" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-lg font-medium ${lesson.completed ? 'text-muted-foreground line-through' : 'text-foreground group-hover:text-destructive transition-colors'}`}>
                          {lesson.title}
                        </h3>
                        {lesson.resources && lesson.resources.length > 0 && (
                          <p className="mt-2 text-sm text-muted-foreground">
                            {lesson.resources.length} resource{lesson.resources.length > 1 ? 's' : ''} included
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                )
              })
            )}
          </div>
        </div>
      </main>
    </div>
  )
}