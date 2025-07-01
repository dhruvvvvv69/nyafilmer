"use client"

const footerSections = [
  {
    title: "Movies",
    links: [
      { name: "Action", href: "#" },
      { name: "Comedy", href: "#" },
      { name: "Drama", href: "#" },
      { name: "Horror", href: "#" },
      { name: "Sci-Fi", href: "#" },
    ]
  },
  {
    title: "TV Shows",
    links: [
      { name: "Popular", href: "#" },
      { name: "Latest", href: "#" },
      { name: "Top Rated", href: "#" },
      { name: "Coming Soon", href: "#" },
      { name: "Trending", href: "#" },
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "DMCA", href: "#" },
    ]
  }
]

export function Footer() {
  return (
    <footer className="bg-black/50 mt-16 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold">
                NYA
              </div>
              <span className="text-white font-bold text-xl">Filmer</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your ultimate destination for movies and TV shows. Stream the latest releases 
              and classic favorites in high quality.
            </p>
            <div className="flex space-x-2">
              <div className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-semibold">
                HD Quality
              </div>
              <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                24/7 Support
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 text-lg">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Nyafilmer. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 