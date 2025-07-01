"use client"

import Image from "next/image"
import { Star, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Movie {
  title: string
  year: string
  rating?: string
  image: string
}

interface MovieCardProps {
  movie: Movie
  showRating?: boolean
  className?: string
}

export function MovieCard({ movie, showRating = true, className = "" }: MovieCardProps) {
  return (
    <div className={`group relative cursor-pointer ${className}`}>
      <div className="relative overflow-hidden rounded-lg bg-gray-800 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
        <Image
          src={movie.image || "/placeholder.svg"}
          alt={`${movie.title} (${movie.year})`}
          width={200}
          height={300}
          className="w-full h-[250px] sm:h-[280px] md:h-[320px] object-cover transition-transform duration-300"
          loading="lazy"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 12.5vw"
        />
        
        {/* Quality Badge */}
        <div className="absolute top-2 left-2">
          <Badge 
            variant="secondary" 
            className="bg-yellow-500 text-black text-xs font-semibold shadow-lg"
          >
            HD
          </Badge>
        </div>
        
        {/* Rating Badge */}
        {showRating && movie.rating && (
          <div className="absolute top-2 right-2">
            <Badge 
              variant="secondary" 
              className="bg-black/70 text-white text-xs flex items-center gap-1 shadow-lg"
            >
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              {movie.rating}
            </Badge>
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <Button 
            size="sm" 
            className="bg-red-600 hover:bg-red-700 text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          >
            <Play className="w-4 h-4 mr-1" />
            Watch
          </Button>
        </div>
        
        {/* Coming Soon Overlay */}
        {!showRating && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
            <Badge className="bg-blue-600 text-white text-xs">
              Coming Soon
            </Badge>
          </div>
        )}
      </div>
      
      {/* Movie Info */}
      <div className="mt-3 space-y-1">
        <h3 
          className="text-white text-sm font-medium line-clamp-2 group-hover:text-yellow-400 transition-colors"
          title={movie.title}
        >
          {movie.title}
        </h3>
        <p className="text-gray-400 text-xs">{movie.year}</p>
      </div>
    </div>
  )
} 