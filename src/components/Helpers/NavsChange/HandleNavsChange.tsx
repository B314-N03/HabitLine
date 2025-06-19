import { pagesOutsideWebapp } from "./const";
import { useEffect, useState } from "react";
import HeaderInsideWebapp from "../../Header/InsideWebapp/HeaderInsideWebapp";
import { useLocation } from "react-router-dom";
import SideNav from "../../Sidenav/Sidenav";

function HandleNavsChange() {
    const location = useLocation();
    const [isOutsideWebapp, setIsOutsideWebapp] = useState(
      pagesOutsideWebapp.map(page => page.path)
      .includes(location.pathname));
      
    useEffect(() => {
        setIsOutsideWebapp(
          pagesOutsideWebapp.map(page => page.path)
          .includes(location.pathname));
    }, [location.pathname]);
    
  return (
        isOutsideWebapp
          ?
            null
          : 
          <>
            <HeaderInsideWebapp />
            <SideNav />
          </>
  )
}

export default HandleNavsChange