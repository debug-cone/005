import { useEffect } from "react"

function CardComponent( {item} ) {
  return (
    // useEffect(() => {
    //     console.log(item);
    // }, [])
    <div className="w-[300px] border border-slate-400 rounded-2xl">
        <div className="relative">
            <img 
                src={item.thumbnail} 
                className="rounded-t-2xl h-[250px] w-full object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 rounded-t-2xl hover:bg-transparent transition-all cursor-pointer"/>
        </div>
        <div className="p-[20px]">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button className="px-[24px] py-[12px] border-none bg-blue-400 text-white rounded-full hover:bg-red-400 transition-all">
                Add To Cart
            </button>
        </div>

    </div>
  )
}

export default CardComponent