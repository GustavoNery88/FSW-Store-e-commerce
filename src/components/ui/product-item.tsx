import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
    product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <div className="flex max-w-[156px] flex-col gap-4">
            <div className="h-[170px] w-[156px] flex aspect-square items-center justify-center rounded-lg bg-accent">
                <Image
                    src={product.imageUrls[0]}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
                    alt={product.name} />

            </div>
            <div>
                <p className="w-full text-sm text-ellipsis overflow-hidden whitespace-normal">{product.name}</p>
            </div>
        </div>
    );
};

export default ProductItem;