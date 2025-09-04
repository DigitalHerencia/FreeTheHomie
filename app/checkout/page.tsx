"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CreditCard, Check } from "lucide-react"

export default function CheckoutPage() {
  const { cartItems, subtotal, clearCart } = useCart()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  if (cartItems.length === 0 && !isComplete) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <div className="max-w-md mx-auto bg-card rounded-lg p-8 shadow-sm">
          <p className="mb-6">Your cart is empty</p>
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false)
      setIsComplete(true)
      clearCart()

      toast({
        title: "Order placed successfully!",
        description: "Thank you for your support.",
      })
    }, 2000)
  }

  if (isComplete) {
    return (
      <div className="container py-12">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Order Complete!</CardTitle>
              <CardDescription>Thank you for your support. Your order has been placed successfully.</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p>All proceeds will go directly to support the homie and his family.</p>
              <p className="text-muted-foreground">You will receive an email confirmation shortly.</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild>
                <Link href="/">Return to Home</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              <div className="bg-card rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" defaultValue="United States" required />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Payment Information</h2>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <div className="relative">
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                      <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" required />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button asChild variant="outline">
                  <Link href="/cart">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cart
                  </Link>
                </Button>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Place Order"}
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg shadow-sm overflow-hidden sticky top-20">
            <div className="p-6">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>

              <div className="space-y-4 mb-4">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-3">
                    <div className="relative w-16 h-16 bg-black rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${(subtotal * 0.08).toFixed(2)}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${(subtotal + subtotal * 0.08).toFixed(2)}</span>
              </div>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>All proceeds go directly to the homie and his family</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
