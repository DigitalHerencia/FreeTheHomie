"use client"

import { useState } from "react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getProductById } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/lib/cart-context"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import QuetzalHero from "@/components/quetzal-hero"

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params
  const product = getProductById(id)
  const { toast } = useToast()
  const { addToCart } = useCart()

  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")

  if (!product) {
    notFound()
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      })
      return
    }

    addToCart(product, quantity, selectedSize)

    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} (${selectedSize}) added to your cart`,
    })
  }

  // Use the QuetzalHero component for the El Quetzal product
  if (id === "el-quetzal-tee") {
    return (
      <>
        <QuetzalHero showOverlay={true} overlayOpacity={0.8}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain p-4"
                priority
              />
            </div>

            <div className="flex flex-col bg-black/40 backdrop-blur-sm rounded-lg p-6">
              <h1 className="text-3xl font-bold mb-2 text-white">{product.name}</h1>
              <div className="text-2xl font-bold text-primary mb-4">${product.price.toFixed(2)}</div>

              <p className="text-white/80 mb-6">{product.description}</p>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="size" className="text-sm font-medium text-white">
                    Size
                  </label>
                  <Select onValueChange={setSelectedSize} value={selectedSize}>
                    <SelectTrigger id="size" className="w-full bg-black/60 border-white/20 text-white">
                      <SelectValue placeholder="Select a size" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="quantity" className="text-sm font-medium text-white">
                    Quantity
                  </label>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                      className="bg-black/60 border-white/20 text-white"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center text-white">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={increaseQuantity}
                      className="bg-black/60 border-white/20 text-white"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button size="lg" className="w-full" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>

                <div className="text-sm text-white/70">
                  <p>• Print-on-demand through Amazon</p>
                  <p>• 100% of proceeds go to the homie and his family</p>
                  <p>• Premium quality materials</p>
                </div>
              </div>
            </div>
          </div>
        </QuetzalHero>

        <div className="bg-black py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-white">About This Design</h2>
              <p className="text-white/80 mb-6">
                The El Quetzal design features intricate Aztec-inspired artwork with a feathered serpent, pyramid, and
                skull. This powerful imagery represents the rich cultural heritage and symbolism of ancient Mesoamerican
                civilizations.
              </p>
              <p className="text-white/80 mb-6">
                Each t-shirt is printed on premium black fabric that provides the perfect canvas for this detailed
                artwork. The design is carefully reproduced to maintain all the intricate details of the original
                illustration.
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }

  // Regular product display for other products
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-square bg-black rounded-lg overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain p-4"
            priority
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="text-2xl font-bold text-primary mb-4">${product.price.toFixed(2)}</div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="size" className="text-sm font-medium">
                Size
              </label>
              <Select onValueChange={setSelectedSize} value={selectedSize}>
                <SelectTrigger id="size" className="w-full">
                  <SelectValue placeholder="Select a size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity" className="text-sm font-medium">
                Quantity
              </label>
              <div className="flex items-center">
                <Button variant="outline" size="icon" onClick={decreaseQuantity} disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={increaseQuantity}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button size="lg" className="w-full" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>

            <div className="text-sm text-muted-foreground">
              <p>• Print-on-demand through Amazon</p>
              <p>• 100% of proceeds go to the homie and his family</p>
              <p>• Premium quality materials</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
