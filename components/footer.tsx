import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo-free-isaac.png"
                alt="Free The Homie"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl">Free The Homie</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              All proceeds go directly to support the homie and his family.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/cart" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cart
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-medium mb-4">Website By</h3>
            <div className="flex items-center gap-2">
              <Image
                src="/images/digital-herencia-logo.png"
                alt="Digital Herencia"
                width="200"
                height="100"
                className="h-20 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Free The Homie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
