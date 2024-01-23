'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface EventDetailsProps {
  id: string
  title: string
  description: string
  image: string
}

interface HomeEventsProps {
  events: EventDetailsProps[]
}

const HomeEvents = ({ events }: HomeEventsProps) => {
  const pathname = usePathname()

  return (
    <>
      {events.map((event) => (
        <Link
          key={event.id}
          href={`/events/${event.id}`}
          className="grid grid-flow-row gap-4 pb-6 lg:grid-flow-col"
        >
          <div className="relative">
            <Image
              src={event.image}
              width={500}
              height={500}
              alt={event.title}
              // style={{
              //   width: '100%',
              //   height: '250px',
              // }}
              style={{
                width: '500px',
                height: '250px',
              }}
              className="rounded"
            />
          </div>
          <div
            className={`${pathname.includes('/events') ? 'justify-center' : ''} flex flex-col`}
          >
            <h2 className="w-full scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              {event.title}
            </h2>
            {pathname.includes('/events') ? null : (
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                {event.description}
              </p>
            )}
          </div>
        </Link>
      ))}
    </>
  )
}

export default HomeEvents
