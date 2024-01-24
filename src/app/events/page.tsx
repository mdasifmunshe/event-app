import AllEvents from '@/components/Events/AllEvents'

export async function generateStaticParams() {
  const { events_categories } = await import('../../../data/data.json')
  const events = events_categories
  return events
}

export default async function EventsPage() {
  const categoryEvents = await generateStaticParams()

  return (
    <main className="flex flex-col items-center">
      <div className="w-full px-2 pt-4 sm:px-6 lg:w-[1024px]">
        <AllEvents events={categoryEvents} />
      </div>
    </main>
  )
}
