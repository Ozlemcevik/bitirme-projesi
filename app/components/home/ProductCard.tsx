"use client"
import { products } from "@/utils/Products"
import TextClip from "@/utils/TextClip"
import { Rating } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation"

const ProductCard = ({product}:{product:any}) => {
    const router = useRouter()

  let productRating=product.reviews?.reduce((acc: number , item:any) => acc+item.rating,0) / product?.reviews?.lenght
  return (
    <div onClick={() => router.push('product/${product.id}')} className="w-[240px] cursor-pointer flex flex-col flex-1 shadow-lg p-2 rounded-md">
      <div className="relative h-[150px]">
            <Image src={product.image} fill alt="" className="object-contain"/>
      </div>
      <div className="text-center mt-2 space-y-1">
        <div>{TextClip(product.name)}</div>
        <Rating name="read-only" value={productRating} readOnly />
        <div className="font-bold text-lg md:text-xl">{product.price} ₺</div>
      </div>
    </div>
  )
}

export default ProductCard