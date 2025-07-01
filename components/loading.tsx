"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function LoadingMovieCard() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-[250px] sm:h-[280px] md:h-[320px] w-full rounded-lg bg-gray-800" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4 bg-gray-700" />
        <Skeleton className="h-3 w-1/2 bg-gray-700" />
      </div>
    </div>
  )
}

export function LoadingMovieSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <Skeleton className="h-8 w-48 bg-gray-700" />
        <Skeleton className="h-6 w-20 bg-gray-700" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 md:gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <LoadingMovieCard key={index} />
        ))}
      </div>
    </section>
  )
}

export function LoadingHero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
      <Skeleton className="absolute inset-0 bg-gray-800" />
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-2xl space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-6 w-32 bg-gray-700" />
            <Skeleton className="h-16 w-96 bg-gray-700" />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Skeleton className="h-6 w-20 bg-gray-700" />
            <Skeleton className="h-6 w-16 bg-gray-700" />
            <Skeleton className="h-6 w-20 bg-gray-700" />
          </div>
          <Skeleton className="h-24 w-full max-w-xl bg-gray-700" />
          <div className="flex gap-4">
            <Skeleton className="h-12 w-36 bg-gray-700" />
            <Skeleton className="h-12 w-40 bg-gray-700" />
          </div>
        </div>
      </div>
    </section>
  )
} 