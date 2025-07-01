"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Twitter } from "lucide-react"

const socialPlatforms = [
  { name: "Facebook", color: "bg-blue-600 hover:bg-blue-700", icon: Facebook },
  { name: "Twitter", color: "bg-sky-500 hover:bg-sky-600", icon: Twitter },
  { name: "Reddit", color: "bg-orange-600 hover:bg-orange-700" },
  { name: "LinkedIn", color: "bg-blue-800 hover:bg-blue-900" },
  { name: "Pinterest", color: "bg-red-600 hover:bg-red-700" },
  { name: "Telegram", color: "bg-blue-700 hover:bg-blue-800" },
]

export function SocialShare() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-gray-400 text-sm mr-2 hidden sm:block">Share:</span>
        {socialPlatforms.map((platform) => {
          const IconComponent = platform.icon
          return (
            <Button 
              key={platform.name}
              size="sm" 
              className={`${platform.color} text-white text-xs px-3 py-2 h-auto transition-all hover:scale-105`}
            >
              {IconComponent && <IconComponent className="w-3 h-3 mr-1" />}
              <span className="hidden sm:inline">{platform.name}</span>
              <span className="sm:hidden">{platform.name.slice(0, 1)}</span>
            </Button>
          )
        })}
      </div>
    </div>
  )
} 