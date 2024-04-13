import React, { useEffect, useState } from 'react'

function Categories(props) {
  const {categories, setCategories, sortByPrice, setSortByPrice, setPage} = props

  const [checkboxes, setCheckboxes] = useState({
    MALE: false,
    FEMALE: false,
    UNISEX: false
  });

  const [priceSort, setPriceSort] = useState()

  

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked
    });
  };

  const handlePriceChange = (event) => {
    
    setPriceSort(event.target.value);
  }

  useEffect( () => {
    const checkedValues = Object.keys(checkboxes).filter(key => checkboxes[key]);
    // console.log(checkedValues);
    setCategories([...checkedValues])
    setSortByPrice(priceSort)
    setPage(0)
  }, [checkboxes, priceSort])

  return (
    <div className='w-[30%] flex flex-col py-10 gap-6'>
        <h2>Categories</h2>

        <div className='flex flex-col'>
            <h3 className='mb-2'>Sex</h3>
            <p className='inline-block'><input name="MALE"
          checked={checkboxes.checkbox1} onChange={handleCheckboxChange} type='checkbox' id='male' /> <label htmlFor='male'>Male</label></p>
            <p className='inline-block'><input name="FEMALE"
          checked={checkboxes.checkbox1} onChange={handleCheckboxChange} type='checkbox' id='female'/> <label htmlFor='female'>Female</label></p>
            <p className='inline-block'><input name="UNISEX"
          checked={checkboxes.checkbox1} onChange={handleCheckboxChange} type='checkbox' id='unisex'/> <label htmlFor='unisex'>Unisex</label></p>
        </div>

        <div className='flex flex-col'>
            <h3 className='mb-2'>Price</h3>
            <p className='inline-block'><input type='radio' name='price' id='priceLowToHigh' value={'lowToHigh'} onChange={(e) => handlePriceChange(e)}/> <label htmlFor='priceLowToHigh' >Lowest to Highest</label></p>
            <p className='inline-block'><input type='radio' name='price' id='priceHighToLow' value={'highToLow'} onChange={(e) => handlePriceChange(e)}/> <label htmlFor='priceHighToLow' >Highest to Lowest</label></p>            
        </div>

        <div className='flex flex-col'>
            <h3 className='mb-2'>Types</h3>
            <p className='inline-block'><input name='gender-category' type='checkbox' id='top'/> <label htmlFor='top'>Top</label></p>            
            <p className='inline-block'><input name='gender-category' type='checkbox' id='pants'/> <label htmlFor='pants'>Pants</label></p>            
        </div>
    </div>
  )
}

export default Categories