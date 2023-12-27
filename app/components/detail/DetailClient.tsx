"use client"

import Image from "next/image"
import PageContainer from "../containers/PageContainer"
import Counter from "../general/Counter"
import { useState } from "react"

export type CardProductProps = {
  id: string,
  name:string,
  description:string 
  price:number 
  quantity:number 
  image:string
}

const DetailClient = ({product} : {product:any}) => {

  // const [cardProducti setCardProduct] = useState<CardProductProps>({
  //   id: product.id,
  //   name:product.name,
  //   description: product.description, 
  //   price: 1 ,
  //   quantity: product.quantity ,
  //   image: product.image

  // })
  return (
    <div className="bg-gray-600 my-10">
       <PageContainer>
            <div className="block md:flex gap-10 justify-center">
              <div className="relative h-[400px] w-[400px] ">
                <Image src={product?.image} fill alt=''/>
              </div>
              <div className="w-1/2 space-y-3">
                  <div className="text-xl md:text-2xl">{product?.name}</div>
                  <div className="text-slate-500">{product?.description}</div>
              </div>
                {/* <Counter cardProduct={cardProduct}/> */}
            </div>
       </PageContainer>
    </div>
  )
}

export default DetailClient