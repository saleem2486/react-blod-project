import React from 'react'
import { Logo, TopNavigation,LogoMobile } from '../../Components'
import TechArticleList from './TechArticleList'
import TechTopPost from './TechTopPost'
import Store from '../../Utility/ContextStore/contextAPI'
import Fotter from '../../Components/Fotter/Fotter'

const Technology = () => {
  return (
    <>
   <div className='LMobile' ><LogoMobile/></div>
    <div className='LLocal' ><Logo/>
      <TopNavigation/></div>
    <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
            <Store>
    <TechArticleList/>
    <TechTopPost/>
    </Store>

    </div>
    </div>
  

    </div>
    <Fotter/>

   
      
    </>
  )
}

export default Technology
