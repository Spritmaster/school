import React from 'react'

const MySchool = () => {
  return (
    <div className='flex items-center justify-between max-w-[1450px] mx-auto mt-[20px]'>
        <div className="school_info-wrap flex flex-col max-w-[730px] ms-[120px]">
            <h2 className='school_info-title text-[34px] mb-[10px]'>Bizning maktab / Наша школа</h2>

            <div className="school_info-box ms-[140px] mb-[12px]"></div>
            <p className="school_info-text ">Toshkent shaxar Yunusobod tumani xalq taʼlimi boʻlimiga qarashli 97-umumiy oʻrta taʼlim maktabi / 97-я общеобразовательная школа Юнусабадского района города Ташкента</p>
        </div>

        <img src="https://97-maktab.uz/wp-content/uploads/2021/10/photo_2021-10-06_15-33-29.jpg" alt=""  width={400} height={307}/>
    </div>
  )
}

export default MySchool