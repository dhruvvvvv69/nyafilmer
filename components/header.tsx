"use client"

import { useState } from "react"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#", active: true },
    { name: "Movies", href: "#" },
    { name: "TV Shows", href: "#" },
    { name: "Quality", href: "#" },
    { name: "Top IMDB", href: "#" },
    { name: "Android App", href: "#" },
  ]

  return (
    <header className="bg-black/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold">
              NYA
            </div>
            <span className="text-white font-bold text-xl">Filmer</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors hover:text-yellow-500 ${
                  item.active ? "text-white" : "text-gray-300"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search movies, TV shows..."
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-64 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* Mobile Search Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-400 hover:text-white"
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden text-gray-400 hover:text-white"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900 border-gray-800">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search movies..."
                      className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    />
                  </div>
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`text-lg transition-colors hover:text-yellow-500 ${
                        item.active ? "text-white" : "text-gray-300"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
} 