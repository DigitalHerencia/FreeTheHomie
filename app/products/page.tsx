import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-card rounded-lg overflow-hidden shadow-lg">
            <Link href={`/products/${product.id}`}>
              <div className="relative h-80 w-full bg-black">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                  <Button>View Details</Button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
