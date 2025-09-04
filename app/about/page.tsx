import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About The Cause</h1>

        <div className="mb-8">
          <Image src="/images/logo-free-isaac.png" alt="Free Isaac" width={300} height={150} className="mx-auto mb-8" />

          <p className="text-lg mb-4">
            This fundraiser was created to support our friend and his family during a challenging time. By purchasing
            these limited edition t-shirts, you're directly contributing to their wellbeing and showing your solidarity.
          </p>

          <p className="text-lg mb-4">
            100% of the proceeds go directly to the homie and his family. The t-shirts are printed on-demand through
            Amazon to ensure quality and timely delivery.
          </p>

          <p className="text-lg mb-8">
            We appreciate your support in this difficult time. Every purchase makes a real difference and helps provide
            essential support when it's needed most.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">About The T-Shirts</h2>

          <p className="mb-4">
            Our t-shirts are printed on high-quality, comfortable fabric that will last. Each design is carefully
            created to show support while looking great.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-muted rounded-lg p-4 text-center">
              <h3 className="font-bold mb-2">Free Isaac T-Shirt</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Premium black t-shirt with the iconic "Free Isaac" design and gold crown.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/products/free-isaac-tee">View Details</Link>
              </Button>
            </div>

            <div className="bg-muted rounded-lg p-4 text-center">
              <h3 className="font-bold mb-2">El Quetzal T-Shirt</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Aztec-inspired artwork featuring a serpent, pyramid, and skull on a premium black t-shirt.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/products/el-quetzal-tee">View Details</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">About Digital Herencia</h2>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
            <Image
              src="/images/digital-herencia-logo.png"
              alt="Digital Herencia"
              width={200}
              height={100}
              className="w-40"
            />

            <p>
              Digital Herencia is proud to support this fundraiser by creating and hosting this website. We're committed
              to using our digital expertise to help our community.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/products">
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
