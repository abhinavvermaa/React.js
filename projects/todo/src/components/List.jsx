import React from 'react'
function List(props) {
    return (
    <div className='inline-flex  space-x-4'>
    <div className=''>{props.item}</div>
    <button className='border-2 rounded-xl bg-grey-50 ' onClick={(e)=>{
      props.deleteItem(props.index)
    }}>delete</button>
    </div>
  )
}

export default List
