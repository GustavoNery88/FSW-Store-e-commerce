import { ShapesIcon } from "lucide-react"
import { Badge } from "./badge"
import { CartContext } from "@/providers/cart";
import { useContext } from "react";

const Cart = () => {

    const { products} = useContext(CartContext);

    return (

        <div>
            <Badge className="w-fit gap-1 border-primary border-2 text-base uppercase px-3 py-[0.375rem]" variant="outline">
                <ShapesIcon size={16} />
                Carrinho
            </Badge>

            {products.map(product => <h1 key={product.id}> {product.name}</h1>)}
        </div>
    )

}

export default Cart;