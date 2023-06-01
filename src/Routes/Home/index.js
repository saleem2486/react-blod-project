// import React, { useContext } from "react";
import { Logo, TopNavigation , LogoMobile} from "../../Components";
import Banner from "./Banner";
import Latest from "./Latest";
import LatestArticle from "./LatestArticle";
import Store from "../../Utility/ContextStore/contextAPI";
// import LatestStories from "./LatestStories";
// import Advertisement from "./Advertisement";
import "../../App.css";
import TopPots from "./TopPsts";
import Footer from "../../Components/Fotter/Fotter";

const Home = () => {
  //  const [state] = useContext(AppData)
  // console.log(state);

  return (
    <>
    <div className='LMobile' ><LogoMobile/></div>
    <div className='LLocal' ><Logo/>
      <TopNavigation/></div>
      <Store>
        <Banner />
        <Latest />
        <div className="mainContainer">
          <div className="subContainer">
            <div className="homeContainer">
              <LatestArticle />

              <TopPots />
            </div>
          </div>
        </div>
        <br />
      </Store>
      <Footer/>
    </>
  );
};

export default Home;
