"use client"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

interface UpcomingEventCardProps {
  title: string
  date: string
  description: string
  image: string
  link: string
  buttonText?: string
}

export default function UpcomingEventCard({
  title,
  date,
  description,
  image,
  link,
  buttonText = "Learn More"
}: UpcomingEventCardProps) {
  return (
    <Link href={link} className="block">
      <div
        className="rounded-3xl overflow-hidden border-2 border-emerald-500/50 bg-card group shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
      >
        {/* Banner Image */}
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Upcoming Badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
            <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full text-sm font-bold shadow-lg animate-pulse">
              UPCOMING EVENT
            </span>
          </div>
        </div>

        {/* Event Info */}
        <div className="p-6 sm:p-8 md:p-10 bg-linear-to-b from-card to-card/50">
          <div className="flex items-center text-emerald-600 dark:text-emerald-500 mb-4">
            <Calendar className="h-5 w-5 mr-2" />
            <span className="text-base sm:text-lg font-semibold">{date}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground drop-shadow-sm">
            {title}
          </h3>

          <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
            {description}
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-6 py-3 bg-gradient-green text-white rounded-full font-semibold text-base sm:text-lg group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all">
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
