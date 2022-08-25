import React, { useState } from 'react'

export const GifExpertApp = () => {


  const [categories, setCategories] = useState(['One Punch','Shingeki'])

  const onAddCategory = () =>{
    setCategories([...categories,"Inuyasha"])
  }




  return (
   <>
    <h1>GifExpertApp</h1>
    <ol>

      <button onClick={onAddCategory}>Agregar</button>

    {categories.map(caterory => {
      return <li key={caterory}>{caterory}</li>
    })}

    </ol>


  
   
   </>
  )
}
