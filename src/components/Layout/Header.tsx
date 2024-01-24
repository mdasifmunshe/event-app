'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
  Link as NextUILink,
} from '@nextui-org/react'
import { HomeIcon, PartyPopperIcon, TicketIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()

  const menuItems = [
    { id: 1, text: 'Home', link: '/', icon: <HomeIcon /> },
    {
      id: 2,
      text: 'Events',
      link: '/events',
      icon: <TicketIcon />,
    },
    {
      id: 3,
      text: 'About Us',
      link: '/aboutus',
      icon: <PartyPopperIcon />,
    },
  ]

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          {/* Logo */}
          <NextUILink
            as={Link}
            href="/"
            className="font-bold text-inherit"
            onClick={() => setIsMenuOpen(false)}
          >
            LOGO
          </NextUILink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarBrand>
          {/* Logo */}
          <NextUILink as={Link} href="/" className="font-bold text-inherit">
            LOGO
          </NextUILink>
        </NavbarBrand>
        {menuItems.map((item) => (
          <NavbarItem isActive key={item.id}>
            <NextUILink
              as={Link}
              color={pathname === item.link ? 'primary' : 'foreground'}
              href={item.link}
            >
              {item.text}
            </NextUILink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <NextUILink href="#" className="text-white">
            Login
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="border-0 text-white"
            color="primary"
            href="#"
            variant="faded"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NextUILink
              as={Link}
              className="flex w-full flex-row items-center justify-start gap-4 py-2 font-sans"
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              href={item.link}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <div>{item.icon}</div>
              <p>{item.text}</p>
            </NextUILink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
