import React from 'react'
import { Parallax } from 'react-parallax';

const Boglanish = () => {
  return (
      
          <Parallax className='flex flex-col text-[#fff] items-center justify-center py-[10rem] mt-[30px] '  bgImage="https://97-maktab.uz/wp-content/uploads/2021/09/contact-us-business-icon-computer-keyboard-with-globe_117856-2468.jpg" bgImageAlt="the cat" strength={500}>
            <h1 className='call__title'>Biz bilan bog’lanish</h1>
            <p className='call__text'>Agar sizda maktab direktorga savolingiz yoki takliflaringiz bo’lsa quyida keltirilgan platformalar orqali yuborishingiz mumkin</p>
           <div className="call__directtor mx-auto">Direktorga murojaat / Связаться с директором</div>
           <div className='white__circle-wrap flex gap-[7px] max-w-[80px] mx-auto  '>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           </div>


           <div className="inline-block ariza bg-[#fff] rounded-[5px] px-[25px] py-[10px] text-[#77815c] text-center  max-w-[360px] flex justify center">Ariza yuborish / Подавать заявление</div>
        </Parallax>
  
    );
}

export default Boglanish