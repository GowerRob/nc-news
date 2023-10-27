import React from 'react'
import Select from 'react-select'


const OrderSortComp = ({order, sortby, setOrder, setSortby, setSearchParams}) => {
  const optionsOrder= [
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' },
  ]
  
  const optionsSort= [
    { value: 'created_at', label: 'Date' },
    { value: 'votes', label: 'Votes' },
    { value: 'comment_count', label: 'Comments' },
  ]
  

 
  return(   
  <article className="OrderSortComp">

        <Select 
        options={optionsOrder}
        onChange={value=>{
          setOrder(value.value)
          setSearchParams({order:value.value,sort_by:sortby})
          console.log("Here")
        }}
        placeholder="Order..."
        />
        <Select 
        options={optionsSort}
        onChange={value=>{
          setSortby(value.value)
          setSearchParams({order:order,sort_by:value.value})
        }}
        placeholder="Sortby..."
        />


    </article>      

  )
  
                        }

export default OrderSortComp;