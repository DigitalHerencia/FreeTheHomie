import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import QuetzalHero from "@/components/quetzal-hero"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <QuetzalHero>
        <div className="max-w-3xl mx-auto text-center">
          <Image
            src="/images/logo-free-isaac.png"
            alt="Free Isaac"
            width={300}
            height={150}
            className="mb-8 w-64 md:w-80 mx-auto"
            priority
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Support The Cause</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md">
            All proceeds from these limited edition t-shirts go directly to support the homie and his family during this
            difficult time.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/products">
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </QuetzalHero>

      {/* Featured Products */}
      <section className="py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Limited Edition Designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
              <Link href="/products/free-isaac-tee">
                <div className="relative h-80 w-full bg-black">
                  <Image
                    src="/images/tshirt-free-isaac.png"
                    alt="Free Isaac T-Shirt"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Free Isaac T-Shirt</h3>
                  <p className="text-white/70 mb-4">Premium black t-shirt with the iconic "Free Isaac" design</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">$29.99</span>
                    <Button>View Details</Button>
                  </div>
                </div>
              </Link>
            </div>

            <div className="bg-background/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
              <Link href="/products/el-quetzal-tee">
                <div className="relative h-80 w-full bg-black">
                  <Image
                    src="/images/tshirt-quetzal.png"
                    alt="El Quetzal T-Shirt"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">El Quetzal T-Shirt</h3>
                  <p className="text-white/70 mb-4">Aztec-inspired artwork on a premium black t-shirt</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">$29.99</span>
                    <Button>View Details</Button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About the Cause */}
      <section className="py-16 bg-gradient-to-b from-black to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">About The Cause</h2>
            <p className="text-lg mb-8 text-white/80">
              This fundraiser was created to support our friend and his family during a challenging time. By purchasing
              these limited edition t-shirts, you're directly contributing to their wellbeing and showing your
              solidarity.
            </p>
            <p className="text-lg mb-8 text-white/80">
              100% of the proceeds go directly to the homie and his family. The t-shirts are printed on-demand through
              Amazon to ensure quality and timely delivery.
            </p>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join The Movement</h2>
            <p className="text-lg mb-8 text-white/80">
              Show your support by wearing these exclusive designs. Every purchase makes a difference.
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/products">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
