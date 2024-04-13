import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Categories from '../components/Categories'
import ProductCard from '../components/ProductCard'

function  Products() {

  const [productList, setProductList] = useState(null)
  const [searchString, setSearchString] = useState(null)
  const [pagesInfo, setPagesInfo] = useState()
  const [categories, setCategories] = useState()
  const  [page, setPage] = useState(0)
  const [types, setTypes] = useState([])
  const [sortByPrice, setSortByPrice] = useState(null)




  useEffect(() => {
    fetch('http://localhost:8080/api/products/find-all', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ page: page, size: 9, searchString, categories, sortByPrice})
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
      })
      .then(data => {
        // Handle the response data
        // console.log('Response data:', data);
        // console.log(data.products)
        setProductList(data.products)
        setPagesInfo(data.pages)
        console.log(data.pages)
      })
      .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
      });
  }, [searchString, categories, page])

    
  return (
    <div className='w-full h-full p-0 m-0 flex flex-col'>
        <Breadcrumbs/>
        <div className='w-full px-20 flex gap-5'>
            <Categories setPage={setPage} categories={categories} setCategories={setCategories} sortByPrice={sortByPrice} setSortByPrice={setSortByPrice}  />
            <div className='flex flex-col gap-2 w-full'>
              <div className='w-full flex flex-col'>
                <h3 className='text-base py-2 font-semibold'>Find the item you need</h3>
                <input type='text' value={searchString} onChange={(e) => setSearchString(e.target.value) } placeholder='Search by product name, category, color' className='w-[95%] text-xl rounded-lg indent-2 outline-none border-[1px] border-gray-300 px-1 py-2' />
              </div>
              <div className='w-full py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                  {/* {[...Array(9)].map((x, i) =>
                  <ProductCard key={i}/>
                  )} */}

                  {
                    productList ?  
                    productList.map((item, index) => <ProductCard key={index} item={item} />) : null
                  }
              </div>
                <div className='w-full py-4 flex justify-center gap-2 pb-10'>
                    
                    {
                      pagesInfo && !pagesInfo.first &&
                      <button onClick={() => setPage(0)} className="px-4 py-2 text-base font-medium text-black bg-gray-300">Previous</button>
                    }
                    
                    {pagesInfo && [...Array(pagesInfo.totalPages)].map((x, i) =>
                      <button onClick={() => setPage(i)} key={i} className="px-4 py-2 text-base font-medium text-black bg-gray-300">{i+1}</button>
                    )} 

                    {
                      pagesInfo && !pagesInfo.last &&
                      <button onClick={() => setPage(pagesInfo.totalPages-1)} className="px-4 py-2 text-base font-medium text-black bg-gray-300">Next</button>            
                    }
                    
                </div>
              </div>
            </div>
    </div>
  )
}

export default Products