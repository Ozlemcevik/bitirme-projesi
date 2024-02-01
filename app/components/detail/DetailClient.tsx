"use client"

import Image from "next/image"
import PageContainer from "../containers/PageContainer"
import { Rating } from "@mui/material"




const DetailClient = ({products}: {products: any}) => {

let productRating = products?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / products?.reviews?.length
  return (
        <PageContainer>
             <div className="block md:flex gap-10 justify-center">
                <div className="relative h-[200px] md:h-[400px] w-[200px] md:w-[400px] mb-3 md:mb-0">
                   <Image src={products?.image} fill alt=""/>
                </div>
                <div className="w-full md:w-1/2 space-y-3">
                    <div className="text-xl md:text-2xl">{products?.name}</div>
                    <Rating name="read-only" value={productRating} readOnly />
                    <div className="text-slate-500">{products?.description}</div>
              
                 
              </div>
             </div>
        </PageContainer>
      
  )
  
}
export default DetailClient