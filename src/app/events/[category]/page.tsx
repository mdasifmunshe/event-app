'use client'

import { Link as NextUILink } from '@nextui-org/react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function CategoryPage() {
  const params = useParams<{ category: string }>()
  const city = params.category

  return (
    <main className="flex flex-col items-center">
      <div className="w-full px-2 sm:px-6 lg:w-[1024px]">
        <div className="flex flex-col">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl [&(:first-child)]:capitalize">
            {city} Events
          </h1>
          <NextUILink as={Link} href={`/events/dhaka/${1}`} color="foreground">
            <p className="leading-7 [&:not(:first-child)]:mt-6">Event 1</p>
          </NextUILink>
          <NextUILink as={Link} href={`/events/dhaka/${2}`} color="foreground">
            <p className="leading-7 [&:not(:first-child)]:mt-6">Event 2</p>
          </NextUILink>
        </div>
      </div>
    </main>
  )
}
