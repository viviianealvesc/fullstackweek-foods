"use client";

import { Prisma } from "@prisma/client";
import Image from "next/image";
import { calculateProductTotalPrice, formatCurrency } from "../_helpers/price";
import DiscountBadge from "./discount-badge";
import { Button } from "./ui/button";
import { BikeIcon, ChevronLeftIcon, ChevronRightIcon, TimerIcon } from "lucide-react";
import { useContext, useState } from "react";
import { Card } from "./ui/card";
import ProductList from "./product-list";
import { CartContext } from "../_context/cart";


interface ProductDetailsProps {
    product: Prisma.ProductGetPayload<{
        include: {
            restaurant: true
        }
    }>;

    complementaryProducts: Prisma.ProductGetPayload<{
      include: {
        restaurant: true;
      }
    }>[];
  }

const ProductDetails = ({ product, complementaryProducts } : ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);
  const {addProductToCart, products} = useContext(CartContext);

  const handleAddToCartClick = () => addProductToCart(product);

  const handleIncreaseQuantityClick = () => setQuantity((currentState) => currentState + 1);
  const handleDecreaseQuantityClick = () => {setQuantity((currentState) => {
    if(currentState === 1) return 1;
    return currentState -1;
  }
  );}

    return (  
        <div className="relative z-50 mt-[-1.5rem] rounded-tl-3xl bg-white py-5">
        <div className="flex items-center gap-[0.375rem] px-5">
          <div className="relative h-6 w-6">
            <Image src={product.restaurant.imageUrl} alt={product.restaurant.name} fill className="rounded-full object-cover" />
          </div>
          <span className="text-xs text-muted-foreground">
            {product.restaurant.name}
          </span>
        </div>
  
        <h1 className="mb-3 mt-1 text-xl font-semibold px-5">{product.name}</h1>
  
        <div className="flex justify-between px-5">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">
                  {formatCurrency(calculateProductTotalPrice(product))}
                </h2>
  
                {product.discountPercentage > 0 && (
                  <DiscountBadge  product={product} />
                )}
            </div>
  
            {product.discountPercentage > 0 && (
            <p className="text-sm texte-muted-foreground">
             De: {formatCurrency(Number(product.price))}
            </p>
             )}
          </div>

          <div className="flex items-center gap-3 text-center">
            <Button size="icon" variant="ghost" className="border border-solid border-muted-foreground" onClick={handleDecreaseQuantityClick}>
              <ChevronLeftIcon />
            </Button>
            <span className="w-4">{quantity}</span>
            <Button size="icon" onClick={handleIncreaseQuantityClick}>
              <ChevronRightIcon />
            </Button>
          </div>
        </div>

       <div className="px-5">
       <Card className="flex justify-around py-3 mt-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-muted-foreground">
              <span className="text-xs">Entrega</span>
              <BikeIcon size={14} />
            </div>

            {Number(product.restaurant.deliveryFee) > 0 ? (
              <p className="text-xs font-semibold">
                {formatCurrency(Number(product.restaurant.deliveryFee))}
              </p>
            ) : (
              <p className="text-xs font-semibold">Grátis</p>
            )}
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-muted-foreground">
              <span className="text-xs">Entrega</span>
              <TimerIcon size={14} />
            </div>

            <p className="text-xs font-semibold">
                {product.restaurant.deliveryTimeMinutes} min
            </p>
          </div>
        </Card>
       </div>

        <div className="mt-6 space-y-3 px-5">
          <h3 className="font-semibold px-5">Sobre</h3>
          <p className="text-sm text-muted-foreground">{product.description}</p>
        </div>

        <div className="mt-6 space-y-3">
          <h3 className="font-semibold">Sucos</h3>
          <ProductList products={complementaryProducts} />
        </div>

        <div className="mt-6 px-5">
          <Button className="w-full font-semibold" onClick={handleAddToCartClick}>Adicionar á sacola</Button>
        </div>
      </div>
    );
};
 
export default ProductDetails;