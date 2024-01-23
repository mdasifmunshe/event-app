'use client'

import Link from 'next/link'
import Image from 'next/image'

interface EventDetailsProps {
  id: string
  title: string
  description: string
  image: string
}

interface HomeEventsProps {
  events: EventDetailsProps[]
}

const AllEvents = ({ events }: HomeEventsProps) => {
  return (
    <div>
      <div>All Events Components</div>
    </div>
  )
}

export default AllEvents
