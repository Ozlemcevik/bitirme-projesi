import { products } from "@/utils/Products"
import Heading from "../general/Heading"
import ProductCard from "./ProductCard"

const Products = () => {
    return(
        <div>
            <Heading text={"Tüm ürünler"}/>
                <div className="flex items-center flex-wrap gap-3 md:gap-10 px:3 md:px-10">
                    {
                        products.map(products =>(
                            <ProductCard key={products.id} product={products}/>
                        ))
                    }
            </div>
        </div>
    )
}
export default Products