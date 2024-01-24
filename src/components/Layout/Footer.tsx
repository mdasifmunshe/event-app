import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { GithubIcon, LinkedinIcon } from 'lucide-react'

const Footer = () => {
  const d = new Date()
  const currentYear = d.getFullYear()

  const socialItems = [
    {
      id: 1,
      label: 'Github Icon',
      link: 'https://github.com/mdasifmunshe/event-app',
      icon: <GithubIcon />,
    },
    {
      id: 2,
      label: 'Linkedin Icon',
      link: 'https://www.linkedin.com/in/mdasifmunshe/',
      icon: <LinkedinIcon />,
    },
  ]

  return (
    <footer className="flex w-full flex-col items-center gap-4 border-t-1 border-white border-opacity-15 p-4">
      <div className="flex flex-row gap-4">
        {socialItems.map((social) => (
          <Button
            as={Link}
            key={social.id}
            isIconOnly
            color="default"
            variant="faded"
            aria-label={social.label}
            href={social.link}
          >
            {social.icon}
          </Button>
        ))}
      </div>
      <div>
        <p className="text-xs font-semibold xs:text-base">
          &copy;{currentYear}{' '}
          <Link
            href="https://github.com/mdasifmunshe"
            className="text-sm font-semibold text-[#0070f0] transition-opacity hover:opacity-80 xs:text-base"
          >
            Asif Munshi
          </Link>{' '}
          All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
