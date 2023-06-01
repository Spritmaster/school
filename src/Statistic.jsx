import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Parallax } from 'react-parallax';
import person from  '.././/public/person.png'
import student from  '.././/public/student.png'
import key from  '.././/public/key.png'
import  pen from  '.././/public/pen.png'

const Statistic = () => {
    const [results,setresults] =useState([])
    useEffect(()=>{
      resultsNumber()
    },[])
  
  
    const resultsNumber = async () =>{
      try {
        const res = await axios ({
          url:"https://byijsmhahnnqyxcckiaq.supabase.co/rest/v1/statistics?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5aWpzbWhhaG5ucXl4Y2NraWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI1MTI1MTAsImV4cCI6MTk4ODA4ODUxMH0.dDLXDuAh16VFdp7QvAcF8zOYu176duLzvfXnRbQvxPI",
  
  })
  if(res.status ===200){
    setresults(res.data)
console.log(results);
  }
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <Parallax blur={3} className='flex flex-col text-[#fff] items-center py-[5rem]'  bgImage="https://97-maktab.uz/wp-content/uploads/2021/09/4a0fc658b2c1afa81f32fba44a1182e3.jpg" bgImageAlt="the cat" strength={1500}>
            <h1 className='call__title'>MAKTAB STATISTIKASI / СТАТИСТИКА ШКОЛЫ</h1>
            <div className="statistic-box bg-[#000] mx-auto flex items-center  mb-[2rem]"></div>

            <p className='call__text ' >Maktabning asosiy ko'rsatgich parametrlari / Основные индикаторные параметры школы</p>


            <div className="api__info-wrap flex text-[#fff] gap-[3rem]  flex justify-center">
               <div className="info-box">
                <img className='person' src={person} alt=""  width={70}/>
               <span className='number__static ' >{results[0] && results[0].count}</span>
                <div className="short-info">{results[0] && results[0].name}</div>
               </div>
               <div className="info-box">
               <img className='person top-[-3.5rem]' src={student} alt=""  width={60}/>
               <span className='number__static'>{results[1] && results[1].count}</span>
                <div className="short-info">{results[1] && results[1].name}</div>
               </div>
               <div className="info-box">
               <img className='person' src={key} alt=""  width={70}/>
               <span className='number__static'>{results[2] && results[2].count}</span>
                <div className="short-info">{results[2] && results[2].name}</div>
               </div>

               <div className="info-box">
               <img className='person' src={pen} alt=""  width={70}/>
               <span className='number__static'>{results[3] && results[3].count}</span>
                <div className="short-info">{results[3] && results[3].name}</div>
               </div>
            </div>
            

        </Parallax>
  )
}

export default Statistic