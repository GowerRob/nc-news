import React from 'react'
import Select from 'react-select'


const OrderSortCompComments = ({order, sortby, setOrder, setSortby}) => {
  const optionsOrder= [
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' },
  ]
  
  const optionsSort= [
    { value: 'created_at', label: 'Date' },
    { value: 'votes', label: 'Votes' },
  ]
  

 
  return(   
  <article className="OrderSortComp">

        <Select 
        options={optionsOrder}
        onChange={value=>{
          setOrder(value.value)
          console.log("Here")
        }}
        placeholder="Order..."
        />
        <Select 
        options={optionsSort}
        onChange={value=>{
          setSortby(value.value)
        }}
        placeholder="Sortby..."
        />


    </article>      

  )
  
                        }

export default OrderSortCompComments;