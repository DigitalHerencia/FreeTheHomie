"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { useMobile } from "@/hooks/use-mobile"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  const { cartItems } = useCart()
  const isMobile = useMobile()

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  const NavLinks = () => (
    <>
      <Link href="/" className="text-foreground hover:text-primary transition-colors">
        Home
      </Link>
      <Link href="/products" className="text-foreground hover:text-primary transition-colors">
        Products
      </Link>
      <Link href="/about" className="text-foreground hover:text-primary transition-colors">
        About
      </Link>
    </>
  )

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-free-isaac.png"
              alt="Free The Homie"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl hidden sm:inline-block">Free The Homie</span>
          </Link>
        </div>

        {isMobile ? (
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  <NavLinks />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <NavLinks />
            </nav>

            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
