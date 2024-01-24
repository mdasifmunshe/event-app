'use client'

import Image from 'next/image'

interface EventDetailsProps {
  id: string
  title: string
  city: string
  description: string
  image: string
  emails_registered: Array<string>
}

const SingleEvent = ({ event }: { event: EventDetailsProps }) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-flow-row items-center justify-center gap-4 py-6 ">
        <div className="relative flex justify-center">
          <Image
            src={event.image}
            width={500}
            height={500}
            alt={event.title}
            style={{
              width: '750px',
              height: '500px',
            }}
            className="rounded-lg"
          />
        </div>
        <div className="px-auto flex max-w-[500px] flex-col justify-center">
          <h2 className="w-full scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {event.title}
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleEvent
