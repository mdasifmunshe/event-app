import SingleEvent from '@/components/Events/SingleEvent'

export const dynamicParams = false

export async function generateStaticParams() {
  const { allEvents } = await import('../../../../../data/data.json')
  return allEvents.map((event) => ({
    eventId: event.id,
    category: event.city,
  }))
}

async function getEvent(params: any) {
  const id = params.eventId

  const { allEvents } = await import('../../../../../data/data.json')
  const event = allEvents.filter((event) => event.id === id)

  return event[0]
}

export default async function EventDetailsPage({ params }: any) {
  const singleEvent = await getEvent(params)

  return (
    <main className="flex flex-col items-center">
      <div className="w-full px-2 sm:px-6 lg:w-[1024px]">
        <SingleEvent event={singleEvent} />
      </div>
    </main>
  )
}
