import React from 'react'
import Sample from './../assets/sample.png'

function ProductCard(props) {
  const {item} = props
  // console.log(item)
  return (
    <div className='rounded-lg w-[250px] h-[380px] flex flex-col items-center align-middle relative bg-gray-100 hover:bg-gray-200 overflow-hidden pt-2' >
        <img src={`data:image/png;base64,${item.productImage}`} className='rounded-md max-w-[250px] w-[92%] max-h-[250px] h-[250px] object-cover' />
        <h3 className='px-4 py-1 text-lg font-semibold text-center'>{item.productName}</h3>
        <p className='px-4 pb-1 font-medium text-center'>4.5/5</p>
        <div className='w-full px-3 py-4 absolute bottom-0 flex justify-between gap-3'>            
            <button className='w-full bg-slate-600 text-white rounded-md py-2'>Add to Cart</button>
            {/* <button className='w-full bg-orange-500 text-white rounded-md py-2'>Quick View</button> */}
        </div>
    </div>
  )
}

export default ProductCard