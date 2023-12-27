"use client"
const Category = () => {
        const categoryList=[
           {name: "giyim"} ,
           {name: "elektronik"} ,
           {name: "kitap"} ,
           {name: "takı"} ,

        ]
    return(
    
    <div className="flex items-center justify-center px:3 md:px-10 gap-3 md:gap10 py-5 md:my-8 overflow-x-auto">
        {
            categoryList.map((Category,index) => (
                <div className="border text-slate-500 rounded-full min-w-[120px] flex items-center justify-center cursor-pointer flex-1 px-4 py-2 text-center" key={index}>{Category.name}</div>
            ))
        }
        
     </div>
    )
}

export default Category