"use client"

import { MovieCard } from "./movie-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

interface Movie {
  title: string
  year: string
  rating?: string
  image: string
}

interface MovieSectionProps {
  title: string
  movies: Movie[]
  showRating?: boolean
  badge?: {
    text: string
    variant?: "default" | "secondary" | "destructive" | "outline"
    className?: string
  }
  showViewAll?: boolean
  className?: string
}

export function MovieSection({ 
  title, 
  movies, 
  showRating = true, 
  badge,
  showViewAll = false,
  className = ""
}: MovieSectionProps) {
  return (
    <section className={`container mx-auto px-4 py-8 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {title}
          </h2>
          {badge && (
            <Badge 
              variant={badge.variant || "default"}
              className={badge.className || ""}
            >
              {badge.text}
            </Badge>
          )}
        </div>
        
        {showViewAll && (
          <Button 
            variant="outline" 
            size="sm" 
            className="border-gray-600 text-white hover:bg-gray-800 bg-transparent group"
          >
            View All
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        )}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 md:gap-6">
        {movies.map((movie, index) => (
          <MovieCard 
            key={`${movie.title}-${index}`}
            movie={movie} 
            showRating={showRating}
          />
        ))}
      </div>
    </section>
  )
} 