import CategoryEvents from '@/components/Events/CategoryEvents'

export const dynamicParams = false

export async function generateStaticParams() {
  const { events_categories } = await import('../../../../data/data.json')
  return events_categories.map((event) => ({
    category: event.id,
  }))
}

async function getEvent(params: any) {
  const id = params.category

  const { allEvents } = await import('../../../../data/data.json')
  const event = allEvents.filter((event) => event.city === id)

  return event
}

export default async function CategoryPage({ params }: any) {
  const eventsByCity = await getEvent(params)

  return (
    <main className="flex flex-col items-center">
      <div className="w-full px-2 sm:px-6 lg:w-[1024px]">
        <CategoryEvents events={eventsByCity} />
      </div>
    </main>
  )
}
