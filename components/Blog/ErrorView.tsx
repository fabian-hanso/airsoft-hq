import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { BookOpenIcon, CalendarDaysIcon, RssIcon } from '@heroicons/react/24/solid'

const links = [
  {
    name: 'Blog',
    href: '/blog',
    description: 'Schau in unserem Blog nach passenden Themen.',
    icon: BookOpenIcon,
  },
  {
    name: 'Events',
    href: '/events',
    description: 'Schau nach, welche Events in Zukunft anstehen.',
    icon: CalendarDaysIcon,
  },
  { name: 'Spielfelder', href: '/spielfelder', description: 'Finde Inspiration für spannende Spielfelder.', icon: RssIcon },
]

export default function ErrorView() {
  return (
    <div className="bg-white">
      <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-10 sm:pb-24 lg:px-8">
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-base/8 font-semibold text-blue-500">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Ohje!
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Dieser Post existiert leider nicht, oder wurde entfernt.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
          <ul role="list" className="-mt-6 divide-y divide-gray-900/5 last-of-type:border-none border-b border-gray-900/5">
            {links.map((link, linkIdx) => (
              <li key={linkIdx} className="relative flex gap-x-6 py-6">
                <div className="flex size-10 flex-none items-center justify-center rounded-md shadow-sm ring-1 ring-gray-900/10">
                  <link.icon aria-hidden="true" className="size-6 text-blue-500" />
                </div>
                <div className="flex-auto">
                  <h3 className="text-sm/6 font-semibold text-gray-900">
                    <a href={link.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {link.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm/6 text-gray-600">{link.description}</p>
                </div>
                <div className="flex-none self-center">
                  <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-400" />
                </div>
              </li>
            ))}
            <li key="Discord" className="relative flex gap-x-6 py-6">
                <div className="flex size-10 flex-none items-center justify-center rounded-md shadow-sm ring-1 ring-gray-900/10">
                  <img aria-hidden="true" className="w-6 h-6 text-blue-500" src="/discord.svg"/>
                </div>
                <div className="flex-auto">
                  <h3 className="text-sm/6 font-semibold text-gray-900">
                    <a href="/test">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Discord
                    </a>
                  </h3>
                  <p className="mt-2 text-sm/6 text-gray-600">Tritt unserer Discord Community bei.</p>
                </div>
                <div className="flex-none self-center">
                  <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-400" />
                </div>
              </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
