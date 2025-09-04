import QuetzalHero from "@/components/quetzal-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ElQuetzalPage() {
  return (
    <div className="min-h-screen">
      <QuetzalHero>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">El Quetzal Collection</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md">
            Inspired by ancient Aztec mythology, our El Quetzal design represents strength, wisdom, and rebirth. Support
            the cause with this limited edition artwork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="/products/el-quetzal-tee">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg bg-black/50 text-white border-white/20 hover:bg-black/70"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </QuetzalHero>

      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">The Legend of El Quetzal</h2>
            <p className="text-lg text-white/80 mb-8">
              The feathered serpent deity has been one of the most important supernatural entities in ancient
              Mesoamerican culture, representing the boundary between earth and sky, matter and spirit, and life and
              death.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Our design pays homage to this powerful symbol while supporting a cause that matters. Each purchase
              directly benefits the homie and his family.
            </p>
            <Button asChild variant="outline" className="text-white border-white/20 hover:bg-white/10">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
