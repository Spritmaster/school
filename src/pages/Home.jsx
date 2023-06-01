import React from 'react'
import PriymaryCarusel from './homeEl/PriymaryCarusel'
import ShortInfo from './homeEl/ShortInfo'
import Togaraklar from './homeEl/Togaraklar'
import MySchool from './MySchool'
import Boglanish from '../Boglanish'
import Statistic from '../Statistic'
import OqituvchilarFaoliyati from './homeEl/OqituvchilarFaoliyati'


const Home = () => {
  return (
    <div>
      <PriymaryCarusel></PriymaryCarusel>
      <ShortInfo></ShortInfo>
      <Togaraklar></Togaraklar>
      <MySchool></MySchool>
      <Boglanish></Boglanish>
      <Statistic></Statistic>
      <OqituvchilarFaoliyati></OqituvchilarFaoliyati>

      <span class="ed-badge">Explore</span>
      
    </div>
  )
}

export default Home