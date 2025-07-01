"use client"

import Image from "next/image"
import { Search, Play, Star, Calendar, Clock, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  const trendingMovies = [
    { title: "Thunderbolts", year: "2024", rating: "8.5", image: "/placeholder.svg?height=300&width=200" },
    { title: "Arcane", year: "2024", rating: "9.2", image: "/placeholder.svg?height=300&width=200" },
    { title: "King the Land", year: "2023", rating: "8.1", image: "/placeholder.svg?height=300&width=200" },
    { title: "12 Th Fail", year: "2023", rating: "8.9", image: "/placeholder.svg?height=300&width=200" },
    { title: "Ice Road Truckers", year: "2024", rating: "7.8", image: "/placeholder.svg?height=300&width=200" },
    { title: "Sinners", year: "2024", rating: "8.3", image: "/placeholder.svg?height=300&width=200" },
    { title: "Red One", year: "2024", rating: "7.5", image: "/placeholder.svg?height=300&width=200" },
    {
      title: "Avatar: The Last Airbender",
      year: "2024",
      rating: "8.7",
      image: "/placeholder.svg?height=300&width=200",
    },
  ]

  const latestMovies = [
    { title: "Venom", year: "2024", rating: "8.2", image: "/placeholder.svg?height=300&width=200" },
    { title: "28 Years Later", year: "2024", rating: "8.0", image: "/placeholder.svg?height=300&width=200" },
    { title: "GAGA", year: "2024", rating: "7.9", image: "/placeholder.svg?height=300&width=200" },
    { title: "Elio", year: "2024", rating: "8.1", image: "/placeholder.svg?height=300&width=200" },
    { title: "Dune: Part Two", year: "2024", rating: "8.8", image: "/placeholder.svg?height=300&width=200" },
    { title: "The Gentlemen", year: "2024", rating: "8.4", image: "/placeholder.svg?height=300&width=200" },
    { title: "Awakener", year: "2024", rating: "7.6", image: "/placeholder.svg?height=300&width=200" },
    { title: "The Beekeeper", year: "2024", rating: "7.8", image: "/placeholder.svg?height=300&width=200" },
  ]

  const comingSoon = [
    { title: "Vanished", year: "2025", image: "/placeholder.svg?height=300&width=200" },
    { title: "I Am Legend 2", year: "2025", image: "/placeholder.svg?height=300&width=200" },
    { title: "The Maze Runner", year: "2025", image: "/placeholder.svg?height=300&width=200" },
    { title: "Blue Eye Samurai", year: "2025", image: "/placeholder.svg?height=300&width=200" },
    { title: "Parole", year: "2025", image: "/placeholder.svg?height=300&width=200" },
    { title: "Shrek 5", year: "2025", image: "/placeholder.svg?height=300&width=200" },
    { title: "Interstellar 2", year: "2025", image: "/placeholder.svg?height=300&width=200" },
    { title: "Pretty Baby", year: "2025", image: "/placeholder.svg?height=300&width=200" },
  ]

  const MovieCard = ({ movie, showRating = true }: { movie: any; showRating?: boolean }) => (
    <div className="group relative cursor-pointer">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={movie.image || "/placeholder.svg"}
          alt={movie.title}
          width={200}
          height={300}
          className="w-full h-[280px] object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          <Badge variant="secondary" className="bg-yellow-500 text-black text-xs">
            HD
          </Badge>
        </div>
        {showRating && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-black/70 text-white text-xs flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              {movie.rating}
            </Badge>
          </div>
        )}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button size="sm" className="bg-red-600 hover:bg-red-700">
            <Play className="w-4 h-4 mr-1" />
            Watch
          </Button>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="text-white text-sm font-medium truncate">{movie.title}</h3>
        <p className="text-gray-400 text-xs">{movie.year}</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold">NYA</div>
                <span className="text-white font-bold text-xl">Filmer</span>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                  Home
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Movie
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Quality
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Movies
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  TV Shows
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Top IMDB
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Android App
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search movies..."
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="/hero-bg.jpg" alt="Squid Game" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">Squid Game</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-white font-semibold">8.9</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-300">
                <Calendar className="w-4 h-4" />
                <span>2021</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-300">
                <Clock className="w-4 h-4" />
                <span>60 min</span>
              </div>
              <Badge className="bg-red-600">TV-MA</Badge>
            </div>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a
              tempting prize awaits — with deadly high stakes.
            </p>
            <div className="flex items-center space-x-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                <Play className="w-5 h-5 mr-2" />
                Watch Now
              </Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
                <Eye className="w-5 h-5 mr-2" />
                Watchlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Share Buttons */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2">
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            Facebook
          </Button>
          <Button size="sm" className="bg-sky-500 hover:bg-sky-600">
            Twitter
          </Button>
          <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
            Reddit
          </Button>
          <Button size="sm" className="bg-blue-800 hover:bg-blue-900">
            LinkedIn
          </Button>
          <Button size="sm" className="bg-red-600 hover:bg-red-700">
            Pinterest
          </Button>
          <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
            Telegram
          </Button>
        </div>
      </div>

      {/* Trending Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Trending</h2>
          <Badge className="bg-green-600">Popular</Badge>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {trendingMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </section>

      {/* Latest Movies Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Latest Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          {latestMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {latestMovies.map((movie, index) => (
            <MovieCard key={`second-${index}`} movie={movie} />
          ))}
        </div>
      </section>

      {/* Latest TV Shows Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Latest TV Shows</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {trendingMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Coming Soon</h2>
          <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {comingSoon.map((movie, index) => (
            <MovieCard key={index} movie={movie} showRating={false} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold">NYA</div>
                <span className="text-white font-bold text-xl">Filmer</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your ultimate destination for movies and TV shows. Stream the latest releases and classic favorites.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Movies</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Action
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Comedy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Drama
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Horror
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">TV Shows</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Popular
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Latest
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Top Rated
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Coming Soon
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 Nyafilmer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
