import React from 'react'
import  './CustomerCard.css'
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
const CustomerCard = () => {
  return (
    <div className='customerCardContainer'>
      <h1>Title</h1>
      <img src='/5919211.jpg'/>
      <h3>Rating</h3>
      <div>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderOutlinedIcon/>
        <StarBorderOutlinedIcon/>
      </div>
      
    </div>
  )
}

export default CustomerCard
