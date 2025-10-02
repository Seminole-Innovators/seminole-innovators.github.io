import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiscord,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import { faFire, faFolder } from '@fortawesome/free-solid-svg-icons'

type LinkItem = {
  name: string
  url: string
  icon: React.ReactNode
}

const Links: LinkItem[] = [
  {
    name: 'Discord',
    url: 'https://discord.com/invite/tYEUvYGcbB',
    icon: (
      <FontAwesomeIcon icon={faDiscord} className="text-xl text-indigo-600" />
    )
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fseminoleinnovators%2F&is_from_rle',
    icon: (
      <FontAwesomeIcon icon={faInstagram} className="text-xl text-pink-600" />
    )
  },
  {
    name: 'Flare',
    url: 'https://flare-event.app.link/ZR1UY6m7zWb',
    icon: (
      <FontAwesomeIcon icon={faFire} className="text-xl text-orange-500" />
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fgroups%2F10007248%2F',
    icon: (
      <FontAwesomeIcon icon={faLinkedin} className="text-xl text-blue-700" />
    )
  },
  {
    name: 'Past Projects',
    url: 'https://seminoleinnovators.notion.site/index?pvs=143',
    icon: (
      <FontAwesomeIcon icon={faFolder} className="text-xl text-gray-700" />
    )
  }
]

const SocialLinks: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 place-items-center gap-6">
        {Links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-20 w-full min-w-48 max-w-60 items-center justify-center gap-4 bg-[#7D121B] transition-colors duration-200 cursor-pointer border-2 border-transparent hover:bg-[#FFD700] hover:border-white hover:border-b-4 hover:border-r-4"
          >
            <div className="text-2xl">{link.icon}</div>
            <span className="text-lg font-medium text-white">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </>
  )
}

export default SocialLinks