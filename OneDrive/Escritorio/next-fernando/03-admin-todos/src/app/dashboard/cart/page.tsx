import WidgetItem from "@/components/WidgetItem";
import { Product, products } from "@/data/products";
import { ItemCard } from "@/shopping-cart/components/ItemCard";
import { cookies } from "next/headers";

export const metadata = {
  title: 'Producto en el Carrito',
  description: 'Producto en el Carrito'
};

interface ProductInCart {
  product: Product,
  cantidad: number
}

const getProductCart = (carrito: { [id: string]: number }): ProductInCart[] => {
  const productosInCart: ProductInCart[] = []

  for (const id of Object.keys(carrito)) {
    const product = products.find(prod => prod.id === id)
    if (product) {
      productosInCart.push({ product: product, cantidad: carrito[id] })
    }
  }
  return productosInCart;
}

export default async function CartPage() {
  const cookiesStore = await cookies();
  const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}')
  const productInCart = getProductCart(cart);

  const totalToPay = productInCart.reduce((prev, current) => (current.product.price * current.cantidad) + prev, 0);




  return (
    <div>
      <h1 className="text-3xl mt-2">Productos en el Carrito</h1>
      <hr className="mb-2" />
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {
            productInCart.length === 0 ? (
              <span className="text-xl text-center mt-2">No hay productos en el carrito</span>
            ) : productInCart.map(({ product, cantidad }) => (
              <ItemCard key={product.id} product={product} quantity={cantidad} />
            ))
          }

        </div>

        <div className="flex flex-col w-full sm:w-4/12">
          {
            productInCart.length === 0 ? '' : (
              <WidgetItem title="Total a pagar">
                <div className="mt-2 flex justify-center flex-col gap-4">
                  <h3 className="text-3xl font-bold text-gray-700"> ${(totalToPay * 1.15).toFixed(2)} </h3>
                  <span className="font-bold text-center text-gray-500">Impuestos 15% : ${(totalToPay * 0.15).toFixed(2)}</span>
                </div>
              </WidgetItem>
            )
          }
        </div>
      </div>
    </div>
  )
}
