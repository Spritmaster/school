import React from 'react'
import Slider from 'react-slick'
 
const OqituvchilarFaoliyati = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
          <div>
      <Slider 
      customPaging={i =>{
        return <a href='#'>{i}</a>
      }} 
      arrows
      dots={true} slidesToShow={3}>
       

       <div>
       <div   className='wrap '>
            <img src="https://97-maktab.uz/wp-content/uploads/2021/09/images.png" alt="Faxrli o’qituvchi-1" width={364} height={364}/>
            <div className="info">
              <span>Faxrli o’qituvchi-1	</span>
              10 yildan ortiq tajribaga ega
            </div>
        </div>
       </div>
       

       <div>
       <div className='wrap '>
            <img src="https://97-maktab.uz/wp-content/uploads/2021/09/images.png" alt="Faxrli o’qituvchi-1" width={364} height={364}/>
            <div className="info">
              <span>Faxrli o’qituvchi-2	</span>
              20 yildan ortiq tajribaga ega
            </div>
        </div>
       </div>



      <div>

      <div className='wrap'>
            <img src="https://97-maktab.uz/wp-content/uploads/2021/09/images.png" alt="Faxrli o’qituvchi-1" width={364} height={364}/>
            <div className="info">
              <span>Faxrli o’qituvchi-3	</span>
              15 yildan ortiq tajribaga ega
            </div>
        </div>
      </div>


      <div>  <div className='wrap'>
            <img src="https://97-maktab.uz/wp-content/uploads/2021/09/images.png" alt="Faxrli o’qituvchi-1" width={364} height={364}/>
            <div className="info">
              <span>Faxrli o’qituvchi-4	</span>
              10 yildan ortiq tajribaga ega
            </div>
        </div></div>


        


        <div>
        <div className='wrap'>
            <img src="https://97-maktab.uz/wp-content/uploads/2021/09/images.png" alt="Faxrli o’qituvchi-1" width={364} height={364}/>
            <div className="info">
              <span>Faxrli o’qituvchi-5	</span>
              30 yildan ortiq tajribaga ega
            </div>
        </div>
        </div>


      </Slider>
    </div>
    </div>
  )
}

export default OqituvchilarFaoliyati