import React from 'react'
import uzbIcon  from '../image/icon/uz.png'
import rus from "../image/icon/russ.jpg"
import SocialMedia from './SocialMedia'

const Header = () => {
  return (
    <div className="wrapHeader ">
        <div className='flex container mx-auto justify-between px-[150px]'>
        <ul className='header__pages '>
            <li>
            O’qituvchilarga
            </li>

            <li>
            Ota onalarga
            </li>

            <li>
            O’quvchilarga
            </li>

            <li className='language'>
            <img src={uzbIcon} alt="uzbflag" width={30}  height={35}/>
            Oʻzbek
            </li>

            <li className='language'>
            <img src={rus} alt="uzbflag" width={25}  height={25}/>
            Русский
            </li>

            <li>
            Sayt test rejimida
            </li>
        </ul>

        <SocialMedia></SocialMedia>
      
    </div>
    </div>

    
  )
}

export default Header