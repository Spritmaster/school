import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

const Togaraklar = () => {
  const [yonalishlar,setyonalishlar] =useState([])
  useEffect(()=>{
    getTogaraklar()
  },[])


  const getTogaraklar = async () =>{
    try {
      const res = await axios ({
        url:"https://byijsmhahnnqyxcckiaq.supabase.co/rest/v1/togaraklar?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5aWpzbWhhaG5ucXl4Y2NraWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI1MTI1MTAsImV4cCI6MTk4ODA4ODUxMH0.dDLXDuAh16VFdp7QvAcF8zOYu176duLzvfXnRbQvxPI",

})
if(res.status ===200){
  setyonalishlar(res.data)
}
    } catch (error) {
      console.log(error);
    }
  }
  return (

<div className='gap-[10px] max-w-[1200px] mx-auto mt-[30px]' >
<div>
<Slider
customPaging={i =>{
  return <a href='#'>{i}</a>
}} 
arrows
dots={true} 
slidesToShow={3}>
       

       <div>
    <div className="yonalishlarBox" key={yonalishlar[0] && yonalishlar[0].created_at} >
      <p key={yonalishlar[0] && yonalishlar[0].name}>{yonalishlar[0] && yonalishlar[0].name}</p>
    </div>
       </div>
       

       <div>
    <div className="yonalishlarBox" key={yonalishlar[1] && yonalishlar[1].created_at} >
      <p key={yonalishlar[1] && yonalishlar[1].name}>{yonalishlar[1] && yonalishlar[1].name}</p>
    </div>
       </div>
       

   
       <div>
    <div className="yonalishlarBox" key={yonalishlar[2] && yonalishlar[2].created_at} >
      <p key={yonalishlar[2] && yonalishlar[2].name}>{yonalishlar[2] && yonalishlar[2].name}</p>
    </div>
       </div>
       

   

       <div>
    <div className="yonalishlarBox" key={yonalishlar[3] && yonalishlar[3].created_at} >
      <p key={yonalishlar[3] && yonalishlar[3].name}>{yonalishlar[3] && yonalishlar[3].name}</p>
    </div>
       </div>
       


      </Slider>


</div>  

</div>
  )
}

export default Togaraklar