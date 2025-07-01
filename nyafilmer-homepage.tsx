"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MovieSection } from "@/components/movie-section"
import { SocialShare } from "@/components/social-share"
import { Footer } from "@/components/footer"

export default function Component() {
  const trendingMovies = [
    { title: "Thunderbolts", year: "2024", rating: "8.5", image: "/placeholder.svg?height=300&width=200" },
    { title: "Arcane", year: "2024", rating: "9.2", image: "/placeholder.svg?height=300&width=200" },
    { title: "King the Land", year: "2023", rating: "8.1", image: "/placeholder.svg?height=300&width=200" },
    { title: "12 Th Fail", year: "2023", rating: "8.9", image: "/placeholder.svg?height=300&width=200" },
    { title: "Ice Road Truckers", year: "2024", rating: "7.8", image: "/placeholder.svg?height=300&width=200" },
    { title: "Sinners", year: "2024", rating: "8.3", image: "/placeholder.svg?height=300&width=200" },
    { title: "Red One", year: "2024", rating: "7.5", image: "/placeholder.svg?height=300&width=200" },
    { title: "Avatar: The Last Airbender", year: "2024", rating: "8.7", image: "/placeholder.svg?height=300&width=200" },
  ]

  const latestMovies = [
    { title: "Venom: The Last Dance", year: "2024", rating: "8.2", image: "/placeholder.svg?height=300&width=200" },
    { title: "28 Years Later", year: "2024", rating: "8.0", image: "/placeholder.svg?height=300&width=200" },
    { title: "GAGA", year: "2024", rating: "7.9", image: "/placeholder.svg?height=300&width=200" },
    { title: "Elio", year: "2024", rating: "8.1", image: "/placeholder.svg?height=300&width=200" },
    { title: "Dune: Part Two", year: "2024", rating: "8.8", image: "/placeholder.svg?height=300&width=200" },
    { title: "The Gentlemen", year: "2024", rating: "8.4", image: "/placeholder.svg?height=300&width=200" },
    { title: "Awakener", year: "2024", rating: "7.6", image: "/placeholder.svg?height=300&width=200" },
    { title: "The Beekeeper", year: "2024", rating: "7.8", image: "/placeholder.svg?height=300&width=200" },
  ]

  const latestTVShows = [
    { title: "House of the Dragon", year: "2024", rating: "8.9", image: "/placeholder.svg?height=300&width=200" },
    { title: "The Rings of Power", year: "2024", rating: "8.3", image: "/placeholder.svg?height=300&width=200" },
    { title: "Wednesday", year: "2024", rating: "8.6", image: "/placeholder.svg?height=300&width=200" },
    { title: "Stranger Things", year: "2024", rating: "9.1", image: "/placeholder.svg?height=300&width=200" },
    { title: "The Bear", year: "2024", rating: "8.8", image: "/placeholder.svg?height=300&width=200" },
    { title: "Abbott Elementary", year: "2024", rating: "8.2", image: "/placeholder.svg?height=300&width=200" },
    { title: "Only Murders in the Building", year: "2024", rating: "8.4", image: "/placeholder.svg?height=300&width=200" },
    { title: "The Crown", year: "2024", rating: "8.7", image: "/placeholder.svg?height=300&width=200" },
  ]

  const comingSoon = [
    { title: "Vanished", year: "2025", image: "/placeholder.svg?height=300&width=200" },
    { title: "I Am Legend 2", year: "2025", image: "/placeholder.svg?height=300&width=200" },
    { title: "The Maze Runner: The Death Cure", year: "2025", image: "/placeholder.svg?height=300&width=200" },
    { title: "Blue Eye Samurai", year: "2025", image: "/placeholder.svg?height=300&width=200" },
    { title: "Parole", year: "2025", image: "/placeholder.svg?height=300&width=200" },
    { title: "Shrek 5", year: "2025", image: "/placeholder.svg?height=300&width=200" },
    { title: "Interstellar 2", year: "2025", image: "/placeholder.svg?height=300&width=200" },
    { title: "Pretty Baby: Brooke Shields", year: "2025", image: "/placeholder.svg?height=300&width=200" },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Social Share Buttons */}
      <SocialShare />

      {/* Main Content */}
      <main className="space-y-4">
        {/* Trending Section */}
        <MovieSection
          title="Trending"
          movies={trendingMovies}
          badge={{
            text: "Popular",
            className: "bg-green-600 text-white"
          }}
        />

        {/* Latest Movies Section */}
        <MovieSection
          title="Latest Movies"
          movies={latestMovies}
          showViewAll={true}
        />

        {/* Additional Latest Movies Row */}
        <MovieSection
          title="More Latest Movies"
          movies={[...latestMovies].reverse()}
          className="pt-0"
        />

        {/* Latest TV Shows Section */}
        <MovieSection
          title="Latest TV Shows"
          movies={latestTVShows}
          showViewAll={true}
        />

        {/* Coming Soon Section */}
        <MovieSection
          title="Coming Soon"
          movies={comingSoon}
          showRating={false}
          showViewAll={true}
          badge={{
            text: "2025",
            variant: "secondary",
            className: "bg-blue-600 text-white"
          }}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
