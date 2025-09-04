"use client"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Trash2, Minus, Plus, ArrowRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="max-w-md mx-auto bg-card rounded-lg p-8 shadow-sm">
          <p className="mb-6">Your cart is empty</p>
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              {cartItems.map((item, index) => (
                <div key={`${item.id}-${item.size}`}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative w-24 h-24 bg-black rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>

                      <p className="text-sm text-muted-foreground mb-2">Size: {item.size}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id, item.size)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {index < cartItems.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between font-bold mb-6">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <Button asChild size="lg" className="w-full">
                <Link href="/checkout">
                  Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <div className="mt-4 text-center">
                <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
