import { Prisma } from "@prisma/client";
import ProductItem from "./product-item";
import { db } from "../_lib/prisma";

const ProductList = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: true
    }
  });

  return (
    <div className="flex overflow-x-scroll gap-4 px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) =>
        <ProductItem key={product.id} product={product}/>
      
      )}
    </div>
    
  );
};

export default ProductList;
