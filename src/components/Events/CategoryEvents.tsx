'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Link as NextUILink } from '@nextui-org/react'

interface EventDetailsProps {
  id: string
  title: string
  city: string
  description: string
  image: string
  emails_registered: Array<string>
}

interface CategoryEventsProps {
  events: EventDetailsProps[]
}

const CategoryEvents = ({ events }: CategoryEventsProps) => {
  const params = useParams<{ category: string }>()
  const city = params.category

  return (
    <div className="flex flex-col">
      <h1 className="scroll-m-20 py-4 text-center text-4xl font-extrabold tracking-tight lg:text-5xl [&(:first-child)]:capitalize">
        Events in {city}
      </h1>
      {events.map((event) => (
        <NextUILink
          as={Link}
          key={event.id}
          href={`/events/${city}/${event.id}`}
          color="foreground"
          className="grid grid-flow-row items-center justify-center gap-4 pb-6 lg:grid-flow-col lg:justify-start"
        >
          <div className="relative flex justify-center">
            <Image
              src={event.image}
              width={500}
              height={500}
              alt={event.title}
              style={{
                width: '500px',
                height: '350px',
              }}
              className="rounded-lg"
            />
          </div>
          <div className="px-auto flex max-w-[500px] flex-col justify-center">
            <h2 className="w-full scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              {event.title}
            </h2>
          </div>
        </NextUILink>
      ))}
    </div>
  )
}

export default CategoryEvents
