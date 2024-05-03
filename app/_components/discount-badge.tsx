import { Product } from "@prisma/client";
import { ArrowDownIcon } from "lucide-react";

interface DiscountBadgeProps {
    product: Pick<Product, "discountPercentage">;
}
    
const DiscountBadge = ({ product } : DiscountBadgeProps) => {
    return ( 
        <div className="flex items-center gap-[2px] rounded-full text-white">
            <ArrowDownIcon size={12} />
            <span className="text-xs font-semibold">
              {product.discountPercentage}%
            </span>
        </div>
     );
}
 
export default DiscountBadge;