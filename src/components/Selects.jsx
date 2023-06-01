import React from 'react'
import Select from "react-select";

const Selects = () => {

  return (
    <div className='max-w-[890px] mx-auto'>
      <div  className='sel max-w-[1000px] mx-auto flex gap-[5px]'>

<div className="selects-wr ">
<div className="primary_link">
    <span>Asosiy</span>
  </div>


{/* MAktab */}
  <div class="dropdown">
   <span>Maktab</span>
   <div class="dropdown-content">
   <p>Rahbariyat</p>
   <p>Maktab haqida</p>
   <p>O'qituvchilar</p>
   <p></p>
   </div>
</div>

{/* hujatlar  */}
<div class="dropdown">
   <span>Hujjatlar</span>
   <div class="dropdown-content">
   <p>Talimga oid qonunlar</p>
   <p>Xalq ta'limi  vazirligi meyoriy hujjatlari</p>
   <p>Maktab nizomi</p>
   <p></p>
   </div>
</div>
{/* yangiliklar */}

<div className="news">Yangiliklar</div>

{/* kitoblar */}

<div class="dropdown">
   <span>Kitoblar</span>
   <div class="dropdown-content">
   <p>5-sinf</p>
   <p>6-sinf</p>
   <p>7-sinf</p>
   <p>8-sinf</p>
   <p>9-sinf</p>
   <p>10-sinf</p>
   <p>11-sinf</p>
   </div>
</div>

{/* media */}

<div class="dropdown">
   <span>Media</span>
   <div class="dropdown-content">
   <p>Fotolavhalar</p>
   <p>Vidiolavhalar</p>
   </div>
</div>

{/* interaktiv */}
<div class="dropdown">
   <span>Interaktiv xizmatlar</span>
   <div class="dropdown-content">
   <p>Dars jadvali</p>
   <p>Kundalik.com</p>
   </div>
</div>

{/* aloqa */}
<div className="news ">Aloqa</div>
</div>

</div>
    </div>
  )
}

export default Selects