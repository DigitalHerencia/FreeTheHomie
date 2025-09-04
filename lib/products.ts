import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "free-isaac-tee",
    name: "Free Isaac T-Shirt",
    description:
      "Show your support with this premium black t-shirt featuring the iconic 'Free Isaac' design with gold crown. Made with high-quality cotton for comfort and durability.",
    price: 29.99,
    image: "/images/tshirt-free-isaac.png",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: "el-quetzal-tee",
    name: "El Quetzal T-Shirt",
    description:
      "This unique design features Aztec-inspired artwork with a serpent, pyramid, and skull. Printed on a premium black t-shirt for a bold statement.",
    price: 29.99,
    image: "/images/tshirt-quetzal.png",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}
