import React from 'react'
import youtube from '../../public/youtube.svg'
import facebook from '../../public/facebook.svg'
import intagram from '../../public/insta.svg'
import twitter from '../../public/twit.svg'

const SocialMedia = () => {
  return (
    <div className="social__media flex gap-4">

    <a href='https://www.youtube.com/ '>
      <img src={youtube} alt="" width={30}/>
    </a>

     <a href='https://twitter.com/'>
     <img src={twitter} alt="" width={30}/>
     </a>

     <a href='https://www.instagram.com/'>
     <img src={intagram} alt="" width={30}/>
     </a>

     <a href='https://www.facebook.com/'>
      <img src={facebook} alt="" width={30}/>
     </a>


    </div> 
  )
}

export default SocialMedia