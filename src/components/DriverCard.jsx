import React from 'react'

function DriverCard({name, rating, img, car}) {
  return (
    <div>
        <img className='driverImg' src={img} alt='img'></img>
        <div>
            <h4>{name}</h4>
            <p>{rating}</p>
            <p>{car.model} - {car.licensePlate}</p>
        </div>
    </div>
  )
}

export default DriverCard