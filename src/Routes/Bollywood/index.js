import React, { useContext } from 'react'
import { AppData } from '../../Components/Data'
import { Logo, LogoMobile, TopNavigation } from '../../Components'
import ArticleList from './ArticleList'
import TopPost from './TopPost'
import '../../App.css'
import Store from '../../Utility/ContextStore/contextAPI'
import Fotter from '../../Components/Fotter/Fotter'

function Bollywood() {
    
  return (
    <>
    <div className='LMobile' ><LogoMobile/></div>
    <div className='LLocal' ><Logo/>
      <TopNavigation/></div>
      <Store>
      <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
      <ArticleList/>
      <TopPost/>
      </div>
      </div>
      </div>
      <Fotter/>
      </Store>
    


    </>
  )
}

export default Bollywood
