import React from 'react'

const Cards = ({card}) => {
  return (
   
        <div className='card'>
            <div className="title">
             <p>{card.title}</p>
            </div> 
             <hr />
             <div className="desc">
             <p>{card.description}</p>
             </div>
        </div>
       

  )
}

export default Cards