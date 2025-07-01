"use client"

import Image from "next/image"
import { Star, Calendar, Clock, Eye, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const handleWatchClick = () => {
    window.location.href = 'https://nyafilmer.gg/'
  }

  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src="/hero-bg.jpg" 
          alt="Squid Game Hero Background" 
          fill 
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-2xl space-y-6">
          <div className="space-y-2">
            <Badge className="bg-red-600 hover:bg-red-700 text-white">
              Featured Series
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Squid Game
            </h1>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-white font-semibold">8.9</span>
              <span className="text-gray-300">/10</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-300">
              <Calendar className="w-4 h-4" />
              <span>2021</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-300">
              <Clock className="w-4 h-4" />
              <span>60 min</span>
            </div>
            <Badge variant="secondary" className="bg-red-600 text-white hover:bg-red-700">
              TV-MA
            </Badge>
          </div>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
            Hundreds of cash-strapped players accept a strange invitation to compete in children's games. 
            Inside, a tempting prize awaits — with deadly high stakes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button 
              size="lg" 
              onClick={handleWatchClick}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 h-auto group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleWatchClick}
              className="border-gray-600 text-white hover:bg-gray-800/50 bg-transparent backdrop-blur-sm px-8 py-3 h-auto"
            >
              <Eye className="w-5 h-5 mr-2" />
              Add to Watchlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 