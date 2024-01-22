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
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const menuItems = ['Home', 'Events', 'About Us', 'Log Out']

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
          <NextUILink as={Link} href="/" className="font-bold text-inherit">
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
        <NavbarItem isActive>
          <NextUILink as={Link} href="/" aria-current="page">
            Home
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink as={Link} color="foreground" href="/events">
            Events
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink as={Link} color="foreground" href="/aboutus">
            About Us
          </NextUILink>
        </NavbarItem>
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
              className="w-full"
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              href="#"
              size="lg"
            >
              {item}
            </NextUILink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
