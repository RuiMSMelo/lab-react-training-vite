import React from 'react'

function IdCard({lastName, firstName, gender, height, birth, picture}) {
    // console.log(birth)
    return (  
    <div>
        <img src={picture} alt="profile picture" />
        <h3>First Name: {firstName}</h3>
        <h3>Last Name: {lastName}</h3>
        <p>Gender: {gender}</p>
        <p>Height: {height/100}m</p>
        {/* <p>Birth: {birth}</p> */}
    </div>  
  )
}

export default IdCard