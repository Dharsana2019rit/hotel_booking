import React from 'react'
import Booking from '../Components/Booking'
import { useSelector } from 'react-redux';
import Navprod from '../Components/Navprod';


function Mybookings() {
  const items = useSelector(state => state.items)
  const items_length = items.length-1
  console.log(items[items_length])
  const DisplayItem = items[items_length]
  console.log(DisplayItem);
  
  return (
    <>
     <Navprod/>
     <div className='bookings'>
        <div className='bookingimg'>
             <img src={DisplayItem.image} height={150}/>
        </div>
        <div className='bookingname'>
            <p>{DisplayItem.first_name} {DisplayItem.last_name}</p>
        </div>
     </div>
    </>
  )
}

export default Mybookings