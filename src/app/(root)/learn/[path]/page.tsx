"use client"

import { BookOpen, CheckCircle, Clock, Play } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

import { academyData, slugify } from "../data"

export default function PathPage() {
  const params = useParams()
  const path = params.path as keyof typeof academyData

  const course = academyData[path] || { title: "Path not found", modules: [] }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>Back to Academy</span>
          </Link>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <header className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-mono">
                {course.title}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {course.description}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{course.totalDuration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="w-4 h-4" />
                <span>{course.modules.length} modules</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Play className="w-4 h-4" />
                <span>{course.modules.reduce((total, module) => total + module.lessons.length, 0)} lessons</span>
              </div>
            </div>
          </header>

          <section className="mt-16">
            <h2 className="sr-only">Course Lessons</h2>
            <ul className="grid gap-4">
              {course.modules.map((module) => 
                module.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex}>
                    <Link 
                      href={`/learn/${path}/${slugify(lesson.title)}`} 
                      className="group block p-6 bg-card/50 border rounded-xl hover:bg-card/70 transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          {lesson.completed ? (
                            <CheckCircle className="w-6 h-6 text-green-500" aria-label="Completed" />
                          ) : (
                            <div 
                              className="w-6 h-6 rounded-full border-2 border-muted-foreground group-hover:border-destructive transition-colors" 
                              aria-label="Not completed"
                            />
                          )}
                        </div>
                        
                        <div className="flex-1 space-y-1">
                          <h3 className={`text-lg font-medium transition-colors ${
                            lesson.completed 
                              ? 'text-muted-foreground line-through' 
                              : 'text-foreground group-hover:text-destructive'
                          }`}>
                            {lesson.title}
                          </h3>
                          {lesson.resources && lesson.resources.length > 0 && (
                            <p className="text-sm text-muted-foreground">
                              {lesson.resources.length} resource{lesson.resources.length > 1 ? 's' : ''} included
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}